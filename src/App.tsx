import React from 'react';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { wagmiConfig, chains } from './config/wagmi';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { SwapInterface } from './components/SwapInterface';
import { PoolInfo } from './components/PoolInfo';
import { WalletInfo } from './components/WalletInfo';
import { FloatingParticles } from './components/FloatingParticles';
import { Footer } from './components/Footer';

import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  const customLightTheme = lightTheme({
    accentColor: '#ec4899',
    accentColorForeground: 'white',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
  });

  const customDarkTheme = darkTheme({
    accentColor: '#ec4899',
    accentColorForeground: 'white',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
  });

  return (
    <RainbowKitProvider 
      chains={chains} 
      theme={isDark ? customDarkTheme : customLightTheme}
    >
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-cyan-900/20 transition-all duration-500">
        {/* Enhanced Multi-Layer Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100 dark:from-gray-800 dark:via-purple-900/30 dark:to-cyan-900/30 transition-all duration-500"
            animate={{
              background: isDark ? [
                'linear-gradient(135deg, #1f2937, #581c87, #164e63)',
                'linear-gradient(225deg, #111827, #4c1d95, #155e75)',
                'linear-gradient(315deg, #1f2937, #5b21b6, #0e7490)',
                'linear-gradient(135deg, #1f2937, #581c87, #164e63)',
              ] : [
                'linear-gradient(135deg, #fce7f3, #f3e8ff, #e0f2fe)',
                'linear-gradient(225deg, #fdf2f8, #ede9fe, #cffafe)',
                'linear-gradient(315deg, #fce7f3, #ddd6fe, #e0f7fa)',
                'linear-gradient(135deg, #fce7f3, #f3e8ff, #e0f2fe)',
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)'
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
            }}
            animate={{
              x: [0, -80, 120, 0],
              y: [0, 80, -60, 0],
              scale: [0.8, 1.3, 0.9, 0.8],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-500"
            style={{
              backgroundImage: `
                linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <FloatingParticles />
        
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Main Swap Interface - Center */}
            <div className="lg:col-span-6 lg:col-start-4">
              <SwapInterface />
            </div>

            {/* Pool Info - Left Sidebar (Desktop) / Below Swap (Mobile) */}
            <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1 order-2 lg:order-1">
              <PoolInfo />
            </div>

            {/* Wallet Info - Right Sidebar (Desktop) / Below Pool (Mobile) */}
            <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1 order-3 lg:order-2">
              <WalletInfo />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Enhanced Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '16px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              backgroundColor: isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              color: isDark ? '#f3f4f6' : '#374151',
              border: `1px solid ${isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(255, 255, 255, 0.3)'}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            },
          }}
        />
      </div>
    </RainbowKitProvider>
  );
};

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;