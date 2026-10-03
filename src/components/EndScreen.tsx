import React, { useEffect } from 'react';
import { Trophy, RotateCcw, Home, CheckCircle2, XCircle, Percent, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGame } from '../context/GameContext';

export const EndScreen: React.FC = () => {
  const {
    status,
    score,
    guaranteedPrize,
    playerName,
    restartGame,
    quitToHome,
  } = useGame();

  const isVictory = status === 'victory' || score === 15;
  const totalQuestions = 15;
  const incorrectCount = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Determine final payout:
  // If player won 15/15: 1 000 000 €
  // If player failed: guaranteed prize (0 €, 2 000 €, or 100 000 €)
  const finalPayout = isVictory ? 1000000 : guaranteedPrize;

  useEffect(() => {
    if (isVictory || score >= 10) {
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#facc15', '#38bdf8', '#10b981', '#f59e0b']
        });
      } catch (e) {
        console.warn(e);
      }
    }
  }, [isVictory, score]);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl bg-gradient-to-b from-blue-950/90 via-game-card to-slate-950 border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-2xl text-center">
        
        {/* Uploaded Logo Header */}
        <div className="relative mx-auto mb-5 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl shadow-amber-500/40">
          <img
            src="./logo.jpg"
            alt="Le Million Quiz de France"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="space-y-1.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isVictory ? 'Victoire Historique !' : 'Bilan de la partie'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 tracking-wider">
            {isVictory ? 'FÉLICITATIONS !' : 'PARTIE TERMINÉE'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            {playerName ? `Bravo ${playerName} pour ce parcours !` : 'Bravo pour votre parcours dans Le Million !'}
          </p>
        </div>

        {/* Final Prize Big Highlight Card */}
        <div className="w-full my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/70 via-blue-950/80 to-amber-950/70 border-2 border-amber-400/80 shadow-inner flex flex-col items-center gap-1.5">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            Gain Final Remporté
          </span>
          <span className="text-3xl sm:text-5xl font-mono font-black text-yellow-300 tracking-wider drop-shadow-md">
            {finalPayout.toLocaleString('fr-FR')} €
          </span>
          {!isVictory && guaranteedPrize > 0 && (
            <span className="text-xs text-emerald-400 font-medium">
              (Montant garanti par le palier de sécurité atteint)
            </span>
          )}
        </div>

        {/* Detailed Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-6 text-left">
          {/* Score final */}
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60 flex flex-col">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Score Final
            </span>
            <div className="flex items-center gap-2 mt-1">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-lg sm:text-xl font-bold text-white">
                {score} <span className="text-sm text-slate-400">/ 15</span>
              </span>
            </div>
          </div>

          {/* Bonnes réponses */}
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60 flex flex-col">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Bonnes Réponses
            </span>
            <div className="flex items-center gap-2 mt-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-lg sm:text-xl font-bold text-emerald-300">
                {score}
              </span>
            </div>
          </div>

          {/* Mauvaises réponses */}
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60 flex flex-col">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Erreurs
            </span>
            <div className="flex items-center gap-2 mt-1">
              <XCircle className="w-5 h-5 text-red-400" />
              <span className="text-lg sm:text-xl font-bold text-red-300">
                {incorrectCount}
              </span>
            </div>
          </div>

          {/* Taux de réussite */}
          <div className="col-span-2 sm:col-span-3 p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Percent className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Taux de réussite global :
              </span>
            </div>
            <span className="font-mono font-black text-amber-300 text-lg">
              {percentage} %
            </span>
          </div>
        </div>

        {/* Buttons: Rejouer & Retour à l'accueil */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
          <button
            onClick={restartGame}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-display font-black text-base tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>REJOUER UNE PARTIE</span>
          </button>

          <button
            onClick={quitToHome}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-display font-bold text-base tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Home className="w-5 h-5" />
            <span>RETOUR À L'ACCUEIL</span>
          </button>
        </div>

      </div>
    </div>
  );
};
