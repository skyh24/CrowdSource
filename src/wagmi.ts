import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'BAO',
  projectId: 'BAO',
  chains: [
    mainnet,
    sepolia,
  ],
  ssr: true,
});