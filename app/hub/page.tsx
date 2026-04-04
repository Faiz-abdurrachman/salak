import Link from "next/link";

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7"/>
      <path d="M7 7h10v10"/>
    </svg>
  );
}

export default function ProtocolHub() {
  return (
    <div className="min-h-screen bg-[#080806] text-[#F2EDE4] p-4 md:p-8 lg:p-12 selection:bg-[#B87333]/30 uppercase">
      <header className="flex justify-between items-center mb-16 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border border-[#B87333]/30 flex items-center justify-center group-hover:border-[#B87333] transition-colors">
            <span className="w-2 h-2 bg-[#B87333] rounded-full"></span>
          </div>
          <span style={{ fontFamily: "var(--font-syne)" }} className="font-bold tracking-widest text-sm normal-case">Daulat Salak</span>
        </Link>
        <div style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs text-[#F2EDE4]/50">
          /// PROTOCOL HUB
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <h1 style={{ fontFamily: "var(--font-cormorant)" }} className="text-5xl md:text-7xl mb-4 leading-tight normal-case">
          The <span className="text-[#B87333] italic">Ecosystem</span>
        </h1>
        <p style={{ fontFamily: "var(--font-syne)" }} className="text-[#F2EDE4]/70 max-w-2xl mb-12 text-sm md:text-base leading-relaxed normal-case">
          Welcome to the Daulat Salak Protocol Hub. Discover the world's first RWA ecosystem entirely backed by premium export-grade Salak. Navigate our tokenomics, verify warehouse reserves, and dive into the lore of the volcanic soil.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Main Card: Token Dashboard */}
          <Link 
            href="/token" 
            className="group relative md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl border border-[#B87333]/20 bg-gradient-to-b from-[#B87333]/5 to-transparent p-8 overflow-hidden hover:border-[#B87333]/50 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B87333]/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs text-[#B87333] tracking-widest uppercase mb-2 flex items-center justify-between">
                  <span>Dashboard</span>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)" }} className="text-4xl text-[#F2EDE4] mb-2 normal-case">$SALAK Token</h2>
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-sm text-[#F2EDE4]/60 max-w-sm normal-case">
                  View real-time price charts, tokenomics, and buy $SALAK directly from the decentralized exchange.
                </p>
              </div>
              
              <div className="flex items-end justify-between">
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains)" }} className="text-[10px] text-[#F2EDE4]/40 uppercase mb-1">Live Peg Price</div>
                  <div style={{ fontFamily: "var(--font-syne)" }} className="text-3xl font-bold text-[#D4956A] normal-case">$3.00 <span className="text-base text-[#F2EDE4]/40 font-normal">/ kg</span></div>
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs text-[#B87333] bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
                  Vol: $1.2M 
                </div>
              </div>
            </div>
          </Link>

          {/* Card: Marketplace / Redeem */}
          <Link 
            href="/marketplace" 
            className="group relative md:col-span-1 lg:col-span-2 rounded-2xl border border-[#F2EDE4]/10 bg-[#F2EDE4]/5 p-6 hover:bg-[#F2EDE4]/10 transition-colors"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains)" }} className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#F2EDE4]/50 uppercase tracking-widest">Marketplace</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-[#F2EDE4]/50 group-hover:text-[#B87333]" />
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-2xl font-bold mb-2 normal-case text-[#D4956A]">Redeem Physical Salak</h3>
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-sm text-[#F2EDE4]/60 normal-case">Burn your $SALAK tokens to redeem physical exports directly from our partner warehouses.</p>
              </div>
            </div>
          </Link>

          {/* Card: Proof of Reserve */}
          <div className="group relative md:col-span-1 lg:col-span-2 rounded-2xl border border-[#F2EDE4]/10 bg-[#F2EDE4]/5 p-6 hover:bg-[#F2EDE4]/10 transition-colors overflow-hidden cursor-not-allowed">
             <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains)" }} className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#F2EDE4]/50 uppercase tracking-widest">Audits</span>
                  <span className="text-[10px] text-[#B87333] border border-[#B87333]/30 rounded-full px-2 py-0.5 bg-[#B87333]/10">SOON</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-xl font-bold mb-2 normal-case">Proof of Reserve</h3>
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-sm text-[#F2EDE4]/60 normal-case">Verify real-time physical reserves mapped securely to the blockchain via Chainlink Oracles.</p>
              </div>
            </div>
          </div>

          {/* Card: Lore */}
          <Link 
            href="/product" 
            className="group relative rounded-2xl border border-[#F2EDE4]/10 bg-[url('/bg-texture-hint.png')] bg-cover bg-center p-6 hover:border-[#B87333]/40 transition-colors flex flex-col justify-between"
            style={{ backgroundColor: 'rgba(242, 237, 228, 0.03)' }}
          >
             <div>
                <div style={{ fontFamily: "var(--font-jetbrains)" }} className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#F2EDE4]/50 uppercase tracking-widest">Lore</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-[#F2EDE4]/50 group-hover:text-[#B87333]" />
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl italic font-bold mb-2 normal-case text-[#F2EDE4]">Tanah Vulkanik</h3>
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-xs text-[#F2EDE4]/60 normal-case">The story of the soil, the farmers, and the sweet harvest.</p>
             </div>
          </Link>

           {/* Card: Community */}
           <div className="relative rounded-2xl border border-[#F2EDE4]/10 bg-transparent flex flex-col justify-center items-center">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-full h-1/2 border-b border-[#F2EDE4]/10 flex justify-center items-center hover:bg-[#F2EDE4]/5 transition-colors text-[#F2EDE4]/70 hover:text-white uppercase">
                 <span style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs tracking-widest flex items-center gap-2">Discord <ArrowUpRightIcon className="w-3 h-3"/></span>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-full h-1/2 flex justify-center items-center hover:bg-[#F2EDE4]/5 transition-colors text-[#F2EDE4]/70 hover:text-white uppercase">
                 <span style={{ fontFamily: "var(--font-jetbrains)" }} className="text-xs tracking-widest flex items-center gap-2">Twitter <ArrowUpRightIcon className="w-3 h-3"/></span>
              </a>
          </div>

        </div>

        {/* Footer info */}
        <footer style={{ fontFamily: "var(--font-jetbrains)" }} className="mt-16 text-center text-[10px] text-[#F2EDE4]/30 uppercase tracking-widest">
            © 2026 DAULAT SALAK PROTOCOL. ALL RIGHTS RESERVED.
        </footer>
      </main>
    </div>
  );
}
