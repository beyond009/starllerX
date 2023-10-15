"use client";

import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi'
import { polygon, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public';
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { ledgerWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';


const { chains, publicClient } = configureChains(
  [sepolia, polygonMumbai],
  [
    publicProvider(),
  ]
);

const projectId = '3c4978151033e674456016d8348c32a7';

const { wallets } = getDefaultWallets({
  appName: 'FireFly',
  projectId,
  chains,
});
const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

interface WalletProviderProps {
  children: React.ReactNode;
}


export function WalletProvider({ children }: WalletProviderProps) {
  return <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} modalSize='compact'>
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
}