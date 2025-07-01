import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark, isTransitioning } = useTheme();

  const themes = [
    { 
      value: 'light', 
      icon: Sun, 
      label: 'Light',
      color: 'from-yellow-400 via-orange-400 to-red-400',
      shadowColor: 'rgba(251, 191, 36, 0.4)'
    },
    { 
      value: 'dark', 
      icon: Moon, 
      label: 'Dark',
      color: 'from-purple-500 via-indigo-600 to-blue-700',
      shadowColor: 'rgba(139, 92, 246, 0.4)'
    },
    { 
      value: 'system', 
      icon: Monitor, 
      label: 'System',
      color: 'from-gray-500 via-gray-600 to-gray-700',
      shadowColor: 'rgba(107, 114, 128, 0.4)'
    },
  ] as const;

  return (
    <div className="relative">
      <motion.div 
        className="flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-1.5 border border-gray-200/60 dark:border-gray-700/60 shadow-xl transition-all duration-500"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(20px)'
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {themes.map(({ value, icon: Icon, label, color, shadowColor }) => (
          <motion.button
            key={value}
            onClick={() => !isTransitioning && setTheme(value)}
            disabled={isTransitioning}
            className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-400 ${
              theme === value
                ? 'text-white shadow-lg'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
            } ${isTransitioning ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            whileHover={theme === value ? {} : { 
              scale: 1.1,
              backgroundColor: isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.5)'
            }}
            whileTap={{ scale: theme === value ? 1 : 0.95 }}
            aria-label={`Switch to ${label} theme`}
          >
            <AnimatePresence mode="wait">
              {theme === value && (
                <motion.div
                  layoutId="theme-indicator"
                  className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl shadow-lg`}
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    rotate: 0,
                    boxShadow: `0 8px 25px ${shadowColor}`
                  }}
                  exit={{ scale: 0, opacity: 0, rotate: 180 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25,
                    duration: 0.4
                  }}
                />
              )}
            </AnimatePresence>
            
            <motion.div
              className="relative z-10"
              animate={{ 
                rotate: theme === value ? [0, 360] : 0,
                scale: theme === value ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                duration: theme === value ? 0.6 : 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Icon size={18} />
            </motion.div>

            {/* Ultra smooth glow effect for active theme */}
            {theme === value && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: `radial-gradient(circle, ${shadowColor} 0%, transparent 70%)`,
                  filter: 'blur(8px)'
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced theme indicator tooltip */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900/95 dark:bg-gray-100/95 text-white dark:text-gray-900 text-sm rounded-xl shadow-xl whitespace-nowrap pointer-events-none backdrop-blur-sm border border-gray-700 dark:border-gray-300"
        >
          <motion.span
            key={theme}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {themes.find(t => t.value === theme)?.label} Mode
            {isTransitioning && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-2 text-xs opacity-70"
              >
                (switching...)
              </motion.span>
            )}
          </motion.span>
          <motion.div 
            className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900/95 dark:bg-gray-100/95 rotate-45 border-l border-t border-gray-700 dark:border-gray-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Ultra smooth transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl backdrop-blur-sm"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};