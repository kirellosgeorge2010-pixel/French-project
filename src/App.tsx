import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';

const MainContent: React.FC = () => {
  const { status } = useGame();

  if (status === 'start') {
    return (
      <div className="min-h-screen flex flex-col bg-game-darkest text-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <StartScreen />
        </main>
      </div>
    );
  }

  if (status === 'victory' || status === 'game_over') {
    return (
      <div className="min-h-screen flex flex-col bg-game-darkest text-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <EndScreen />
        </main>
      </div>
    );
  }

  return <GameScreen />;
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <MainContent />
    </GameProvider>
  );
};

export default App;
