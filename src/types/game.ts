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
  | 'musique-aujourdhui'
  | 'annee-2000'
  | 'annee-1990'
  | 'film-series'
  | 'anime'
  | 'jeux-videos';

export const MUSIC_CATEGORIES: Record<MusicCategory, string> = {
  'musique-aujourdhui': 'Musique d\'aujourd\'hui',
  'annee-2000': 'Années 2000',
  'annee-1990': 'Années 1990',
  'film-series': 'Films & Séries',
  'anime': 'Anime',
  'jeux-videos': 'Jeux Vidéos',
};

export const SCORING = {
  ARTIST_ONLY: 5,
  TITLE_ONLY: 5,
  BOTH: 15
} as const;