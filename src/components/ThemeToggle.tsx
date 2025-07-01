import React, { memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// Optimized spring configuration
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  mass: 0.8
};

const fastSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.6
};

export const ThemeToggle: React.FC = memo(() => {
  const { theme, setTheme, isDark, isTransitioning } = useTheme();

  const themes = useMemo(() => [
    { 
      value: 'light', 
      icon: Sun, 
      label: 'Light',
      gradient: 'from-amber-400 to-orange-500',
      shadow: 'rgba(245, 158, 11, 0.3)'
    },
    { 
      value: 'dark', 
      icon: Moon, 
      label: 'Dark',
      gradient: 'from-violet-500 to-purple-600',
      shadow: 'rgba(139, 92, 246, 0.3)'
    },
    { 
      value: 'system', 
      icon: Monitor, 
      label: 'System',
      gradient: 'from-slate-500 to-slate-600',
      shadow: 'rgba(100, 116, 139, 0.3)'
    },
  ] as const, []);

  const handleThemeChange = (newTheme: string) => {
    if (!isTransitioning) {
      setTheme(newTheme);
    }
  };

  return (
    <div className="relative">
      <motion.div 
        className="flex items-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={fastSpring}
        style={{ willChange: 'transform' }}
      >
        {themes.map(({ value, icon: Icon, label, gradient, shadow }) => {
          const isActive = theme === value;
          
          return (
            <motion.button
              key={value}
              onClick={() => handleThemeChange(value)}
              disabled={isTransitioning}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 ${
                isActive
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              whileHover={!isActive ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              style={{ willChange: 'transform' }}
              aria-label={`Switch to ${label} theme`}
            >
              {/* Active background indicator */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    layoutId="activeTheme"
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl`}
                    initial={false}
                    animate={{ 
                      scale: 1,
                      opacity: 1
                    }}
                    transition={springConfig}
                    style={{ 
                      willChange: 'transform, opacity',
                      boxShadow: `0 4px 12px ${shadow}`
                    }}
                  />
                )}
              </AnimatePresence>
              
              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  scale: isActive ? 1.1 : 1,
                  rotate: isActive ? 360 : 0
                }}
                transition={{
                  scale: fastSpring,
                  rotate: { 
                    ...springConfig,
                    duration: isActive ? 0.5 : 0.2
                  }
                }}
                style={{ willChange: 'transform' }}
              >
                <Icon size={16} strokeWidth={2.5} />
              </motion.div>

              {/* Subtle glow for active state */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: `radial-gradient(circle, ${shadow} 0%, transparent 70%)`,
                    filter: 'blur(4px)',
                    willChange: 'transform, opacity'
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Simplified tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fastSpring}
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs rounded-lg shadow-md whitespace-nowrap pointer-events-none backdrop-blur-sm"
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.span
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {themes.find(t => t.value === theme)?.label} Mode
        </motion.span>
        
        {/* Tooltip arrow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-100/90 rotate-45" />
      </motion.div>

      {/* Minimal transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl backdrop-blur-[1px]"
            transition={{ duration: 0.2 }}
            style={{ willChange: 'opacity' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
});

ThemeToggle.displayName = 'ThemeToggle';