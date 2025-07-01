import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: 'circle' | 'star' | 'heart' | 'sparkle';
}

export const FloatingParticles: React.FC = () => {
  const { isDark } = useTheme();

  // Generate theme-aware particles
  const particles: Particle[] = React.useMemo(() => {
    const lightColors = ['#FFD1DC', '#B5EAD7', '#C7CEEA', '#F8BBD9', '#E4C1F9', '#FFF0F5', '#E6E6FA'];
    const darkColors = ['#581C87', '#7C3AED', '#EC4899', '#3B82F6', '#06B6D4', '#8B5CF6', '#F59E0B'];
    const colors = isDark ? darkColors : lightColors;
    const types: Particle['type'][] = ['circle', 'star', 'heart', 'sparkle'];
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 8,
      type: types[Math.floor(Math.random() * types.length)],
    }));
  }, [isDark]);

  const renderParticle = (particle: Particle) => {
    const baseProps = {
      width: particle.size,
      height: particle.size,
      fill: particle.color,
      opacity: isDark ? 0.8 : 0.6,
    };

    switch (particle.type) {
      case 'star':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          </svg>
        );
      case 'heart':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'sparkle':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <path d="M12 0L14.59 7.41L22 10L14.59 12.59L12 20L9.41 12.59L2 10L9.41 7.41L12 0Z" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      default:
        return (
          <div
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: '50%',
              opacity: isDark ? 0.8 : 0.6,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={`${particle.id}-${isDark}`} // Re-render when theme changes
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            rotate: 0,
            filter: 'blur(2px)'
          }}
          animate={{
            opacity: [0, isDark ? 0.8 : 0.6, 0],
            y: [0, -40, -80, -40, 0],
            x: [0, Math.random() * 30 - 15, Math.random() * 20 - 10, 0],
            scale: [0.5, 1.2, 0.8, 1, 0.5],
            rotate: [0, 180, 360],
            filter: [
              'blur(2px) brightness(1)',
              'blur(0px) brightness(1.2)',
              'blur(1px) brightness(0.8)',
              'blur(2px) brightness(1)'
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}
      
      {/* Enhanced sparkle effects with theme awareness */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}-${isDark}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, isDark ? 0.9 : 0.7, 0],
            filter: [
              'brightness(1) saturate(1)',
              'brightness(1.5) saturate(1.3)',
              'brightness(1) saturate(1)'
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
              fill={isDark ? '#F59E0B' : '#FFD1DC'}
              opacity={isDark ? 0.9 : 0.7}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating orbs with theme-aware colors */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`orb-${i}-${isDark}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            width: `${40 + i * 10}px`,
            height: `${40 + i * 10}px`,
            background: isDark 
              ? `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)`
              : `radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 100%)`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};