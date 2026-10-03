import React from 'react';
import { Users, X } from 'lucide-react';
import { useGame } from '../context/GameContext';

export const AudienceModal: React.FC = () => {
  const { isAudienceModalOpen, closeAudienceModal, audienceVotes, currentQuestion } = useGame();

  if (!isAudienceModalOpen || !audienceVotes || !currentQuestion) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-blue-950 via-game-card to-slate-950 border-2 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/20 text-center animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeAudienceModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-slate-700/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Icon and Title */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-400 shadow-inner">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
            Avis du Public
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Voici les résultats du vote électronique des 100 spectateurs en plateau :
          </p>
        </div>

        {/* Audience Graph (Bar Chart) */}
        <div className="space-y-4 my-6">
          {audienceVotes.map((vote) => {
            const answerText = currentQuestion.answers[vote.index];
            return (
              <div key={vote.letter} className="space-y-1.5 text-left">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold text-amber-300 flex items-center gap-2">
                    <span className="inline-block w-6 h-6 rounded-md bg-blue-900 border border-amber-400/50 text-center leading-6 text-xs text-white">
                      {vote.letter}
                    </span>
                    <span className="text-slate-200 truncate max-w-[200px] sm:max-w-xs">
                      {answerText}
                    </span>
                  </span>
                  <span className="font-mono font-black text-amber-400 text-sm">
                    {vote.percentage}%
                  </span>
                </div>

                {/* Bar */}
                <div className="w-full h-4 bg-slate-900/90 rounded-full overflow-hidden border border-blue-900/60 p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-1000 shadow-inner"
                    style={{ width: `${vote.percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={closeAudienceModal}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-display font-black text-sm tracking-wider shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
        >
          MERCI AU PUBLIC
        </button>
      </div>
    </div>
  );
};
