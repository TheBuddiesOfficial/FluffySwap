import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();

  const themes = [
    { 
      value: 'light', 
      icon: Sun, 
      label: 'Light',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      value: 'dark', 
      icon: Moon, 
      label: 'Dark',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      value: 'system', 
      icon: Monitor, 
      label: 'System',
      color: 'from-gray-500 to-gray-700'
    },
  ] as const;

  return (
    <div className="relative">
      <motion.div 
        className="flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-500"
        whileHover={{ scale: 1.05 }}
        layout
      >
        {themes.map(({ value, icon: Icon, label, color }) => (
          <motion.button
            key={value}
            onClick={() => setTheme(value)}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              theme === value
                ? 'text-white shadow-lg'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: theme === value ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${label} theme`}
          >
            <AnimatePresence>
              {theme === value && (
                <motion.div
                  layoutId="theme-indicator"
                  className={`absolute inset-0 bg-gradient-to-r ${color} rounded-full shadow-lg`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30,
                    duration: 0.3
                  }}
                />
              )}
            </AnimatePresence>
            
            <motion.div
              className="relative z-10"
              animate={{ 
                rotate: theme === value ? 360 : 0,
                scale: theme === value ? 1.1 : 1
              }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              <Icon size={16} />
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      {/* Theme indicator tooltip */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
        >
          {themes.find(t => t.value === theme)?.label} Mode
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};