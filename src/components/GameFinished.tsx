import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import { Trophy, Medal, RotateCcw, Home, Crown, Star } from 'lucide-react';
import { useGame } from '../context/GameContext';

const GameFinished: React.FC = () => {
  const { room, currentPlayer, returnToLobby, restartGame } = useGame();

  if (!room || !currentPlayer || room.gameState !== 'finished') {
    return null;
  }

  // Sort players by score
  const sortedPlayers = [...room.players].sort((a, b) => b.score - a.score);
  const isHost = currentPlayer.isHost;

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPositionText = (position: number) => {
    switch (position) {
      case 0:
        return '1ère place';
      case 1:
        return '2ème place';
      case 2:
        return '3ème place';
      default:
        return `${position + 1}ème place`;
    }
  };

  const getPositionColor = (position: number) => {
    switch (position) {
      case 0:
        return 'bg-gradient-to-r from-yellow-500 to-amber-500';
      case 1:
        return 'bg-gradient-to-r from-gray-400 to-gray-500';
      case 2:
        return 'bg-gradient-to-r from-amber-600 to-amber-700';
      default:
        return 'bg-gradient-to-r from-purple-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
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
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-block mb-4"
          >
            <Trophy className="w-16 h-16 text-yellow-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold font-display bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Partie Terminée !
          </h1>
          <p className="text-xl text-gray-300">
            Bravo à tous les participants !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Podium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  🏆 Classement Final 🏆
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedPlayers.map((player, index) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`relative p-6 rounded-lg border-2 ${
                        index === 0 ? 'border-yellow-400/50 bg-yellow-400/10' :
                        index === 1 ? 'border-gray-400/50 bg-gray-400/10' :
                        index === 2 ? 'border-amber-600/50 bg-amber-600/10' :
                        'border-white/20 bg-white/5'
                      }`}
                    >
                      {/* Confetti for winner */}
                      {index === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 pointer-events-none"
                        >
                          {/* Animated confetti would go here */}
                        </motion.div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getPositionColor(index)}`}>
                            {getPositionIcon(index)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold">{player.username}</h3>
                              {player.isHost && (
                                <Crown className="w-5 h-5 text-yellow-400" />
                              )}
                            </div>
                            <p className="text-gray-400">{getPositionText(index)}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">
                            {player.score}
                          </div>
                          <div className="text-sm text-gray-400">points</div>
                        </div>
                      </div>

                      {/* Special effects for top 3 */}
                      {index < 3 && (
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-lg border-2 border-current opacity-50 pointer-events-none"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center">Statistiques de la Partie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">{room.totalSongs}</div>
                    <div className="text-sm text-gray-400">Musiques jouées</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400">{room.players.length}</div>
                    <div className="text-sm text-gray-400">Joueurs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {Math.max(...sortedPlayers.map(p => p.score))}
                    </div>
                    <div className="text-sm text-gray-400">Score maximum</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Control Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {isHost && (
              <>
                <Button
                  onClick={restartGame}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 text-lg"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Relancer une Partie
                </Button>
                <Button
                  onClick={returnToLobby}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 text-lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Retourner au Lobby
                </Button>
              </>
            )}
            
            {!isHost && (
              <div className="text-center text-gray-400">
                En attente des actions de l'host...
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GameFinished;