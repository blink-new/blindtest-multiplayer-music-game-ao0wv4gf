import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Room, Player, GameState, MusicCategory, Song, Answer } from '../types/game';

interface GameContextType {
  room: Room | null;
  currentPlayer: Player | null;
  isConnected: boolean;
  error: string | null;
  createRoom: (username: string) => void;
  joinRoom: (code: string, username: string) => void;
  leaveRoom: () => void;
  startGame: () => void;
  setCategory: (category: MusicCategory) => void;
  submitAnswer: (title?: string, artist?: string) => void;
  returnToLobby: () => void;
  restartGame: () => void;
}

interface GameState {
  room: Room | null;
  currentPlayer: Player | null;
  isConnected: boolean;
  error: string | null;
}

type GameAction = 
  | { type: 'SET_ROOM'; payload: Room }
  | { type: 'SET_PLAYER'; payload: Player }
  | { type: 'SET_CONNECTED'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_ROOM' }
  | { type: 'UPDATE_ROOM'; payload: Partial<Room> };

const GameContext = createContext<GameContextType | undefined>(undefined);

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SET_ROOM':
      return { ...state, room: action.payload };
    case 'SET_PLAYER':
      return { ...state, currentPlayer: action.payload };
    case 'SET_CONNECTED':
      return { ...state, isConnected: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ROOM':
      return { ...state, room: null, currentPlayer: null };
    case 'UPDATE_ROOM':
      return { ...state, room: state.room ? { ...state.room, ...action.payload } : null };
    default:
      return state;
  }
};

// Mock data for development
const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Lose Yourself',
    artist: 'Eminem',
    preview: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    album: '8 Mile',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    preview: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    album: 'A Night at the Opera',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  }
];

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    room: null,
    currentPlayer: null,
    isConnected: false,
    error: null
  });

  const generateRoomCode = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const createRoom = (username: string) => {
    const roomCode = generateRoomCode();
    const playerId = Date.now().toString();
    
    const newPlayer: Player = {
      id: playerId,
      username,
      score: 0,
      isHost: true
    };

    const newRoom: Room = {
      id: roomCode,
      code: roomCode,
      host: playerId,
      players: [newPlayer],
      gameState: 'lobby',
      currentSongIndex: 0,
      totalSongs: 10,
      timeLeft: 30,
      category: 'random',
      answers: {}
    };

    dispatch({ type: 'SET_PLAYER', payload: newPlayer });
    dispatch({ type: 'SET_ROOM', payload: newRoom });
    dispatch({ type: 'SET_CONNECTED', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  const joinRoom = (code: string, username: string) => {
    // Mock join room logic
    const playerId = Date.now().toString();
    const newPlayer: Player = {
      id: playerId,
      username,
      score: 0,
      isHost: false
    };

    // Simulate joining existing room
    dispatch({ type: 'SET_PLAYER', payload: newPlayer });
    dispatch({ type: 'SET_CONNECTED', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  const leaveRoom = () => {
    dispatch({ type: 'CLEAR_ROOM' });
    dispatch({ type: 'SET_CONNECTED', payload: false });
  };

  const startGame = () => {
    if (state.room && state.currentPlayer?.isHost) {
      dispatch({ 
        type: 'UPDATE_ROOM', 
        payload: { 
          gameState: 'playing',
          currentSong: mockSongs[0],
          currentSongIndex: 0,
          timeLeft: 30
        } 
      });
    }
  };

  const setCategory = (category: MusicCategory) => {
    if (state.room && state.currentPlayer?.isHost) {
      dispatch({ type: 'UPDATE_ROOM', payload: { category } });
    }
  };

  const submitAnswer = (title?: string, artist?: string) => {
    if (state.room && state.currentPlayer) {
      const answer: Answer = {
        title,
        artist,
        submittedAt: Date.now(),
        points: 0
      };

      // Calculate points
      if (title && artist) {
        answer.points = 15;
      } else if (title || artist) {
        answer.points = 5;
      }

      const newAnswers = {
        ...state.room.answers,
        [state.currentPlayer.id]: answer
      };

      dispatch({ 
        type: 'UPDATE_ROOM', 
        payload: { answers: newAnswers } 
      });
    }
  };

  const returnToLobby = () => {
    if (state.room && state.currentPlayer?.isHost) {
      dispatch({ 
        type: 'UPDATE_ROOM', 
        payload: { 
          gameState: 'lobby',
          currentSongIndex: 0,
          timeLeft: 30,
          answers: {}
        } 
      });
    }
  };

  const restartGame = () => {
    if (state.room && state.currentPlayer?.isHost) {
      dispatch({ 
        type: 'UPDATE_ROOM', 
        payload: { 
          gameState: 'playing',
          currentSongIndex: 0,
          timeLeft: 30,
          answers: {},
          currentSong: mockSongs[0]
        } 
      });
    }
  };

  const value: GameContextType = {
    room: state.room,
    currentPlayer: state.currentPlayer,
    isConnected: state.isConnected,
    error: state.error,
    createRoom,
    joinRoom,
    leaveRoom,
    startGame,
    setCategory,
    submitAnswer,
    returnToLobby,
    restartGame
  };

  // Timer effect for game countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (state.room?.gameState === 'playing' && state.room.timeLeft > 0) {
      interval = setInterval(() => {
        dispatch({
          type: 'UPDATE_ROOM',
          payload: { timeLeft: Math.max(0, state.room!.timeLeft - 1) }
        });
      }, 1000);
    } else if (state.room?.gameState === 'playing' && state.room.timeLeft === 0) {
      // Timer finished, move to next song or end game
      const nextIndex = state.room.currentSongIndex + 1;
      if (nextIndex >= state.room.totalSongs) {
        // Game finished
        const finalPlayers = state.room.players.map(player => {
          const totalScore = Object.values(state.room!.answers)
            .filter((_, i) => Object.keys(state.room!.answers)[i] === player.id)
            .reduce((sum, answer) => sum + answer.points, 0);
          return { ...player, score: totalScore };
        });
        
        dispatch({
          type: 'UPDATE_ROOM',
          payload: {
            gameState: 'finished',
            players: finalPlayers
          }
        });
      } else {
        // Next song
        dispatch({
          type: 'UPDATE_ROOM',
          payload: {
            currentSongIndex: nextIndex,
            currentSong: mockSongs[nextIndex % mockSongs.length],
            timeLeft: 30,
            answers: {}
          }
        });
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.room?.gameState, state.room?.timeLeft, state.room?.currentSongIndex, state.room?.totalSongs]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};