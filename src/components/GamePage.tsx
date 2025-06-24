import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Music, Clock, Send, Trophy, Volume2 } from 'lucide-react';
import { useGame } from '../context/GameContext';

const GamePage: React.FC = () => {
  const { room, currentPlayer, submitAnswer } = useGame();
  const [artistGuess, setArtistGuess] = useState('');
  const [titleGuess, setTitleGuess] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentPreviewUrl, setCurrentPreviewUrl] = useState<string | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const currentAnswer = room?.currentPlayer && room.answers[currentPlayer?.id || ''];
  const timeProgress = room ? ((30 - room.timeLeft) / 30) * 100 : 0;

  useEffect(() => {
    const newPreviewUrl = room?.currentSong?.preview || null;
    
    // Only update audio if the preview URL actually changed
    if (newPreviewUrl !== currentPreviewUrl) {
      setCurrentPreviewUrl(newPreviewUrl);
      
      // Clean up previous audio
      const cleanup = async () => {
        if (audioRef.current) {
          // Wait for any pending play promise
          if (playPromiseRef.current) {
            try {
              await playPromiseRef.current;
            } catch {
              // Ignore errors from interrupted plays
            }
          }
          
          audioRef.current.pause();
          audioRef.current.src = '';
          audioRef.current = null;
          playPromiseRef.current = null;
        }
      };
      
      // Create new audio if we have a URL
      const setupAudio = async () => {
        await cleanup();
        
        if (newPreviewUrl) {
          const audio = new Audio(newPreviewUrl);
          audio.loop = true;
          audioRef.current = audio;
          
          // Store the play promise
          playPromiseRef.current = audio.play().catch((error) => {
            if (error.name !== 'AbortError') {
              console.error('Audio play error:', error);
            }
          });
        }
      };
      
      setupAudio();
    }
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
      playPromiseRef.current = null;
    };
  }, [currentPreviewUrl, room?.currentSong?.preview]);

  // Clear guesses when song changes
  useEffect(() => {
    setArtistGuess('');
    setTitleGuess('');
  }, [room?.currentSongIndex]);

  const handleSubmitAnswer = () => {
    if (artistGuess.trim() || titleGuess.trim()) {
      submitAnswer(
        titleGuess.trim() || undefined,
        artistGuess.trim() || undefined
      );
    }
  };

  const getScoreColor = (points: number) => {
    if (points >= 15) return 'text-yellow-400';
    if (points >= 5) return 'text-green-400';
    return 'text-gray-400';
  };

  if (!room || !currentPlayer || room.gameState !== 'playing') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Music className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Musique {room.currentSongIndex + 1} / {room.totalSongs}
            </h1>
          </div>

          {/* Timer */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold text-white">
                {room.timeLeft}s
              </span>
            </div>
            <Progress 
              value={timeProgress} 
              className="h-3 bg-white/20"
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Music Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center relative overflow-hidden"
                >
                  {room.currentSong?.cover ? (
                    <img
                      src={room.currentSong.cover}
                      alt="Album cover"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Volume2 className="w-24 h-24 text-white" />
                  )}
                  
                  {/* Vinyl effect */}
                  <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                  <div className="absolute inset-6 border-4 border-white/20 rounded-full"></div>
                  <div className="absolute inset-1/2 w-4 h-4 -ml-2 -mt-2 bg-black/40 rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg text-gray-300"
                >
                  🎵 Musique en cours... 🎵
                </motion.div>

                {/* Audio controls would go here */}
                <div className="mt-4 text-sm text-gray-400">
                  Écoutez attentivement et devinez !
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Answer Input */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Vos Réponses
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Artiste
                    </label>
                    <Input
                      type="text"
                      placeholder="Nom de l'artiste..."
                      value={artistGuess}
                      onChange={(e) => setArtistGuess(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                      disabled={!!currentAnswer}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Titre
                    </label>
                    <Input
                      type="text"
                      placeholder="Titre de la chanson..."
                      value={titleGuess}
                      onChange={(e) => setTitleGuess(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                      disabled={!!currentAnswer}
                    />
                  </div>

                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={(!artistGuess.trim() && !titleGuess.trim()) || !!currentAnswer}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Valider ma Réponse
                  </Button>
                </div>

                {/* Show submitted answer */}
                <AnimatePresence>
                  {currentAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-400 font-medium">Réponse envoyée !</span>
                        <Badge className={`${getScoreColor(currentAnswer.points)} bg-transparent border-current`}>
                          <Trophy className="w-3 h-3 mr-1" />
                          {currentAnswer.points} pts
                        </Badge>
                      </div>
                      <div className="text-sm space-y-1">
                        {currentAnswer.artist && (
                          <div>Artiste: <span className="font-medium">{currentAnswer.artist}</span></div>
                        )}
                        {currentAnswer.title && (
                          <div>Titre: <span className="font-medium">{currentAnswer.title}</span></div>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        Vous pouvez toujours compléter votre réponse !
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Players scores */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Scores de la Manche</h3>
                <div className="space-y-2">
                  {room.players.map((player) => {
                    const playerAnswer = room.answers[player.id];
                    return (
                      <div key={player.id} className="flex items-center justify-between p-2 bg-white/5 rounded">
                        <span className="font-medium">{player.username}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">
                            Total: {player.score}
                          </span>
                          {playerAnswer && (
                            <Badge className={`${getScoreColor(playerAnswer.points)} bg-transparent border-current text-xs`}>
                              +{playerAnswer.points}
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;