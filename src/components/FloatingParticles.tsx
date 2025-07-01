import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: 'circle' | 'star' | 'heart' | 'sparkle' | 'diamond' | 'flower';
}

export const FloatingParticles: React.FC = () => {
  const { isDark, isTransitioning } = useTheme();

  // Generate ultra smooth theme-aware particles
  const particles: Particle[] = React.useMemo(() => {
    const lightColors = [
      '#FFD1DC', '#B5EAD7', '#C7CEEA', '#F8BBD9', '#E4C1F9', 
      '#FFF0F5', '#E6E6FA', '#F0F8FF', '#FDF5E6', '#F5FFFA'
    ];
    const darkColors = [
      '#581C87', '#7C3AED', '#EC4899', '#3B82F6', '#06B6D4', 
      '#8B5CF6', '#F59E0B', '#EF4444', '#10B981', '#F97316'
    ];
    const colors = isDark ? darkColors : lightColors;
    const types: Particle['type'][] = ['circle', 'star', 'heart', 'sparkle', 'diamond', 'flower'];
    
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 30 + 25,
      delay: Math.random() * 10,
      type: types[Math.floor(Math.random() * types.length)],
    }));
  }, [isDark]);

  const renderParticle = (particle: Particle) => {
    const baseProps = {
      width: particle.size,
      height: particle.size,
      fill: particle.color,
      opacity: isDark ? 0.9 : 0.7,
      filter: `brightness(${isDark ? 1.2 : 1}) saturate(${isDark ? 1.3 : 1.1})`,
    };

    switch (particle.type) {
      case 'star':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.8" />
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
            <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="8" cy="6" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="16" cy="14" r="1" fill="currentColor" opacity="0.8" />
          </svg>
        );
      case 'diamond':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <path d="M12 2L22 9L12 22L2 9L12 2Z" />
            <path d="M12 2L17 9L12 16L7 9L12 2Z" fill="currentColor" opacity="0.6" />
          </svg>
        );
      case 'flower':
        return (
          <svg {...baseProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="6" r="2" opacity="0.8" />
            <circle cx="18" cy="12" r="2" opacity="0.8" />
            <circle cx="12" cy="18" r="2" opacity="0.8" />
            <circle cx="6" cy="12" r="2" opacity="0.8" />
            <circle cx="15.5" cy="8.5" r="1.5" opacity="0.6" />
            <circle cx="8.5" cy="8.5" r="1.5" opacity="0.6" />
            <circle cx="15.5" cy="15.5" r="1.5" opacity="0.6" />
            <circle cx="8.5" cy="15.5" r="1.5" opacity="0.6" />
          </svg>
        );
      default:
        return (
          <div
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${particle.color}, ${particle.color}80)`,
              borderRadius: '50%',
              opacity: isDark ? 0.9 : 0.7,
              filter: `brightness(${isDark ? 1.2 : 1}) saturate(${isDark ? 1.3 : 1.1})`,
              boxShadow: `0 0 ${particle.size/2}px ${particle.color}40`,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence mode="wait">
        {!isTransitioning && particles.map((particle) => (
          <motion.div
            key={`${particle.id}-${isDark}`}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0, 
              rotate: 0,
              filter: 'blur(4px) brightness(0.5)',
              y: 20
            }}
            animate={{
              opacity: [0, isDark ? 0.9 : 0.7, isDark ? 0.9 : 0.7, 0],
              y: [20, -50, -100, -150, -200],
              x: [0, Math.random() * 40 - 20, Math.random() * 30 - 15, Math.random() * 20 - 10, 0],
              scale: [0, 1.3, 1, 1.2, 0],
              rotate: [0, 180, 360, 540, 720],
              filter: [
                'blur(4px) brightness(0.5)',
                'blur(0px) brightness(1.3) saturate(1.4)',
                'blur(1px) brightness(1.1) saturate(1.2)',
                'blur(2px) brightness(0.9) saturate(1)',
                'blur(4px) brightness(0.5)'
              ],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            exit={{
              opacity: 0,
              scale: 0,
              filter: 'blur(8px)',
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            {renderParticle(particle)}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Enhanced sparkle effects with ultra smooth theme awareness */}
      <AnimatePresence mode="wait">
        {!isTransitioning && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}-${isDark}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotate: 0,
              filter: 'blur(2px)'
            }}
            animate={{
              scale: [0, 2, 1.5, 0],
              rotate: [0, 180, 360, 540],
              opacity: [0, isDark ? 1 : 0.8, isDark ? 0.9 : 0.7, 0],
              filter: [
                'blur(2px) brightness(0.8)',
                'blur(0px) brightness(1.5) saturate(1.5)',
                'blur(1px) brightness(1.2) saturate(1.3)',
                'blur(3px) brightness(0.6)'
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.4 }
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill={isDark ? '#F59E0B' : '#FFD1DC'}
                opacity={isDark ? 1 : 0.8}
              />
              <circle 
                cx="12" 
                cy="9" 
                r="2" 
                fill={isDark ? '#FFF' : '#EC4899'} 
                opacity="0.6"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ultra smooth floating orbs with enhanced theme-aware colors */}
      <AnimatePresence mode="wait">
        {!isTransitioning && Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}-${isDark}`}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${8 + i * 10}%`,
              width: `${50 + i * 15}px`,
              height: `${50 + i * 15}px`,
              background: isDark 
                ? `radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.3) 30%, rgba(6, 182, 212, 0.2) 60%, transparent 100%)`
                : `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 30%, rgba(6, 182, 212, 0.15) 60%, transparent 100%)`,
              filter: `blur(${isDark ? 1 : 2}px)`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              filter: 'blur(8px)'
            }}
            animate={{
              x: [0, 60, -40, 20, 0],
              y: [0, -40, 50, -20, 0],
              scale: [0.8, 1.4, 0.9, 1.2, 0.8],
              opacity: [0.2, 0.7, 0.4, 0.6, 0.2],
              filter: [
                `blur(${isDark ? 1 : 2}px) brightness(0.8)`,
                `blur(${isDark ? 0 : 1}px) brightness(1.3)`,
                `blur(${isDark ? 1 : 2}px) brightness(1.1)`,
                `blur(${isDark ? 0.5 : 1.5}px) brightness(1.2)`,
                `blur(${isDark ? 1 : 2}px) brightness(0.8)`
              ],
            }}
            transition={{
              duration: 25 + i * 4,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 3,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              filter: 'blur(12px)',
              transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          />
        ))}
      </AnimatePresence>

      {/* Ultra smooth ambient light effects */}
      <AnimatePresence mode="wait">
        {!isTransitioning && (
          <motion.div
            key={`ambient-${isDark}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: isDark 
                ? 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
                : 'radial-gradient(ellipse at top, rgba(236, 72, 153, 0.05) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
              filter: 'blur(40px)',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};