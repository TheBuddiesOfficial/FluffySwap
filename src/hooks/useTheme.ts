import { useState, useEffect, useCallback, useRef } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Debounced transition to prevent rapid changes
  const debouncedTransition = useCallback((callback: () => void, delay: number = 100) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(callback, delay);
  }, []);

  // Optimized theme update with proper cleanup and smoother transitions
  const updateTheme = useCallback(async () => {
    if (isTransitioning) return; // Prevent overlapping transitions
    
    setIsTransitioning(true);
    
    const root = window.document.documentElement;
    const body = window.document.body;
    
    let newResolvedTheme: 'light' | 'dark';
    
    if (theme === 'system') {
      newResolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      newResolvedTheme = theme;
    }
    
    // Early return if theme hasn't actually changed
    if (newResolvedTheme === resolvedTheme && !isTransitioning) {
      setIsTransitioning(false);
      return;
    }
    
    setResolvedTheme(newResolvedTheme);
    
    // Use CSS custom properties for ultra-smooth transitions
    root.style.setProperty('--theme-transition-duration', '400ms');
    root.style.setProperty('--theme-transition-timing', 'cubic-bezier(0.4, 0, 0.2, 1)');
    
    // Batch DOM operations to prevent layout thrashing
    const updates = () => {
      // Remove existing theme classes
      root.classList.remove('light', 'dark', 'theme-transition');
      body.classList.remove('light', 'dark', 'theme-transition');
      
      // Add transition class first
      root.classList.add('theme-transition');
      body.classList.add('theme-transition');
      
      // Apply new theme
      root.classList.add(newResolvedTheme);
      body.classList.add(newResolvedTheme);
      
      // Update CSS custom properties based on theme
      const properties = newResolvedTheme === 'dark' ? {
        '--bg-primary': '#1f2937',
        '--bg-secondary': '#374151',
        '--bg-tertiary': '#4b5563',
        '--text-primary': '#f9fafb',
        '--text-secondary': '#d1d5db',
        '--text-tertiary': '#9ca3af',
        '--border-color': '#4b5563',
        '--border-light': '#6b7280',
        '--particle-opacity': '0.8',
        '--glass-bg': 'rgba(0, 0, 0, 0.15)',
        '--glass-border': 'rgba(255, 255, 255, 0.15)',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
        '--theme-color': '#1f2937'
      } : {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f9fafb',
        '--bg-tertiary': '#f3f4f6',
        '--text-primary': '#111827',
        '--text-secondary': '#6b7280',
        '--text-tertiary': '#9ca3af',
        '--border-color': '#e5e7eb',
        '--border-light': '#f3f4f6',
        '--particle-opacity': '0.6',
        '--glass-bg': 'rgba(255, 255, 255, 0.15)',
        '--glass-border': 'rgba(255, 255, 255, 0.3)',
        '--shadow-color': 'rgba(0, 0, 0, 0.1)',
        '--theme-color': '#ffffff'
      };
      
      Object.entries(properties).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
      
      // Update meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', properties['--theme-color']);
      }
    };
    
    // Use requestAnimationFrame for smoother DOM updates
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      updates();
      
      // Clean up transition classes after animation completes
      setTimeout(() => {
        root.classList.remove('theme-transition');
        body.classList.remove('theme-transition');
        setIsTransitioning(false);
      }, 400); // Match the CSS transition duration
    });
    
  }, [theme, resolvedTheme, isTransitioning]);

  useEffect(() => {
    debouncedTransition(() => {
      updateTheme();
      localStorage.setItem('theme', theme);
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        debouncedTransition(updateTheme, 50);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme, updateTheme, debouncedTransition]);

  // Optimized theme setter with debouncing
  const setThemeWithTransition = useCallback((newTheme: Theme) => {
    if (isTransitioning || newTheme === theme) return;
    
    setTheme(newTheme);
  }, [theme, isTransitioning]);

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeWithTransition,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    isSystem: theme === 'system',
    isTransitioning,
  };
};