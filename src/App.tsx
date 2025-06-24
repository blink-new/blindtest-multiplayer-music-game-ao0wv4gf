import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import HomePage from './components/HomePage';
import LobbyPage from './components/LobbyPage';
import GamePage from './components/GamePage';
import GameFinished from './components/GameFinished';

const GameRouter: React.FC = () => {
  const { room, isConnected } = useGame();

  if (!isConnected || !room) {
    return <HomePage />;
  }

  switch (room.gameState) {
    case 'lobby':
      return <LobbyPage />;
    case 'playing':
      return <GamePage />;
    case 'finished':
      return <GameFinished />;
    default:
      return <HomePage />;
  }
};

function App() {
  return (
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}

export default App;