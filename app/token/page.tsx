"use client";

import Link from "next/link";

export default function TokenDashboard() {
  return (
    <div className="min-h-screen bg-[#080806] text-[#F2EDE4] p-4 md:p-8 lg:p-12 selection:bg-[#B87333]/30">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        <Link href="/hub" className="flex items-center gap-2 group text-[#F2EDE4]/60 hover:text-[#B87333] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs uppercase tracking-widest">Back to Hub</span>
        </Link>
        <button className="border border-[#B87333]/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#B87333] hover:bg-[#B87333]/10 transition-colors" style={{ fontFamily: "var(--font-jetbrains)" }}>
          Connect Wallet
        </button>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Chart & Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Token Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-[#B87333] flex items-center justify-center bg-[#B87333]/10">
                  <span className="w-2 h-2 bg-[#B87333] rounded-full"></span>
                </div>
                <h1 style={{ fontFamily: "var(--font-cormorant)" }} className="text-4xl">Daulat Salak <span className="text-[#F2EDE4]/50 italic">($SALAK)</span></h1>
              </div>
              <div style={{ fontFamily: "var(--font-syne)" }} className="text-4xl font-bold text-[#D4956A]">
                $3.05 <span className="text-[#4CAF50] text-sm font-normal ml-2">+1.2% (24h)</span>
              </div>
            </div>
            
            <div className="flex gap-6" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <div>
                <div className="text-[10px] text-[#F2EDE4]/40 uppercase tracking-widest mb-1">Market Cap</div>
                <div className="text-sm">$4.52M</div>
              </div>
              <div>
                <div className="text-[10px] text-[#F2EDE4]/40 uppercase tracking-widest mb-1">24h Vol</div>
                <div className="text-sm">$820.5K</div>
              </div>
              <div>
                <div className="text-[10px] text-[#F2EDE4]/40 uppercase tracking-widest mb-1">Circulating</div>
                <div className="text-sm">1.5M SALAK</div>
              </div>
            </div>
          </div>

          {/* Chart Wrapper */}
          <div className="w-full h-[400px] border border-[#F2EDE4]/10 rounded-2xl bg-[#F2EDE4]/5 p-4 relative overflow-hidden flex flex-col justify-end">
            {/* Mock Chart Grid */}
            <div className="absolute inset-0 z-0">
              <div className="w-full h-1/4 border-b border-[#F2EDE4]/5"></div>
              <div className="w-full h-1/4 border-b border-[#F2EDE4]/5"></div>
              <div className="w-full h-1/4 border-b border-[#F2EDE4]/5"></div>
            </div>
            
            {/* Mock Chart Line SVG */}
            <svg viewBox="0 0 1000 300" className="w-full h-full absolute bottom-0 left-0 z-10 preserve-3d" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4956A" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#D4956A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,300 L0,200 C100,180 200,250 300,150 C400,50 500,200 600,100 C700,0 800,150 900,100 C950,75 1000,50 1000,50 L1000,300 Z" fill="url(#gradientLine)" />
              <path d="M0,200 C100,180 200,250 300,150 C400,50 500,200 600,100 C700,0 800,150 900,100 C950,75 1000,50 1000,50" fill="none" stroke="#D4956A" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(212,149,106,0.8)]" />
            </svg>

            <div className="absolute top-4 left-4 z-20 flex gap-2" style={{ fontFamily: "var(--font-jetbrains)" }}>
              {["1H", "1D", "1W", "1M", "ALL"].map((tf, i) => (
                <button key={tf} className={`text-[10px] px-2 py-1 rounded-sm ${i===3 ? 'bg-[#B87333]/20 text-[#B87333]' : 'text-[#F2EDE4]/40 hover:text-[#F2EDE4]/80'}`}>
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="pt-4 border-t border-[#F2EDE4]/10">
            <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-xl font-bold mb-4">About Real World $SALAK</h3>
            <p style={{ fontFamily: "var(--font-syne)" }} className="text-[#F2EDE4]/60 text-sm leading-relaxed mb-4">
              The Daulat Salak protocol bridges the gap between traditional agricultural commodity exports and the decentralized financial ecosystem. Each $SALAK token represents ownership of precisely 1 kilogram of premium quality export-grade Salak, physically stored within an audited warehouse facility.
            </p>
            <p style={{ fontFamily: "var(--font-syne)" }} className="text-[#F2EDE4]/60 text-sm leading-relaxed">
              Token holders may periodically receive yield distributed from the net profits of physical international exports, or choose to burn their tokens in order to redeem real-world delivery of the agricultural product. The token smart contract minting is algorithmically pegged to the IoT inventory management of our partnering warehouse.
            </p>
          </div>

        </div>

        {/* Right Column: Swap Widget */}
        <div className="space-y-6">
          
          {/* Swap Box */}
          <div className="border border-[#B87333]/20 bg-[#B87333]/5 rounded-2xl p-6 backdrop-blur-md">
            <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-lg font-bold mb-6">Invest in $SALAK</h3>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between" style={{ fontFamily: "var(--font-jetbrains)" }}>
                <span className="text-[10px] text-[#F2EDE4]/50 uppercase tracking-widest">You pay</span>
                <span className="text-[10px] text-[#F2EDE4]/50 uppercase tracking-widest">Balance: 0.00 USDC</span>
              </div>
              <div className="flex items-center justify-between border border-[#F2EDE4]/10 bg-[#080806] rounded-xl p-3">
                <input type="text" placeholder="0.0" className="bg-transparent border-none outline-none text-2xl w-full text-[#F2EDE4] font-['var(--font-jetbrains)']" />
                <span className="text-sm border border-[#F2EDE4]/20 rounded-full px-3 py-1 bg-[#F2EDE4]/10">USDC</span>
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#080806] border border-[#F2EDE4]/10 flex items-center justify-center text-[#F2EDE4]/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex justify-between" style={{ fontFamily: "var(--font-jetbrains)" }}>
                <span className="text-[10px] text-[#F2EDE4]/50 uppercase tracking-widest">You receive</span>
                <span className="text-[10px] text-[#F2EDE4]/50 uppercase tracking-widest">Balance: 0 SALAK</span>
              </div>
              <div className="flex items-center justify-between border border-[#F2EDE4]/10 bg-[#080806] rounded-xl p-3">
                <input type="text" placeholder="0.0" className="bg-transparent border-none outline-none text-2xl w-full text-[#F2EDE4] font-['var(--font-jetbrains)']" readOnly />
                <span className="flex items-center gap-2 text-sm border border-[#B87333]/40 rounded-full px-3 py-1 bg-[#B87333]/20 text-[#B87333]">
                  <span className="w-2 h-2 bg-[#B87333] rounded-full"></span>
                  SALAK
                </span>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B87333] to-[#D4956A] text-[#080806] font-bold uppercase tracking-widest text-sm btn-primary" style={{ fontFamily: "var(--font-syne)" }}>
              Connect Wallet to Swap
            </button>
            <p className="mt-4 text-center text-[10px] text-[#F2EDE4]/40" style={{ fontFamily: "var(--font-jetbrains)" }}>
              1 SALAK = 1.00 USDC
            </p>
          </div>

          {/* Smart Contract Info */}
          <div className="border border-[#F2EDE4]/10 bg-[#F2EDE4]/5 rounded-2xl p-6">
             <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-sm font-bold mb-4">Contract Protocol</h3>
             <div className="space-y-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F2EDE4]/40">Network</span>
                  <span className="text-[#B87333]">Base L2</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F2EDE4]/40">Contract</span>
                  <div className="flex items-center gap-2">
                    <span>0x7a...salak</span>
                    <button className="hover:text-[#B87333]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F2EDE4]/40">Oracle</span>
                  <span className="text-[#F2EDE4]">Chainlink PoR</span>
                </div>
             </div>
          </div>

        </div>

      </main>
    </div>
  );
}
