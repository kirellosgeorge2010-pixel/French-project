import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Loader2, Trophy } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { PRIZE_LADDER } from '../data/prizes';

export const ValidationBar: React.FC = () => {
  const {
    selectedAnswer,
    confirmAnswer,
    nextQuestion,
    isRevealing,
    isAnswerValidated,
    isCorrect,
    currentQuestion,
    currentQuestionIndex,
  } = useGame();

  const currentStep = PRIZE_LADDER[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === 14;

  return (
    <div className="w-full max-w-4xl mx-auto px-2 mt-5 sm:mt-7 flex flex-col items-center">
      {/* 1. Validation Action Button (when an answer is selected but not yet validated) */}
      {selectedAnswer !== null && !isAnswerValidated && !isRevealing && (
        <button
          onClick={confirmAnswer}
          className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-display font-black text-lg sm:text-xl tracking-wider shadow-2xl shadow-amber-500/40 hover:shadow-amber-400/60 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer animate-bounce duration-300"
        >
          <Sparkles className="w-6 h-6 mr-3 text-slate-950 animate-spin" />
          <span>VALIDER MON CHOIX</span>
        </button>
      )}

      {/* 2. Suspense loading indicator */}
      {isRevealing && (
        <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/40 px-6 py-3.5 rounded-full shadow-lg">
          <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
          <span className="font-display font-bold text-amber-300 tracking-wide text-sm sm:text-base animate-pulse">
            Dernier mot... Vérification en cours...
          </span>
        </div>
      )}

      {/* 3. Feedback Banner after Answer Validation */}
      {isAnswerValidated && currentQuestion && (
        <div className="w-full flex flex-col items-center gap-4 animate-in fade-in duration-300">
          {/* Result Banner Card */}
          <div
            className={`w-full p-4 sm:p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl ${
              isCorrect
                ? 'bg-gradient-to-r from-emerald-950/90 to-blue-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-gradient-to-r from-red-950/90 to-blue-950/80 border-red-500/80 text-red-200'
            }`}
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div
                className={`p-2.5 rounded-xl ${
                  isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-8 h-8" />
                ) : (
                  <AlertTriangle className="w-8 h-8" />
                )}
              </div>
              <div>
                <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-wide">
                  {isCorrect ? "C'est une excellente réponse !" : "Mauvaise réponse !"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {currentQuestion.explanation || (isCorrect ? `Vous remportez le palier de ${currentStep.label} !` : `La bonne réponse était la proposition ${String.fromCharCode(65 + currentQuestion.correctAnswer)}.`)}
                </p>
              </div>
            </div>

            {/* Next Question / Finish Action Button */}
            {isCorrect && (
              <button
                onClick={nextQuestion}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-display font-black text-sm sm:text-base tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                {isLastQuestion ? (
                  <>
                    <Trophy className="w-5 h-5 text-slate-950" />
                    <span>RÉCUPÉRER LE MILLION !</span>
                  </>
                ) : (
                  <>
                    <span>Question suivante</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
