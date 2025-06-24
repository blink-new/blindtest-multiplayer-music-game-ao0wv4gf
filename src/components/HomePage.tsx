import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Music, Users, Play, Gamepad2 } from 'lucide-react';
import { useGame } from '../context/GameContext';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const { createRoom, joinRoom, error } = useGame();

  const handleCreateRoom = () => {
    if (username.trim()) {
      createRoom(username.trim());
    }
  };

  const handleJoinRoom = () => {
    if (username.trim() && roomCode.trim()) {
      joinRoom(roomCode.trim().toUpperCase(), username.trim());
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                <Music className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold font-display bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                BlindTest
              </h1>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Le jeu musical multijoueur ultime !
            </motion.p>
          </motion.div>

          {/* Features Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold mb-2">Multijoueur</h3>
                <p className="text-gray-300">Jouez avec vos amis en temps réel</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Play className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                <h3 className="text-lg font-semibold mb-2">Playlists Variées</h3>
                <p className="text-gray-300">Des hits de toutes les époques</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                <h3 className="text-lg font-semibold mb-2">Système de Score</h3>
                <p className="text-gray-300">Collectez des points et devenez champion</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Game Controls */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Commencer à jouer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Username Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Votre pseudo
                  </label>
                  <Input
                    type="text"
                    placeholder="Entrez votre pseudo..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                    maxLength={20}
                  />
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button
                    onClick={handleCreateRoom}
                    disabled={!username.trim()}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 text-lg"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Créer une Room
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-transparent px-2 text-gray-400">ou</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Code de la room (5 caractères)"
                      value={roomCode}
                      onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                      maxLength={5}
                    />
                    <Button
                      onClick={handleJoinRoom}
                      disabled={!username.trim() || !roomCode.trim()}
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10 font-semibold py-3 text-lg"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Rejoindre une Room
                    </Button>
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center bg-red-500/20 p-3 rounded-lg border border-red-500/30"
                  >
                    {error}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;