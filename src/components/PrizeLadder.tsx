import React from 'react';
import { Trophy, Check, ShieldCheck, X } from 'lucide-react';
import { PRIZE_LADDER } from '../data/prizes';
import { useGame } from '../context/GameContext';

interface PrizeLadderProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const PrizeLadder: React.FC<PrizeLadderProps> = ({ isOpen = false, onClose }) => {
  const { currentQuestionIndex } = useGame();

  // Reverse ladder so 1 000 000 € is on top (classic TV show display)
  const reversedLadder = [...PRIZE_LADDER].reverse();

  const content = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-3.5 border-b border-blue-900/60 bg-blue-950/70">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="font-display font-black text-sm tracking-wider text-yellow-300 uppercase">
            Pyramide des Gains
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900/60 border border-slate-700/60"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Ladder Steps List */}
      <div className="flex-1 overflow-y-auto py-2 px-2.5 space-y-1 scrollbar-thin">
        {reversedLadder.map((step) => {
          const stepIndex = step.level - 1;
          const isCurrent = stepIndex === currentQuestionIndex;
          const isPassed = stepIndex < currentQuestionIndex;
          const isMilestone = step.isMilestone;

          let stepStyle = 'text-slate-400 border border-transparent';

          if (isCurrent) {
            // Highlighting current level
            stepStyle =
              'bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border-amber-400/90 text-yellow-200 font-bold shadow-md shadow-amber-500/20 scale-[1.02] ring-1 ring-amber-400';
          } else if (isPassed) {
            // Completed levels
            stepStyle = 'bg-emerald-950/40 text-emerald-300/80 border-emerald-900/40';
          } else if (isMilestone) {
            // Milestone ahead
            stepStyle = 'bg-blue-900/30 text-white font-semibold border-amber-400/30';
          } else {
            // Regular future level
            stepStyle = 'hover:bg-blue-950/30 text-slate-400';
          }

          return (
            <div
              key={step.level}
              className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all duration-200 ${stepStyle}`}
            >
              {/* Level index + milestone indicator */}
              <div className="flex items-center gap-2">
                <span className="font-display font-bold w-5 text-right text-slate-400 text-xs">
                  {step.level}
                </span>

                {isPassed ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                ) : isCurrent ? (
                  <span className="text-amber-400 font-black animate-pulse text-xs">▶</span>
                ) : isMilestone ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                ) : (
                  <span className="w-3.5 h-3.5 text-slate-600 inline-block text-center">•</span>
                )}
              </div>

              {/* Prize Amount */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-mono tracking-wider ${
                    step.level === 15
                      ? 'text-yellow-300 font-black text-sm'
                      : isMilestone
                      ? 'text-amber-300 font-bold'
                      : isCurrent
                      ? 'text-yellow-200 font-bold'
                      : 'text-slate-300'
                  }`}
                >
                  {step.label}
                </span>
                {step.level === 15 && <Trophy className="w-3.5 h-3.5 text-amber-400" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety Net Milestones Info Footer */}
      <div className="p-3 border-t border-blue-900/60 bg-blue-950/40 text-[11px] text-slate-400 space-y-1">
        <div className="flex items-center gap-1.5 text-amber-300/90 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Paliers garantis : 2 000 € (Q5) & 100 000 € (Q10)</span>
        </div>
        <p className="text-slate-500">Une fois atteint, le montant est acquis en cas d'erreur.</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-72 bg-game-card/90 backdrop-blur-md border border-blue-900/60 rounded-2xl shadow-2xl overflow-hidden self-start sticky top-20">
        {content}
      </aside>

      {/* Mobile Drawer / Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-80 max-w-[85vw] h-full bg-game-dark border-l border-amber-500/50 shadow-2xl">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
