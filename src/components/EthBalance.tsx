"use client";
import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";

export default function EthBalance() {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  return (
    <div>
      {balance != undefined && (
        <div className="p-4 bg-gray-700 rounded-lg flex justify-between font-semibold">
          <span>{balance.symbol}</span>
          <span>{parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(4)}</span>
        </div>
      )}
    </div>
  );
}