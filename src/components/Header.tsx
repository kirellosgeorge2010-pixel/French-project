import React from 'react';
import { Volume2, VolumeX, Menu, Home, ShieldCheck } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { PRIZE_LADDER } from '../data/prizes';

interface HeaderProps {
  onToggleLadder?: () => void;
  isLadderOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleLadder, isLadderOpen }) => {
  const {
    status,
    currentQuestionIndex,
    guaranteedPrize,
    isMuted,
    toggleMute,
    quitToHome,
    playerName,
  } = useGame();

  const isPlaying = status !== 'start';
  const currentStep = PRIZE_LADDER[currentQuestionIndex];

  return (
    <header className="sticky top-0 z-40 w-full bg-game-dark/95 backdrop-blur-md border-b border-blue-900/60 shadow-xl px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={quitToHome}>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <img
              src="./logo.jpg"
              alt="Le Million - Quiz de France"
              className="relative w-11 h-11 md:w-13 md:h-13 rounded-full object-cover border-2 border-amber-400 shadow-lg"
            />
          </div>
          <div>
            <span className="hidden sm:block text-xs uppercase tracking-widest text-amber-300 font-bold">
              Quiz de France
            </span>
            <h1 className="text-base sm:text-lg md:text-xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 tracking-wider">
              LE MILLION
            </h1>
          </div>
        </div>

        {/* Center: In-game Status Badges */}
        {isPlaying && (
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {/* Question Tracker */}
            <div className="bg-blue-950/80 border border-blue-700/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-inner">
              <span className="text-slate-400 font-medium">Question</span>
              <span className="font-bold text-amber-400 text-sm sm:text-base">
                {currentQuestionIndex + 1}
              </span>
              <span className="text-slate-500">/ 15</span>
            </div>

            {/* Current Target Prize */}
            <div className="bg-gradient-to-r from-amber-950/70 to-blue-950/70 border border-amber-500/50 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-inner">
              <span className="hidden md:inline text-slate-300 font-medium">En jeu :</span>
              <span className="font-black text-yellow-300 tracking-wide text-sm sm:text-base">
                {currentStep ? currentStep.label : '100 €'}
              </span>
            </div>

            {/* Guaranteed safety net if applicable */}
            {guaranteedPrize > 0 && (
              <div className="hidden lg:flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-600/50 text-emerald-300 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold">Acquis :</span>
                <span className="font-bold text-xs">{guaranteedPrize.toLocaleString('fr-FR')} €</span>
              </div>
            )}
          </div>
        )}

        {/* Right Controls: Sound, Mobile Ladder Drawer, Quit */}
        <div className="flex items-center gap-2">
          {/* Player Name Tag on Desktop */}
          {isPlaying && playerName && (
            <div className="hidden xl:flex items-center text-xs text-slate-300 bg-blue-900/40 border border-blue-800/40 px-3 py-1.5 rounded-full">
              <span className="text-slate-400 mr-1.5">Candidat :</span>
              <span className="font-bold text-amber-300">{playerName}</span>
            </div>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Activer le son" : "Couper le son"}
            className="p-2 sm:px-3 sm:py-2 rounded-lg bg-blue-950/80 hover:bg-blue-900/80 border border-blue-800/60 text-slate-200 transition-colors flex items-center gap-1.5 shadow-md active:scale-95"
            aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-red-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-amber-400" />
            )}
            <span className="hidden sm:inline text-xs font-semibold">
              {isMuted ? "Muet" : "Son"}
            </span>
          </button>

          {/* Mobile Ladder toggle button */}
          {isPlaying && onToggleLadder && (
            <button
              onClick={onToggleLadder}
              title="Voir la pyramide des gains"
              className={`lg:hidden p-2 rounded-lg border transition-colors flex items-center gap-1.5 shadow-md active:scale-95 ${
                isLadderOpen
                  ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold'
                  : 'bg-blue-950/80 text-amber-300 border-blue-800/60 hover:bg-blue-900/80'
              }`}
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs font-bold">Gains</span>
            </button>
          )}

          {/* Quit / Home button during gameplay */}
          {isPlaying && (
            <button
              onClick={quitToHome}
              title="Quitter la partie"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-red-950/60 border border-slate-700/60 hover:border-red-600/60 text-slate-400 hover:text-red-300 transition-colors active:scale-95"
            >
              <Home className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
