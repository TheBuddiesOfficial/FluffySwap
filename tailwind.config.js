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
        // Ultra smooth animations
        'float-ultra': 'float-ultra 8s ease-in-out infinite',
        'float-delayed-ultra': 'float-ultra 8s ease-in-out infinite 3s',
        'pulse-glow-ultra': 'pulse-glow-ultra 4s ease-in-out infinite',
        'bounce-gentle-ultra': 'bounce-gentle-ultra 3s ease-in-out infinite',
        'shimmer-ultra': 'shimmer-ultra 3s ease infinite',
        'rotate-smooth': 'rotate-smooth 12s linear infinite',
        'gradient-text-shift': 'gradient-text-shift 6s ease infinite',
        'particle-dance': 'particle-dance 10s ease-in-out infinite',
        'spin-ultra': 'spin-ultra 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'progress-flow': 'progress-flow 2s ease infinite',
        'skeleton-loading': 'skeleton-loading 1.5s ease infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        
        // Theme transition animations
        'theme-transition': 'theme-transition 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'theme-glow': 'theme-glow 2s ease-in-out infinite',
        
        // Enhanced micro-interactions
        'hover-lift': 'hover-lift 0.3s ease-out',
        'press-down': 'press-down 0.1s ease-in',
        'focus-ring': 'focus-ring 0.3s ease-out',
      },
      keyframes: {
        'float-ultra': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)',
            filter: 'brightness(1) saturate(1)'
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(2deg) scale(1.05)',
            filter: 'brightness(1.1) saturate(1.1)'
          },
          '50%': { 
            transform: 'translateY(-30px) rotate(0deg) scale(1.1)',
            filter: 'brightness(1.2) saturate(1.2)'
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(-2deg) scale(1.05)',
            filter: 'brightness(1.1) saturate(1.1)'
          },
        },
        'pulse-glow-ultra': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
            filter: 'brightness(1) saturate(1)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)',
            filter: 'brightness(1.2) saturate(1.3)',
            transform: 'scale(1.02)'
          },
        },
        'bounce-gentle-ultra': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)'
          },
          '50%': {
            transform: 'translateY(-8px) scale(1.02)',
            filter: 'brightness(1.1)'
          },
        },
        'shimmer-ultra': {
          '0%': {
            backgroundPosition: '-200% 0',
            filter: 'brightness(1)'
          },
          '50%': {
            filter: 'brightness(1.3)'
          },
          '100%': {
            backgroundPosition: '200% 0',
            filter: 'brightness(1)'
          },
        },
        'rotate-smooth': {
          '0%': {
            transform: 'rotate(0deg) scale(1)'
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.05)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)'
          },
        },
        'gradient-text-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '25%': {
            backgroundPosition: '100% 50%'
          },
          '50%': {
            backgroundPosition: '100% 100%'
          },
          '75%': {
            backgroundPosition: '0% 100%'
          },
        },
        'particle-dance': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
            opacity: '0.6',
            filter: 'brightness(1) hue-rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-25px) translateX(15px) rotate(90deg) scale(1.1)',
            opacity: '0.8',
            filter: 'brightness(1.2) hue-rotate(90deg)'
          },
          '50%': {
            transform: 'translateY(-50px) translateX(-8px) rotate(180deg) scale(1.2)',
            opacity: '1',
            filter: 'brightness(1.4) hue-rotate(180deg)'
          },
          '75%': {
            transform: 'translateY(-25px) translateX(-15px) rotate(270deg) scale(1.1)',
            opacity: '0.8',
            filter: 'brightness(1.2) hue-rotate(270deg)'
          },
        },
        'spin-ultra': {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.05)',
            filter: 'brightness(1.2)'
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)',
            filter: 'brightness(1)'
          },
        },
        'progress-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'theme-transition': {
          '0%': { 
            filter: 'brightness(1) saturate(1)',
            transform: 'scale(1)'
          },
          '50%': { 
            filter: 'brightness(1.1) saturate(1.1)',
            transform: 'scale(1.01)'
          },
          '100%': { 
            filter: 'brightness(1) saturate(1)',
            transform: 'scale(1)'
          },
        },
        'theme-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.4)' 
          },
        },
        'hover-lift': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' },
        },
        'press-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.98)' },
        },
        'focus-ring': {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(236, 72, 153, 0.4)' 
          },
          '100%': { 
            boxShadow: '0 0 0 4px rgba(236, 72, 153, 0.2)' 
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glow-lg': '0 0 40px rgba(236, 72, 153, 0.4)',
        'glow-xl': '0 0 60px rgba(236, 72, 153, 0.5)',
        'glow-2xl': '0 0 80px rgba(236, 72, 153, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(236, 72, 153, 0.2)',
        'ultra-smooth': '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(236, 72, 153, 0.1)',
        'theme-transition': '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      transitionTimingFunction: {
        'ultra-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'theme': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
      brightness: {
        '25': '.25',
        '175': '1.75',
        '200': '2',
      },
      saturate: {
        '25': '.25',
        '175': '1.75',
        '200': '2',
      },
    },
  },
  plugins: [],
};