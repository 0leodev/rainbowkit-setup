# rainbowkit-setup 🌈

Run `pnpm install @rainbow-me/rainbowkit@2.2.8 @tanstack/react-query@5.85.3 viem@2.34.0 wagmi@2.16.3`

Minimal Next.js (app router) setup with RainbowKit and wagmi for EVM wallet integration.

## Project structure (key files)

- `src/components/TopBar.tsx` — Header component with app title and RainbowKit ```<ConnectButton/>``` for wallet connection.

```tsx
"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function TopBar({ title = "Dapp" }: { title?: string }) {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div>
          <ConnectButton showBalance={false} accountStatus="address" />
        </div>
      </div>
    </header>
  );
}
```

- `src/config/wagmiConfig.ts` — Exports ```wagmi``` configuration using RainbowKit's ```getDefaultConfig```, sets supported chains and WalletConnect project ID.

```tsx
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
```

- `src/providers/WalletProviders.tsx` — Wraps the app with ```WagmiProvider```, ```QueryClientProvider```, and ```RainbowKitProvider``` for wallet connectivity and state management.

```tsx
"use client";
import React from "react";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { config } from '../config/wagmiConfig';

const queryClient = new QueryClient();

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
```
