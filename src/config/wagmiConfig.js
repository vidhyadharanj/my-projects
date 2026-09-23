import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon, polygonAmoy } from 'wagmi/chains';
import { http } from 'viem';

// Ensure you replace this with your actual WalletConnect project ID
const projectId = 'demo';

export const wagmiConfig = getDefaultConfig({
  appName: 'BEL Blockchain Corporate Portal',
  projectId: projectId,
  chains: [mainnet, sepolia, polygon, polygonAmoy], // Include testnets for development
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
  },
});