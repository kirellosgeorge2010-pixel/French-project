import React, { createContext, useContext, useState, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import { Question, Lifelines, AudienceVote, GameStatus, GameHistoryRecord } from '../types/game';
import { generateGameSet, getReplacementQuestion } from '../data/questions';
import { PRIZE_LADDER, getGuaranteedPrize } from '../data/prizes';
import { soundService } from '../services/sound';

interface GameContextType {
  playerName: string;
  setPlayerName: (name: string) => void;
  status: GameStatus;
  currentQuestionIndex: number;
  currentQuestion: Question | null;
  questions: Question[];
  selectedAnswer: number | null;
  isRevealing: boolean;
  isAnswerValidated: boolean;
  isCorrect: boolean | null;
  eliminatedAnswers: number[];
  lifelines: Lifelines;
  audienceVotes: AudienceVote[] | null;
  isAudienceModalOpen: boolean;
  score: number;
  currentPrize: number;
  guaranteedPrize: number;
  isMuted: boolean;
  history: GameHistoryRecord[];
  
  // Actions
  startGame: (name?: string) => void;
  selectAnswer: (index: number) => void;
  confirmAnswer: () => void;
  nextQuestion: () => void;
  restartGame: () => void;
  quitToHome: () => void;
  toggleMute: () => void;
  closeAudienceModal: () => void;

  // Lifelines
  useFiftyFifty: () => void;
  useAudience: () => void;
  useSwitchQuestion: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playerName, setPlayerNameState] = useState<string>(() => {
    return localStorage.getItem('million_player_name') || '';
  });

  const [status, setStatus] = useState<GameStatus>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isRevealing, setIsRevealing] = useState<boolean>(false);
  const [isAnswerValidated, setIsAnswerValidated] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [eliminatedAnswers, setEliminatedAnswers] = useState<number[]>([]);
  const [lifelines, setLifelines] = useState<Lifelines>({
    fiftyFifty: true,
    audience: true,
    switchQuestion: true,
  });
  const [audienceVotes, setAudienceVotes] = useState<AudienceVote[] | null>(null);
  const [isAudienceModalOpen, setIsAudienceModalOpen] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [currentPrize, setCurrentPrize] = useState<number>(0);
  const [guaranteedPrize, setGuaranteedPrize] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundService.getMuted());
  const [history, setHistory] = useState<GameHistoryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('million_game_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const setPlayerName = (name: string) => {
    setPlayerNameState(name);
    localStorage.setItem('million_player_name', name);
  };

  const currentQuestion = questions[currentQuestionIndex] || null;

  // Toggle Mute
  const toggleMute = () => {
    const nextMuted = soundService.toggleMute();
    setIsMuted(nextMuted);
  };

  // Launch confetti on high score / victory
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#facc15', '#38bdf8', '#10b981', '#ffffff']
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#facc15', '#ca8a04', '#eab308']
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#38bdf8', '#1e40af', '#60a5fa']
        });
      }, 350);
    } catch (e) {
      console.warn("Confetti effect unavailable", e);
    }
  };

  // Save game record to history
  const recordGameResult = (finalPrize: number, finalScore: number, won: boolean) => {
    const record: GameHistoryRecord = {
      date: new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      playerName: playerName.trim() || 'Candidat Anonyme',
      score: finalScore,
      maxScore: 15,
      prizeWon: finalPrize,
      wonGame: won
    };
    const updated = [record, ...history].slice(0, 10);
    setHistory(updated);
    try {
      localStorage.setItem('million_game_history', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save history", e);
    }
  };

  // Start new game
  const startGame = (customName?: string) => {
    if (customName !== undefined) {
      setPlayerName(customName);
    }
    const newQuestions = generateGameSet();
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsRevealing(false);
    setIsAnswerValidated(false);
    setIsCorrect(null);
    setEliminatedAnswers([]);
    setLifelines({
      fiftyFifty: true,
      audience: true,
      switchQuestion: true,
    });
    setAudienceVotes(null);
    setIsAudienceModalOpen(false);
    setScore(0);
    setCurrentPrize(0);
    setGuaranteedPrize(0);
    setStatus('playing');

    soundService.playConfirm();
  };

  // Select an answer option
  const selectAnswer = (index: number) => {
    if (isAnswerValidated || isRevealing || eliminatedAnswers.includes(index)) {
      return;
    }
    setSelectedAnswer(index);
    soundService.playSelect();
  };

  // Confirm and validate current answer
  const confirmAnswer = () => {
    if (selectedAnswer === null || !currentQuestion || isAnswerValidated || isRevealing) {
      return;
    }

    setIsRevealing(true);
    soundService.playConfirm();
    soundService.startSuspense();

    // Dramatic suspense delay (1.4 seconds)
    setTimeout(() => {
      soundService.stopSuspense();
      setIsRevealing(false);
      setIsAnswerValidated(true);

      const correct = selectedAnswer === currentQuestion.correctAnswer;
      setIsCorrect(correct);

      if (correct) {
        soundService.playCorrect();
        const stepPrize = PRIZE_LADDER[currentQuestionIndex].amount;
        const newScore = score + 1;
        setScore(newScore);
        setCurrentPrize(stepPrize);

        // Update guaranteed safety net
        const safeMilestone = getGuaranteedPrize(currentQuestionIndex + 1);
        if (safeMilestone > guaranteedPrize) {
          setGuaranteedPrize(safeMilestone);
        }

        // Check if question 15 (Grand Final Million Won!)
        if (currentQuestionIndex === 14) {
          setTimeout(() => {
            soundService.playGrandVictory();
            triggerConfetti();
            setStatus('victory');
            recordGameResult(1000000, 15, true);
          }, 1200);
        } else {
          setStatus('answered');
        }
      } else {
        soundService.playWrong();
        const finalPrize = guaranteedPrize;
        setTimeout(() => {
          setStatus('game_over');
          recordGameResult(finalPrize, score, false);
        }, 1800);
      }
    }, 1400);
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < 14) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsRevealing(false);
      setIsAnswerValidated(false);
      setIsCorrect(null);
      setEliminatedAnswers([]);
      setStatus('playing');
      soundService.playSelect();
    } else {
      setStatus('victory');
    }
  };

  // Restart game
  const restartGame = () => {
    startGame();
  };

  // Quit to Home
  const quitToHome = () => {
    soundService.stopSuspense();
    setStatus('start');
  };

  // Lifeline 1: 50:50
  const useFiftyFifty = () => {
    if (!lifelines.fiftyFifty || !currentQuestion || isAnswerValidated || isRevealing) {
      return;
    }

    soundService.playLifeline();

    const correctIndex = currentQuestion.correctAnswer;
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIndex);

    // Shuffle wrong indices and take 2 to eliminate
    const shuffledWrong = [...wrongIndices].sort(() => Math.random() - 0.5);
    const toEliminate = shuffledWrong.slice(0, 2);

    setEliminatedAnswers(toEliminate);
    setLifelines(prev => ({ ...prev, fiftyFifty: false }));

    // If player had currently selected one of the eliminated answers, deselect it
    if (selectedAnswer !== null && toEliminate.includes(selectedAnswer)) {
      setSelectedAnswer(null);
    }
  };

  // Lifeline 2: Avis du Public
  const useAudience = () => {
    if (!lifelines.audience || !currentQuestion || isAnswerValidated || isRevealing) {
      return;
    }

    soundService.playLifeline();

    const correctIndex = currentQuestion.correctAnswer;
    const letters = ['A', 'B', 'C', 'D'];
    const diff = currentQuestion.difficulty;

    // Audience accuracy based on difficulty
    let correctWeight = 75; // easy
    if (diff === 'medium') correctWeight = 58;
    if (diff === 'hard') correctWeight = 42;

    // Allocate percentages to active answers
    const activeIndices = [0, 1, 2, 3].filter(i => !eliminatedAnswers.includes(i));
    let remaining = 100;

    // Assign weight to correct
    const correctScore = activeIndices.includes(correctIndex)
      ? Math.min(remaining - (activeIndices.length - 1) * 3, Math.floor(correctWeight + (Math.random() * 10 - 5)))
      : 0;

    remaining -= correctScore;

    const otherIndices = activeIndices.filter(i => i !== correctIndex);
    const rawShares: Record<number, number> = {};

    otherIndices.forEach((idx, i) => {
      if (i === otherIndices.length - 1) {
        rawShares[idx] = Math.max(0, remaining);
      } else {
        const share = Math.floor(Math.random() * remaining * 0.7);
        rawShares[idx] = share;
        remaining -= share;
      }
    });

    const votes: AudienceVote[] = [0, 1, 2, 3].map(i => {
      let pct = 0;
      if (eliminatedAnswers.includes(i)) {
        pct = 0;
      } else if (i === correctIndex) {
        pct = correctScore;
      } else {
        pct = rawShares[i] || 0;
      }
      return {
        index: i,
        letter: letters[i],
        percentage: pct,
      };
    });

    setAudienceVotes(votes);
    setIsAudienceModalOpen(true);
    setLifelines(prev => ({ ...prev, audience: false }));
  };

  const closeAudienceModal = () => {
    setIsAudienceModalOpen(false);
  };

  // Lifeline 3: Changer de question
  const useSwitchQuestion = () => {
    if (!lifelines.switchQuestion || !currentQuestion || isAnswerValidated || isRevealing) {
      return;
    }

    soundService.playLifeline();

    const currentSetIds = questions.map(q => q.id);
    const newQuestion = getReplacementQuestion(currentQuestion, currentSetIds);

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = newQuestion;

    setQuestions(updatedQuestions);
    setSelectedAnswer(null);
    setEliminatedAnswers([]);
    setLifelines(prev => ({ ...prev, switchQuestion: false }));
  };

  return (
    <GameContext.Provider
      value={{
        playerName,
        setPlayerName,
        status,
        currentQuestionIndex,
        currentQuestion,
        questions,
        selectedAnswer,
        isRevealing,
        isAnswerValidated,
        isCorrect,
        eliminatedAnswers,
        lifelines,
        audienceVotes,
        isAudienceModalOpen,
        score,
        currentPrize,
        guaranteedPrize,
        isMuted,
        history,
        startGame,
        selectAnswer,
        confirmAnswer,
        nextQuestion,
        restartGame,
        quitToHome,
        toggleMute,
        closeAudienceModal,
        useFiftyFifty,
        useAudience,
        useSwitchQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
