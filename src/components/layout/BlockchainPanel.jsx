import React from 'react';
import { ShieldCheck, Lock, Eye, Handshake } from 'lucide-react';
// 1. Import the ConnectButton from RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';

const BlockchainPanel = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-900 font-bold whitespace-nowrap">
            Why Blockchain in BEL Portal?
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Secure<br/>Records</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <Lock className="w-5 h-5 text-blue-600" />
              <span>Tamper-Proof<br/>Data</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <Eye className="w-5 h-5 text-blue-600" />
              <span>Transparent<br/>Transactions</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <Handshake className="w-5 h-5 text-blue-600" />
              <span>Trusted<br/>Partnerships</span>
            </div>
          </div>

          {/* 2. Place the Connect Wallet Button here */}
          <div className="mt-4 md:mt-0 flex-shrink-0">
            <ConnectButton />
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2">
          <span className="text-sm font-bold text-gray-800 tracking-wide">
            A Next-Gen Digital Platform for a Stronger, Smarter and Safer India
          </span>
          <span className="text-lg">🇮🇳</span> {/* Indian Flag Representation */}
        </div>

      </div>
    </div>
  );
};

export default BlockchainPanel;