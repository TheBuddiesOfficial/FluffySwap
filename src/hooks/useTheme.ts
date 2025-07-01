import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    const updateTheme = () => {
      let newResolvedTheme: 'light' | 'dark';
      
      if (theme === 'system') {
        newResolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        newResolvedTheme = theme;
      }
      
      setResolvedTheme(newResolvedTheme);
      
      // Remove all theme classes
      root.classList.remove('light', 'dark');
      body.classList.remove('light', 'dark');
      
      // Add the new theme class with smooth transition
      root.classList.add(newResolvedTheme);
      body.classList.add(newResolvedTheme);
      
      // Update meta theme-color with smooth transition
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', newResolvedTheme === 'dark' ? '#1f2937' : '#ffffff');
      }

      // Enhanced body background transitions
      body.style.transition = 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      
      // Set CSS custom properties for theme-aware styling
      root.style.setProperty('--theme-transition', '0.5s cubic-bezier(0.4, 0, 0.2, 1)');
      
      if (newResolvedTheme === 'dark') {
        root.style.setProperty('--bg-primary', '#1f2937');
        root.style.setProperty('--bg-secondary', '#374151');
        root.style.setProperty('--text-primary', '#f9fafb');
        root.style.setProperty('--text-secondary', '#d1d5db');
        root.style.setProperty('--border-color', '#4b5563');
        root.style.setProperty('--particle-opacity', '0.8');
      } else {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f9fafb');
        root.style.setProperty('--text-primary', '#111827');
        root.style.setProperty('--text-secondary', '#6b7280');
        root.style.setProperty('--border-color', '#e5e7eb');
        root.style.setProperty('--particle-opacity', '0.6');
      }
    };

    updateTheme();
    localStorage.setItem('theme', theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  // Enhanced theme setter with transition effects
  const setThemeWithTransition = (newTheme: Theme) => {
    // Add a subtle transition effect
    const body = document.body;
    body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTheme(newTheme);
    
    // Trigger a small animation to indicate theme change
    setTimeout(() => {
      body.style.transform = 'scale(1.001)';
      setTimeout(() => {
        body.style.transform = 'scale(1)';
      }, 150);
    }, 50);
  };

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeWithTransition,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    isSystem: theme === 'system',
  };
};