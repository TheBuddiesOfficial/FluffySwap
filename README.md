# 🌸 FluffySwap - Kawaii Decentralized Exchange

A production-ready, kawaii-themed decentralized exchange (DEX) built for Ethereum Sepolia testnet. Swap ETH for FLUF tokens with adorable animations, secure smart contracts, and delightful user experience.

![FluffySwap Preview](https://via.placeholder.com/800x400/FFD1DC/333333?text=FluffySwap+🌸)

## ✨ Features

### 🎨 Frontend
- **Kawaii Design**: Pastel color palette with floating particle animations
- **Dark/Light Mode**: Smooth theme transitions with system preference detection
- **Responsive UI**: Mobile-first design with smooth micro-interactions
- **Wallet Integration**: MetaMask + WalletConnect via RainbowKit
- **Real-time Updates**: Live balance and transaction status with auto-refresh
- **Enhanced UX**: Persistent transaction tracking with proper state management
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Accessibility**: WCAG compliant with keyboard navigation

### 🔐 Smart Contracts
- **MyToken (FLUF)**: ERC-20 token with minting, burning functionality
- **FluffySwap**: Secure DEX contract with rate management and emergency controls
- **Security Features**: ReentrancyGuard, input validation, and access controls
- **Gas Optimized**: Efficient storage patterns and optimized functions

### 🛠️ Developer Experience
- **TypeScript**: Full type safety across frontend and contracts
- **Comprehensive Testing**: Unit tests for all contract functions
- **Auto-deployment**: Scripts with contract verification
- **Hot Reload**: Instant development feedback
- **Error Boundaries**: Graceful error handling in production

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

### Enhanced Transaction Management
- **Persistent State Tracking**: Transactions are properly tracked from initiation to completion
- **Auto-clearing Alerts**: Pending transaction toasts automatically clear when transactions complete
- **Balance Refresh**: Token balances automatically update after successful swaps
- **Error Recovery**: Proper error handling with transaction state reset

### Improved Dark Mode
- **Smooth Transitions**: 500ms ease-in-out transitions for all theme changes
- **Complete Coverage**: Dark mode now applies to entire application including backgrounds
- **System Integration**: Respects system theme preferences with manual override
- **Consistent Styling**: All components properly respond to theme changes

### Better Token Display
- **Accurate Calculations**: Fixed FLUF token amount calculations and display
- **Real-time Updates**: Balance updates reflect immediately after transactions
- **Error Handling**: Graceful fallbacks for contract read errors
- **Formatted Numbers**: Proper number formatting with locale support

### Enhanced Footer
- **Developer Credits**: Full attribution to Huzaifa Khan with GitHub links
- **Professional Design**: Matches the kawaii aesthetic with smooth animations
- **Social Links**: Direct links to developer profile and project repository
- **Responsive Layout**: Adapts beautifully to all screen sizes

## 📋 Smart Contract Architecture

### MyToken.sol (FLUF Token)
```solidity
// ERC-20 token with additional features
- Minting (owner only)
- Burning (user initiated)
- Standard ERC-20 functionality
- Event logging for all operations
```

### FluffySwap.sol (DEX Contract)
```solidity
// Secure swap functionality
- ETH to FLUF token swaps
- Adjustable exchange rates
- Min/max swap limits (0.001 - 10 ETH)
- Emergency withdrawal functions
- Comprehensive input validation
- Reentrancy protection
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
```

### Test Coverage
- ✅ Contract deployment and initialization
- ✅ Token swapping mechanics
- ✅ Rate management and validation
- ✅ Withdrawal functions (ETH + tokens)
- ✅ Error handling and edge cases
- ✅ Access control and permissions

## 🌐 Deployment

### Sepolia Testnet Deployment

```bash
# Deploy contracts
npm run deploy

# Verify contracts on Etherscan
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

The deployment script will:
1. Deploy MyToken (FLUF) with initial supply
2. Deploy FluffySwap with initial rate
3. Transfer tokens to DEX for liquidity
4. Update frontend configuration
5. Save deployment info to `deployments.json`

### Production Checklist
- [x] Contracts audited and tested
- [x] Environment variables configured
- [x] Testnet deployment successful
- [x] Frontend error boundaries tested
- [x] Mobile responsiveness verified
- [x] Dark mode implementation complete
- [x] Transaction state management fixed
- [x] Token display accuracy verified

## 🎨 Design System

### Color Palette
```css
/* Primary kawaii colors */
--pink-pastel: #FFD1DC
--mint-green: #B5EAD7  
--lavender: #C7CEEA
--soft-pink: #F8BBD9
--light-purple: #E4C1F9

/* Dark mode variants */
--dark-bg: #1f2937
--dark-surface: #374151
--dark-accent: #581c87
```

### Typography
- **Headings**: 120% line height, semibold weight
- **Body**: 150% line height, regular weight
- **Max 3 font weights**: Regular, semibold, bold

### Spacing System
- **Base unit**: 8px
- **Component padding**: 16px, 24px, 32px
- **Section margins**: 32px, 48px, 64px

## 🔧 Configuration

### Supported Networks
- **Sepolia Testnet** (Primary)
- **Hardhat Local** (Development)

### Contract Addresses
After deployment, addresses are automatically updated in:
- `src/config/contracts.ts`
- `deployments.json`

### Swap Limits
- **Minimum**: 0.001 ETH
- **Maximum**: 10 ETH per transaction
- **Rate**: Configurable by contract owner

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Maintain kawaii design consistency
- Update documentation for changes
- Ensure dark mode compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenZeppelin**: Secure smart contract libraries
- **RainbowKit**: Beautiful wallet connection UI
- **Framer Motion**: Smooth animations
- **Tailwind CSS**: Utility-first styling
- **Hardhat**: Ethereum development environment

## 🐛 Troubleshooting

### Common Issues

**"Transaction failed" errors**
- Check ETH balance for gas fees
- Verify swap amount is within limits
- Ensure sufficient DEX liquidity

**Wallet connection issues**
- Clear browser cache and cookies
- Try different wallet or browser
- Check network is set to Sepolia

**Contract interaction failures**
- Verify contract addresses in config
- Check if contracts are deployed
- Ensure proper network connection

**Dark mode not working**
- Clear browser localStorage
- Refresh the page
- Check if system theme is supported

### Support

- 📧 Email: huzaifakhan.developer@gmail.com
- 💬 GitHub: [Issues](https://github.com/HuzaifaKhanDeveloper/fluffyswap/issues)
- 🐦 Developer: [@HuzaifaKhanDev](https://github.com/HuzaifaKhanDeveloper)

---

<div align="center">
  <p>Made with 💖 for the kawaii DeFi community</p>
  <p>
    <strong>Made by <a href="https://github.com/HuzaifaKhanDeveloper">Huzaifa Khan</a> — Website by Huzaifa Khan</strong>
  </p>
  <p>
    <a href="https://fluffyswap.dev">Website</a> •
    <a href="https://docs.fluffyswap.dev">Documentation</a> •
    <a href="https://github.com/HuzaifaKhanDeveloper/fluffyswap/issues">Report Bug</a>
  </p>
</div>