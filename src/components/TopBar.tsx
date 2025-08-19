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
