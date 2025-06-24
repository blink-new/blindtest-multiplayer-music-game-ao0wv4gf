export interface Player {
  id: string;
  username: string;
  score: number;
  isHost: boolean;
}

export interface Room {
  id: string;
  code: string;
  host: string;
  players: Player[];
  gameState: GameState;
  currentSong?: Song;
  currentSongIndex: number;
  totalSongs: number;
  timeLeft: number;
  category: MusicCategory;
  answers: Record<string, Answer>;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  preview: string;
  album?: string;
  cover?: string;
}

export interface Answer {
  title?: string;
  artist?: string;
  submittedAt: number;
  points: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  gradient: string;
  songs: Song[];
}

export type GameState = 
  | 'waiting' 
  | 'lobby' 
  | 'playing' 
  | 'revealing' 
  | 'finished';

export type MusicCategory = 
  | 'random'
  | 'france-90s'
  | 'france-2000s'
  | 'france-2010s'
  | 'hits-90s'
  | 'hits-2000s'
  | 'hits-2010s'
  | 'rock'
  | 'pop'
  | 'hip-hop';

export const MUSIC_CATEGORIES: Record<MusicCategory, string> = {
  'random': 'Aléatoire',
  'france-90s': 'France 90s',
  'france-2000s': 'France 2000s',
  'france-2010s': 'France 2010s',
  'hits-90s': 'Hits 90s',
  'hits-2000s': 'Hits 2000s',
  'hits-2010s': 'Hits 2010s',
  'rock': 'Rock',
  'pop': 'Pop',
  'hip-hop': 'Hip-Hop'
};

export const SCORING = {
  ARTIST_ONLY: 5,
  TITLE_ONLY: 5,
  BOTH: 15
} as const;