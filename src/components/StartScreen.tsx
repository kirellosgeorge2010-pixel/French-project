import React, { useState } from 'react';
import { Play, Sparkles, HelpCircle, Shield, Award } from 'lucide-react';
import { useGame } from '../context/GameContext';

export const StartScreen: React.FC = () => {
  const { playerName, startGame, history } = useGame();
  const [localName, setLocalName] = useState(playerName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startGame(localName);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dynamic Background Spotlights & Neon rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-800/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        
        {/* Prominent Custom Logo with Golden Halo */}
        <div className="relative mb-6 sm:mb-8 group">
          <div className="absolute -inset-2.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl shadow-amber-500/50 transform group-hover:scale-105 transition-transform duration-300">
            <img
              src="./logo.jpg"
              alt="Logo Le Million Quiz de France"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Game Title & Subtitle */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Le Plus Grand Quiz de France</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 tracking-wider drop-shadow-md">
            LE DÉFI DU MILLION
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-lg mx-auto font-medium">
            Testez vos connaissances, utilisez vos jokers avec stratégie et atteignez le sommet des 1 000 000 € !
          </p>
        </div>

        {/* Start Game Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-8">
          <div className="relative text-left">
            <label htmlFor="playerNameInput" className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5 ml-1">
              Entrez votre prénom ou pseudo
            </label>
            <input
              id="playerNameInput"
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="Ex : Alexandre, Camille, Thomas..."
              maxLength={25}
              className="w-full px-5 py-3.5 rounded-xl bg-blue-950/80 border-2 border-blue-700/80 focus:border-amber-400 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 transition-all font-game text-base shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-display font-black text-lg sm:text-xl tracking-wider shadow-2xl shadow-amber-500/40 hover:shadow-amber-400/60 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Play className="w-6 h-6 fill-slate-950" />
            <span>COMMENCER LE DÉFI</span>
          </button>
        </form>

        {/* Game Rules / Highlights Bar */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60 backdrop-blur-sm text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-1.5 text-center p-2">
            <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-200">15 Questions</span>
            <span className="text-[11px] text-slate-400">Difficulté progressive</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center p-2">
            <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-200">3 Jokers</span>
            <span className="text-[11px] text-slate-400">50:50, Public, Swap</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center p-2">
            <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center text-amber-400">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-200">2 Paliers</span>
            <span className="text-[11px] text-slate-400">2 000 € & 100 000 €</span>
          </div>
        </div>

        {/* History / Previous attempts */}
        {history.length > 0 && (
          <div className="w-full mt-6 text-left p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Dernières performances enregistrées</span>
            </div>
            <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1 text-xs">
              {history.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-300 py-1 border-b border-slate-800/60">
                  <span className="font-medium text-slate-200">{item.playerName} ({item.date})</span>
                  <span className="font-mono font-bold text-yellow-400">
                    {item.prizeWon.toLocaleString('fr-FR')} € ({item.score}/15)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
