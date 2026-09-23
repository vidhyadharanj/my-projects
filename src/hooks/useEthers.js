import { useWalletClient, usePublicClient } from 'wagmi';
import { providers } from 'ethers';
import { useMemo } from 'react';

/**
 * Viem to Ethers.js Adapter Hook.
 * Wagmi v2 uses Viem by default. If your project has specific legacy libraries 
 * requiring ethers.js providers or signers, use these conversion hooks.
 */

export function publicClientToProvider(publicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    return new providers.FallbackProvider(
      transport.transports.map(({ value }) => new providers.JsonRpcProvider(value?.url, network))
    );
  }
  return new providers.JsonRpcProvider(transport.url, network);
}

export function useEthersProvider() {
  const publicClient = usePublicClient();
  return useMemo(() => (publicClient ? publicClientToProvider(publicClient) : undefined), [publicClient]);
}

export function walletClientToSigner(walletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  return provider.getSigner(account.address);
}

export function useEthersSigner() {
  const { data: walletClient } = useWalletClient();
  return useMemo(() => (walletClient ? walletClientToSigner(walletClient) : undefined), [walletClient]);
}