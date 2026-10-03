import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Header } from './Header';
import { LifelinesBar } from './LifelinesBar';
import { QuestionCard } from './QuestionCard';
import { AnswerGrid } from './AnswerGrid';
import { ValidationBar } from './ValidationBar';
import { PrizeLadder } from './PrizeLadder';
import { AudienceModal } from './AudienceModal';

export const GameScreen: React.FC = () => {
  const { currentQuestion, currentQuestionIndex } = useGame();
  const [isLadderOpen, setIsLadderOpen] = useState(false);

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-game-darkest text-white selection:bg-amber-500 selection:text-black">
      {/* Top Header */}
      <Header
        isLadderOpen={isLadderOpen}
        onToggleLadder={() => setIsLadderOpen(!isLadderOpen)}
      />

      {/* Main Game Arena */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 flex gap-6 items-start justify-center">
        {/* Left / Center: Interactive Game Show Stage */}
        <main className="flex-1 flex flex-col items-center justify-between w-full max-w-4xl py-2">
          
          {/* Lifelines / Jokers */}
          <LifelinesBar />

          {/* Question Display Card */}
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
          />

          {/* 4 Answers Grid */}
          <AnswerGrid question={currentQuestion} />

          {/* Confirmation & Post-Answer Action Bar */}
          <ValidationBar />

        </main>

        {/* Right: Prize Ladder (Desktop side panel & Mobile drawer) */}
        <PrizeLadder
          isOpen={isLadderOpen}
          onClose={() => setIsLadderOpen(false)}
        />
      </div>

      {/* Audience Lifeline Modal */}
      <AudienceModal />
    </div>
  );
};
