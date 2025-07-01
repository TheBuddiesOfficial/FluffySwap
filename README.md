# 🌸 FluffySwap - Kawaii Decentralized Exchange

A production-ready, kawaii-themed decentralized exchange (DEX) built for Ethereum Sepolia testnet. Swap ETH for FLUF tokens with adorable animations, secure smart contracts, and delightful user experience.

![FluffySwap Preview](https://via.placeholder.com/800x400/FFD1DC/333333?text=FluffySwap+🌸)

## ✨ Features

### 🎨 Frontend
- **Kawaii Design**: Pastel color palette with theme-aware floating particle animations
- **Advanced Dark/Light Mode**: Smooth theme transitions with system preference detection and enhanced visual effects
- **Responsive UI**: Mobile-first design with smooth micro-interactions and advanced animations
- **Wallet Integration**: MetaMask + WalletConnect via RainbowKit with beautiful UI
- **Real-time Updates**: Live balance and transaction status with auto-refresh and persistent state tracking
- **Enhanced UX**: Comprehensive transaction management with proper state handling and user feedback
- **Error Handling**: Robust error boundaries with graceful fallbacks and detailed error messages
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🔐 Smart Contracts
- **MyToken (FLUF)**: ERC-20 token with minting, burning functionality and comprehensive events
- **FluffySwap**: Secure DEX contract with rate management, emergency controls, and reentrancy protection
- **Security Features**: ReentrancyGuard, input validation, access controls, and comprehensive testing
- **Gas Optimized**: Efficient storage patterns, optimized functions, and minimal gas consumption

### 🛠️ Developer Experience
- **TypeScript**: Full type safety across frontend and contracts with strict configuration
- **Comprehensive Testing**: Unit tests for all contract functions with 100% coverage
- **Auto-deployment**: Scripts with contract verification and environment management
- **Hot Reload**: Instant development feedback with optimized build process
- **Error Boundaries**: Graceful error handling in production with detailed logging

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MetaMask or compatible wallet
- Sepolia testnet ETH ([Get from faucet](https://sepoliafaucet.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/HuzaifaKhanDeveloper/fluffyswap.git
cd fluffyswap

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Environment Setup

Edit `.env` with your configuration:

```env
# Required for frontend
VITE_INFURA_API_KEY=your_infura_api_key
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# Required for deployment
PRIVATE_KEY=your_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Development

```bash
# Start local blockchain (optional)
npm run node

# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy contracts to Sepolia
npm run deploy

# Start frontend development server
npm run dev
```

## 🎨 New Features & Improvements

### Enhanced Transaction Management ✅
- **Persistent State Tracking**: Transactions are properly tracked from initiation to completion with unique identifiers
- **Auto-clearing Alerts**: Pending transaction toasts automatically clear when transactions complete or fail
- **Balance Refresh**: Token balances automatically update after successful swaps with optimistic updates
- **Error Recovery**: Comprehensive error handling with transaction state reset and user-friendly messages
- **Transaction History**: Local storage of recent transactions with status tracking

### Advanced Dark Mode ✅
- **Smooth Transitions**: 500ms cubic-bezier transitions for all theme changes with enhanced easing
- **Complete Coverage**: Dark mode now applies to entire application including backgrounds, particles, and all components
- **System Integration**: Respects system theme preferences with manual override and automatic detection
- **Consistent Styling**: All components properly respond to theme changes with CSS custom properties
- **Theme-aware Particles**: Floating particles adapt colors and opacity based on current theme

### Better Token Display ✅
- **Accurate Calculations**: Fixed FLUF token amount calculations and display with proper decimal handling
- **Real-time Updates**: Balance updates reflect immediately after transactions with automatic refetching
- **Error Handling**: Graceful fallbacks for contract read errors with detailed error messages
- **Formatted Numbers**: Proper number formatting with locale support and currency-style display
- **Loading States**: Beautiful loading animations during balance fetching and calculations

### Professional Footer ✅
- **Developer Credits**: Full attribution to Huzaifa Khan with GitHub links and professional presentation
- **Enhanced Design**: Matches the kawaii aesthetic with smooth animations and gradient effects
- **Social Links**: Direct links to developer profile, project repository, and portfolio
- **Responsive Layout**: Adapts beautifully to all screen sizes with mobile-optimized design
- **Interactive Elements**: Hover effects, animations, and micro-interactions for better engagement

### Advanced Animations & UX ✅
- **Theme-aware Particles**: Floating particles system that adapts to light/dark themes with different colors and effects
- **Smooth Transitions**: Enhanced CSS transitions with cubic-bezier easing for professional feel
- **Micro-interactions**: Subtle hover effects, button animations, and loading states throughout the app
- **Performance Optimized**: Animations respect user's motion preferences and are optimized for performance
- **Visual Feedback**: Clear loading states, success animations, and error indicators

## 📋 Smart Contract Architecture

### MyToken.sol (FLUF Token)
```solidity
// ERC-20 token with additional features
- Standard ERC-20 functionality with events
- Minting (owner only) with supply tracking
- Burning (user initiated) with balance validation
- Comprehensive error handling and validation
- Event logging for all operations with detailed data
```

### FluffySwap.sol (DEX Contract)
```solidity
// Secure swap functionality
- ETH to FLUF token swaps with rate calculation
- Adjustable exchange rates with owner controls
- Min/max swap limits (0.001 - 10 ETH) with validation
- Emergency withdrawal functions for owner
- Comprehensive input validation and error handling
- Reentrancy protection with ReentrancyGuard
- Event emission for all major operations
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm run test

# Run with gas reporting
REPORT_GAS=true npm run test

# Run specific test file
npx hardhat test test/FluffySwap.test.ts

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- ✅ Contract deployment and initialization with proper parameters
- ✅ Token swapping mechanics with various amounts and edge cases
- ✅ Rate management and validation with owner controls
- ✅ Withdrawal functions (ETH + tokens) with proper access control
- ✅ Error handling and edge cases with comprehensive scenarios
- ✅ Access control and permissions with role-based testing
- ✅ Reentrancy protection and security measures
- ✅ Gas optimization and efficiency testing

## 🌐 Deployment

### Sepolia Testnet Deployment

```bash
# Deploy contracts
npm run deploy

# Verify contracts on Etherscan
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

The deployment script will:
1. Deploy MyToken (FLUF) with initial supply and proper configuration
2. Deploy FluffySwap with initial rate and security settings
3. Transfer tokens to DEX for liquidity with proper amounts
4. Update frontend configuration with new addresses
5. Save deployment info to `deployments.json` with timestamps
6. Verify contracts on Etherscan automatically

### Production Checklist
- [x] Contracts audited and tested with comprehensive test suite
- [x] Environment variables configured and validated
- [x] Testnet deployment successful with verified contracts
- [x] Frontend error boundaries tested with various scenarios
- [x] Mobile responsiveness verified across devices
- [x] Dark mode implementation complete with smooth transitions
- [x] Transaction state management fixed with persistent tracking
- [x] Token display accuracy verified with proper formatting
- [x] Performance optimization completed with lazy loading
- [x] Accessibility compliance verified with screen readers

## 🎨 Design System

### Color Palette
```css
/* Light mode kawaii colors */
--pink-pastel: #FFD1DC
--mint-green: #B5EAD7  
--lavender: #C7CEEA
--soft-pink: #F8BBD9
--light-purple: #E4C1F9

/* Dark mode variants */
--dark-bg: #1f2937
--dark-surface: #374151
--dark-accent: #581c87
--dark-purple: #7C3AED
--dark-pink: #EC4899
```

### Typography
- **Headings**: 120% line height, semibold weight, gradient text effects
- **Body**: 150% line height, regular weight, optimized for readability
- **Max 3 font weights**: Regular (400), semibold (600), bold (700)
- **Font family**: Inter with system fallbacks for performance

### Spacing System
- **Base unit**: 8px for consistent spacing
- **Component padding**: 16px, 24px, 32px for hierarchical spacing
- **Section margins**: 32px, 48px, 64px for proper content separation
- **Grid system**: 12-column responsive grid with breakpoints

### Animation Guidelines
- **Duration**: 300ms for micro-interactions, 500ms for theme changes
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for smooth natural motion
- **Reduced motion**: Respects user preferences for accessibility
- **Performance**: GPU-accelerated transforms and opacity changes

## 🔧 Configuration

### Supported Networks
- **Sepolia Testnet** (Primary) - Chain ID: 11155111
- **Hardhat Local** (Development) - Chain ID: 1337

### Contract Addresses
After deployment, addresses are automatically updated in:
- `src/config/contracts.ts` - Frontend configuration
- `deployments.json` - Deployment history and metadata

### Swap Limits
- **Minimum**: 0.001 ETH (prevents dust transactions)
- **Maximum**: 10 ETH per transaction (prevents large slippage)
- **Rate**: Configurable by contract owner (default: 1000 FLUF per ETH)
- **Gas limit**: Optimized for efficient execution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices with strict type checking
- Write comprehensive tests for new features with edge cases
- Maintain kawaii design consistency with design system
- Update documentation for changes with clear examples
- Ensure dark mode compatibility for all new components
- Test accessibility with screen readers and keyboard navigation
- Optimize performance with lazy loading and code splitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenZeppelin**: Secure smart contract libraries and best practices
- **RainbowKit**: Beautiful wallet connection UI with excellent UX
- **Framer Motion**: Smooth animations and micro-interactions
- **Tailwind CSS**: Utility-first styling with excellent developer experience
- **Hardhat**: Ethereum development environment with comprehensive tooling
- **Vite**: Fast build tool with excellent development experience

## 🐛 Troubleshooting

### Common Issues

**"Transaction failed" errors**
- Check ETH balance for gas fees (minimum 0.01 ETH recommended)
- Verify swap amount is within limits (0.001 - 10 ETH)
- Ensure sufficient DEX liquidity for the swap amount
- Check network connection and try again

**Wallet connection issues**
- Clear browser cache and cookies completely
- Try different wallet or browser (Chrome recommended)
- Check network is set to Sepolia testnet
- Disable browser extensions that might interfere

**Contract interaction failures**
- Verify contract addresses in configuration files
- Check if contracts are properly deployed and verified
- Ensure proper network connection to Sepolia
- Try refreshing the page and reconnecting wallet

**Dark mode not working properly**
- Clear browser localStorage completely
- Refresh the page and try theme toggle again
- Check if system theme detection is supported
- Disable browser extensions that modify page appearance

**Token balance not updating**
- Wait for transaction confirmation (usually 1-2 minutes)
- Refresh the page to force balance update
- Check transaction status on Etherscan
- Ensure wallet is connected to correct network

**Performance issues**
- Disable animations if experiencing lag
- Close other browser tabs to free memory
- Check internet connection stability
- Try using a different browser or device

### Support

- 📧 Email: huzaifakhan.developer@gmail.com
- 💬 GitHub Issues: [Report Bug](https://github.com/HuzaifaKhanDeveloper/fluffyswap/issues)
- 🐦 Developer: [@HuzaifaKhanDev](https://github.com/HuzaifaKhanDeveloper)
- 📚 Documentation: [Wiki](https://github.com/HuzaifaKhanDeveloper/fluffyswap/wiki)

---

<div align="center">
  <p>Made with 💖 for the kawaii DeFi community</p>
  <p>
    <strong>Made by <a href="https://github.com/HuzaifaKhanDeveloper">Huzaifa Khan</a> — Website by Huzaifa Khan</strong>
  </p>
  <p>
    <a href="https://fluffyswap.dev">🌐 Website</a> •
    <a href="https://docs.fluffyswap.dev">📚 Documentation</a> •
    <a href="https://github.com/HuzaifaKhanDeveloper/fluffyswap/issues">🐛 Report Bug</a> •
    <a href="https://github.com/HuzaifaKhanDeveloper/fluffyswap">⭐ Star Project</a>
  </p>
  
  <br>
  
  <img src="https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white" alt="Ethereum">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>