import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ??
  (() => {
    throw new Error("WalletConnect API is required");
  })();

export const config = getDefaultConfig({
  appName: "Dapp",
  projectId: walletConnectProjectId,
  chains: [mainnet, sepolia],
  ssr: true,
});

export const chains = [mainnet, sepolia];