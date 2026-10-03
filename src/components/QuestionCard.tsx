import React from 'react';
import { Tag, Sparkles } from 'lucide-react';
import { Question } from '../types/game';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber }) => {
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return { label: 'Niveau Facile', color: 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300' };
      case 'medium':
        return { label: 'Niveau Moyen', color: 'bg-amber-950/80 border-amber-500/60 text-amber-300' };
      case 'hard':
        return { label: 'Niveau Difficile', color: 'bg-red-950/80 border-red-500/60 text-red-300' };
      default:
        return { label: 'Standard', color: 'bg-blue-950/80 border-blue-500/60 text-blue-300' };
    }
  };

  const badge = getDifficultyBadge(question.difficulty);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-3 sm:my-5 px-2">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-700 via-amber-500/30 to-blue-700 rounded-3xl blur-md opacity-40 animate-pulse"></div>

      {/* Main Hexagonal / Beveled TV Card */}
      <div className="relative bg-gradient-to-b from-blue-950 via-game-card to-slate-950 border-2 border-amber-400/80 rounded-2xl shadow-2xl p-5 sm:p-7 md:p-8 text-center transition-all duration-300">
        
        {/* Decorative corner jewels */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-amber-400 rotate-45 shadow"></div>
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-amber-400 rotate-45 shadow"></div>
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-amber-400 rotate-45 shadow"></div>
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-amber-400 rotate-45 shadow"></div>

        {/* Top Badges: Category & Difficulty */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 border border-blue-600/50 text-blue-200">
            <Tag className="w-3.5 h-3.5 text-amber-400" />
            <span>{question.category}</span>
          </div>

          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge.label}</span>
          </div>

          <div className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700 text-slate-300">
            N° {questionNumber}
          </div>
        </div>

        {/* Question Text */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-game text-white leading-relaxed sm:leading-snug tracking-wide min-h-[4rem] flex items-center justify-center">
          « {question.question} »
        </h2>
      </div>
    </div>
  );
};
