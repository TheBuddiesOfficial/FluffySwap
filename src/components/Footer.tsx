import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, ExternalLink, Code, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="relative z-10 mt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border border-white/30 dark:border-gray-700/30 shadow-xl transition-all duration-500"
          whileHover={{
            scale: 1.01,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Project Description */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Heart size={24} className="text-pink-500" fill="currentColor" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                FluffySwap
              </span>
              <Heart size={24} className="text-pink-500" fill="currentColor" />
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              FluffySwap is a kawaii-themed decentralized exchange built for the Ethereum Sepolia testnet.
              Trade ETH for FLUF tokens with adorable animations and secure smart contracts.
            </p>
            
            <div className="flex justify-center gap-6 text-xs text-gray-400 dark:text-gray-500 mb-6">
              <motion.span 
                whileHover={{ color: '#6366f1', scale: 1.05 }}
                className="cursor-default flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Sepolia Testnet Only
              </motion.span>
              <motion.span 
                whileHover={{ color: '#8b5cf6', scale: 1.05 }}
                className="cursor-default flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Educational Purpose
              </motion.span>
              <motion.span 
                whileHover={{ color: '#06b6d4', scale: 1.05 }}
                className="cursor-default flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Open Source
              </motion.span>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-4"
              >
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Made with 💖 for the kawaii DeFi community
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                  <Code size={16} />
                  <span>Made by</span>
                  <motion.a
                    href="https://github.com/HuzaifaKhanDeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200 flex items-center gap-1"
                  >
                    Huzaifa Khan
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Website by Huzaifa Khan
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="flex justify-center gap-4"
              >
                <motion.a
                  href="https://github.com/HuzaifaKhanDeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-200 text-sm font-medium"
                >
                  <Github size={16} />
                  GitHub Profile
                </motion.a>
                
                <motion.a
                  href="https://github.com/HuzaifaKhanDeveloper/fluffyswap"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full transition-all duration-200 text-sm font-medium"
                >
                  <Star size={16} />
                  Star Project
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-xs text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} FluffySwap. Built with React, TypeScript, and lots of ❤️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};