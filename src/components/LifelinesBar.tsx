import React from 'react';
import { Users, RefreshCw, X } from 'lucide-react';
import { useGame } from '../context/GameContext';

export const LifelinesBar: React.FC = () => {
  const {
    lifelines,
    useFiftyFifty,
    useAudience,
    useSwitchQuestion,
    isRevealing,
    isAnswerValidated,
  } = useGame();

  const isLocked = isRevealing || isAnswerValidated;

  return (
    <div className="w-full flex items-center justify-center gap-3 sm:gap-6 py-2 px-3">
      {/* 50:50 Joker */}
      <button
        onClick={useFiftyFifty}
        disabled={!lifelines.fiftyFifty || isLocked}
        title={lifelines.fiftyFifty ? "50:50 : Supprime 2 mauvaises réponses" : "50:50 déjà utilisé"}
        className={`relative group px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border font-display font-black text-sm sm:text-base tracking-wider transition-all duration-300 shadow-lg active:scale-95 ${
          lifelines.fiftyFifty && !isLocked
            ? 'bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 border-amber-400/80 text-yellow-300 hover:border-amber-300 hover:shadow-amber-500/20 hover:scale-105 cursor-pointer'
            : 'bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed opacity-50'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg">50:50</span>
        </div>
        {!lifelines.fiftyFifty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-0.5 bg-red-500 rotate-12 shadow"></div>
            <X className="w-6 h-6 text-red-500/90 absolute" />
          </div>
        )}
      </button>

      {/* Public Joker */}
      <button
        onClick={useAudience}
        disabled={!lifelines.audience || isLocked}
        title={lifelines.audience ? "Avis du public : Consultez le vote des spectateurs" : "Avis du public déjà utilisé"}
        className={`relative group px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border font-display font-black text-sm sm:text-base tracking-wider transition-all duration-300 shadow-lg active:scale-95 ${
          lifelines.audience && !isLocked
            ? 'bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 border-amber-400/80 text-yellow-300 hover:border-amber-300 hover:shadow-amber-500/20 hover:scale-105 cursor-pointer'
            : 'bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed opacity-50'
        }`}
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          <span className="hidden sm:inline">Public</span>
        </div>
        {!lifelines.audience && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-0.5 bg-red-500 rotate-12 shadow"></div>
            <X className="w-6 h-6 text-red-500/90 absolute" />
          </div>
        )}
      </button>

      {/* Switch Question Joker */}
      <button
        onClick={useSwitchQuestion}
        disabled={!lifelines.switchQuestion || isLocked}
        title={lifelines.switchQuestion ? "Changer de question : Remplace par une question de même niveau" : "Changement déjà utilisé"}
        className={`relative group px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border font-display font-black text-sm sm:text-base tracking-wider transition-all duration-300 shadow-lg active:scale-95 ${
          lifelines.switchQuestion && !isLocked
            ? 'bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 border-amber-400/80 text-yellow-300 hover:border-amber-300 hover:shadow-amber-500/20 hover:scale-105 cursor-pointer'
            : 'bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed opacity-50'
        }`}
      >
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
          <span className="hidden sm:inline">Changer</span>
        </div>
        {!lifelines.switchQuestion && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-0.5 bg-red-500 rotate-12 shadow"></div>
            <X className="w-6 h-6 text-red-500/90 absolute" />
          </div>
        )}
      </button>
    </div>
  );
};
