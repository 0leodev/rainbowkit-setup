"use client";
import TopBar from "@/components/TopBar";
import EthBalance from "@/components/EthBalance";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="max-w-sm mx-auto p-4">
        <EthBalance />
      </main>
    </div>
  );
}