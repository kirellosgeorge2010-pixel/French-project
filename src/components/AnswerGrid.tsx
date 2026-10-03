import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Question } from '../types/game';
import { useGame } from '../context/GameContext';

interface AnswerGridProps {
  question: Question;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export const AnswerGrid: React.FC<AnswerGridProps> = ({ question }) => {
  const {
    selectedAnswer,
    selectAnswer,
    isRevealing,
    isAnswerValidated,
    eliminatedAnswers,
  } = useGame();

  const getAnswerClasses = (index: number) => {
    const isEliminated = eliminatedAnswers.includes(index);
    if (isEliminated) {
      return 'opacity-15 pointer-events-none scale-95 border-slate-800 bg-slate-950/40 text-slate-600 line-through';
    }

    const isSelected = selectedAnswer === index;
    const isCorrect = index === question.correctAnswer;

    // After validation
    if (isAnswerValidated) {
      if (isCorrect) {
        return 'bg-gradient-to-r from-emerald-900/90 to-emerald-950 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/40 animate-pulse';
      }
      if (isSelected && !isCorrect) {
        return 'bg-gradient-to-r from-red-950 to-rose-900/90 border-2 border-red-500 text-white shadow-lg shadow-red-500/40';
      }
      return 'bg-blue-950/40 border border-blue-900/60 text-slate-400 opacity-60';
    }

    // During suspense reveal (pulsing amber)
    if (isRevealing) {
      if (isSelected) {
        return 'bg-gradient-to-r from-amber-600/40 to-yellow-600/40 border-2 border-amber-400 text-amber-200 shadow-xl shadow-amber-500/50 animate-pulse';
      }
      return 'bg-blue-950/40 border border-blue-900/50 text-slate-400 opacity-60 pointer-events-none';
    }

    // Before validation
    if (isSelected) {
      return 'bg-gradient-to-r from-amber-600/30 to-yellow-500/20 border-2 border-amber-400 text-yellow-200 shadow-lg shadow-amber-500/30 scale-[1.01]';
    }

    // Default clickable state
    return 'bg-gradient-to-b from-blue-950/80 to-slate-950/90 hover:from-blue-900/70 hover:to-slate-900 border-2 border-blue-800/80 hover:border-amber-400/80 text-slate-100 hover:text-white hover:scale-[1.015] active:scale-[0.985] cursor-pointer';
  };

  const getLetterBadgeClasses = (index: number) => {
    const isSelected = selectedAnswer === index;
    const isCorrect = index === question.correctAnswer;

    if (isAnswerValidated) {
      if (isCorrect) return 'bg-emerald-500 text-slate-950 font-black shadow-md';
      if (isSelected && !isCorrect) return 'bg-red-500 text-white font-black shadow-md';
      return 'bg-slate-800 text-slate-400';
    }

    if (isRevealing && isSelected) {
      return 'bg-amber-400 text-slate-950 font-black animate-pulse shadow-md';
    }

    if (isSelected) {
      return 'bg-amber-400 text-slate-950 font-black shadow-md';
    }

    return 'bg-blue-900/90 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-400 border border-amber-400/40 font-bold transition-colors';
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswer === index;
          const isEliminated = eliminatedAnswers.includes(index);
          const isCorrect = index === question.correctAnswer;

          return (
            <button
              key={index}
              onClick={() => selectAnswer(index)}
              disabled={isRevealing || isAnswerValidated || isEliminated}
              aria-label={`Option ${LETTERS[index]}: ${answer}`}
              className={`group relative text-left p-4 sm:p-5 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 shadow-md ${getAnswerClasses(index)}`}
            >
              {/* Left Letter Badge + Answer Text */}
              <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                {/* Diamond/Hexagon style letter */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-base font-display flex-shrink-0 transition-transform ${getLetterBadgeClasses(index)}`}
                >
                  {LETTERS[index]}
                </div>

                {/* Answer text */}
                <span className="text-sm sm:text-base md:text-lg font-semibold leading-snug tracking-wide">
                  {answer}
                </span>
              </div>

              {/* Status Icons */}
              {isAnswerValidated && (
                <div className="flex-shrink-0 ml-2">
                  {isCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 animate-bounce" />
                  )}
                  {isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-red-400 animate-pulse" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
