/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom kawaii color palette with ultra smooth variants
        kawaii: {
          pink: '#FFD1DC',
          mint: '#B5EAD7',
          lavender: '#C7CEEA',
          'soft-pink': '#F8BBD9',
          'light-purple': '#E4C1F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        // Ultra smooth animations - optimized for 60fps
        'float-ultra': 'float-ultra 6s ease-in-out infinite',
        'float-delayed-ultra': 'float-ultra 6s ease-in-out infinite 2s',
        'pulse-glow-ultra': 'pulse-glow-ultra 3s ease-in-out infinite',
        'bounce-gentle-ultra': 'bounce-gentle-ultra 2.5s ease-in-out infinite',
        'shimmer-ultra': 'shimmer-ultra 2s ease infinite',
        'rotate-smooth': 'rotate-smooth 8s linear infinite',
        'gradient-text-shift': 'gradient-text-shift 4s ease infinite',
        'particle-dance': 'particle-dance 8s ease-in-out infinite',
        'spin-ultra': 'spin-ultra 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'progress-flow': 'progress-flow 1.8s ease infinite',
        'skeleton-loading': 'skeleton-loading 1.2s ease infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        
        // Theme transition animations - optimized for performance
        'theme-transition': 'theme-transition 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'theme-glow': 'theme-glow 1.5s ease-in-out infinite',
        
        // Enhanced micro-interactions - faster for better UX
        'hover-lift': 'hover-lift 0.2s ease-out',
        'press-down': 'press-down 0.08s ease-in',
        'focus-ring': 'focus-ring 0.2s ease-out',
        
        // New optimized animations
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
      keyframes: {
        // Optimized keyframes - using only transform and opacity for best performance
        'float-ultra': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '25%': { 
            transform: 'translateY(-12px) rotate(1deg) scale(1.02)',
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(0deg) scale(1.05)',
          },
          '75%': { 
            transform: 'translateY(-12px) rotate(-1deg) scale(1.02)',
          },
        },
        'pulse-glow-ultra': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'scale(1.02)',
            opacity: '1'
          },
        },
        'bounce-gentle-ultra': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-6px) scale(1.01)',
          },
        },
        'shimmer-ultra': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'rotate-smooth': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          },
        },
        'gradient-text-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
        },
        'particle-dance': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
            opacity: '0.6',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(12px) rotate(90deg) scale(1.05)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translateY(-35px) translateX(-6px) rotate(180deg) scale(1.1)',
            opacity: '1',
          },
          '75%': {
            transform: 'translateY(-20px) translateX(-12px) rotate(270deg) scale(1.05)',
            opacity: '0.8',
          },
        },
        'spin-ultra': {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.02)',
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)',
          },
        },
        'progress-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'skeleton-loading': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'theme-transition': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.01)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        'theme-glow': {
          '0%, 100%': { 
            opacity: '0.5'
          },
          '50%': { 
            opacity: '1'
          },
        },
        'hover-lift': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-3px) scale(1.02)' },
        },
        'press-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.98)' },
        },
        'focus-ring': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1.05)',
            opacity: '1'
          },
        },
        // New optimized animations
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        // Optimized shadows - reduced complexity for better performance
        'glow': '0 0 15px rgba(236, 72, 153, 0.25)',
        'glow-lg': '0 0 25px rgba(236, 72, 153, 0.3)',
        'glow-xl': '0 0 35px rgba(236, 72, 153, 0.35)',
        'glow-2xl': '0 0 45px rgba(236, 72, 153, 0.4)',
        'inner-glow': 'inset 0 0 15px rgba(236, 72, 153, 0.15)',
        'ultra-smooth': '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(236, 72, 153, 0.08)',
        'theme-transition': '0 15px 30px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      transitionTimingFunction: {
        'ultra-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'theme': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'snappy': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
      // Performance optimizations
      willChange: {
        'transform-opacity': 'transform, opacity',
        'transform': 'transform',
        'opacity': 'opacity',
      },
    },
  },
  plugins: [
    // Optional: Add plugin for better performance
    function({ addUtilities }) {
      const newUtilities = {
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          willChange: 'transform',
        },
        '.smooth-rendering': {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        '.hardware-acceleration': {
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};