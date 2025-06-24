import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Crown, Users, Play, Copy, LogOut, Music } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { MUSIC_CATEGORIES, MusicCategory } from '../types/game';
import toast from 'react-hot-toast';

const LobbyPage: React.FC = () => {
  const { room, currentPlayer, startGame, setCategory, leaveRoom } = useGame();

  const copyRoomCode = () => {
    if (room?.code) {
      navigator.clipboard.writeText(room.code);
      toast.success('Code copié !');
    }
  };

  const handleStartGame = () => {
    if (currentPlayer?.isHost) {
      startGame();
    }
  };

  const handleCategoryChange = (category: MusicCategory) => {
    if (currentPlayer?.isHost) {
      setCategory(category);
    }
  };

  if (!room || !currentPlayer) {
    return null;
  }

  const isHost = currentPlayer.isHost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Music className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold font-display bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Lobby d'Attente
            </h1>
          </div>
          
          {/* Room Code */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
          >
            <span className="text-gray-300">Code de la room:</span>
            <span className="text-2xl font-bold text-white tracking-wider">{room.code}</span>
            <Button
              onClick={copyRoomCode}
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 p-1 h-auto"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Players List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Joueurs ({room.players.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {room.players.map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                          {player.username.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium">{player.username}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {player.isHost && (
                          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Crown className="w-3 h-3 mr-1" />
                            Host
                          </Badge>
                        )}
                        <span className="text-sm text-gray-400">Score: {player.score}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {room.players.length < 8 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 p-4 border-2 border-dashed border-white/20 rounded-lg text-center text-gray-400"
                  >
                    En attente d'autres joueurs...
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Game Settings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Category Selection */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle>Catégorie Musicale</CardTitle>
              </CardHeader>
              <CardContent>
                <Select
                  value={room.category}
                  onValueChange={handleCategoryChange}
                  disabled={!isHost}
                >
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    {Object.entries(MUSIC_CATEGORIES).map(([key, label]) => (
                      <SelectItem key={key} value={key} className="text-white hover:bg-gray-800">
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!isHost && (
                  <p className="text-sm text-gray-400 mt-2">
                    Seul l'host peut modifier la catégorie
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Game Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle>Règles du Jeu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Nombre de musiques:</span>
                  <span className="font-bold">{room.totalSongs}</span>
                </div>
                <div className="flex justify-between">
                  <span>Durée par musique:</span>
                  <span className="font-bold">30 secondes</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="text-center mb-2 font-medium">Système de Points</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Artiste uniquement:</span>
                      <span className="text-green-400">5 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Titre uniquement:</span>
                      <span className="text-green-400">5 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Artiste + Titre:</span>
                      <span className="text-yellow-400">15 points</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Buttons */}
            <div className="space-y-3">
              {isHost && (
                <Button
                  onClick={handleStartGame}
                  disabled={room.players.length < 1}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Commencer la Partie !
                </Button>
              )}
              
              <Button
                onClick={leaveRoom}
                variant="outline"
                className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Quitter la Room
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;