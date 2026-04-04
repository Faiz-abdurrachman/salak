"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function ProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle breathing animation for the glowing rings
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        scale: 1.05,
        opacity: 0.8,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // Floating animation for badges and cards
    if (elementsRef.current) {
      const floaters = elementsRef.current.querySelectorAll(".floater");
      floaters.forEach((el, i) => {
        gsap.to(el, {
          y: "-=15",
          duration: 3 + i * 0.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }

    // Initial fade in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#080806] text-[#F2EDE4] relative overflow-hidden font-syne select-none flex flex-col"
    >
      {/* ─── BACKGROUND VORTEX / RINGS ─────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[#B87333] opacity-[0.07] blur-[120px]" />
        
        <div ref={ringRef} className="relative flex items-center justify-center w-full h-full">
          <div className="absolute w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full border border-[rgba(184,115,51,0.2)] shadow-[0_0_100px_rgba(184,115,51,0.1)]" />
          <div className="absolute w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full border border-[rgba(184,115,51,0.4)] shadow-[0_0_120px_rgba(184,115,51,0.2)]" />
          <div className="absolute w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full border-[2px] border-[rgba(212,149,106,0.5)] shadow-[inset_0_0_80px_rgba(184,115,51,0.4),0_0_80px_rgba(184,115,51,0.4)]" />
        </div>
        
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#080806] via-[#080806]/80 to-transparent" />
      </div>

      {/* ─── HEADER / TOP NAV ──────────────────────────────────────────────── */}
      <header className="relative w-full p-6 lg:px-12 flex items-center justify-between z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#B87333] flex items-center justify-center text-[#B87333] font-jetbrains font-bold text-xs group-hover:bg-[#B87333] group-hover:text-[#080806] transition-colors">
              DS
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-jetbrains text-[11px] uppercase tracking-widest text-[#F2EDE4]/60">
            <Link href="/token" className="hover:text-[#B87333] transition-colors">[01] Digital Assets</Link>
            <Link href="/hub" className="hover:text-[#B87333] transition-colors">[02] Hub</Link>
            <Link href="/marketplace" className="hover:text-[#B87333] transition-colors">[03] + Redeem</Link>
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-6 text-[#F2EDE4]/60 font-jetbrains text-[11px]">
            <span className="hover:text-[#B87333] cursor-pointer transition-colors">TW</span>
            <span className="hover:text-[#B87333] cursor-pointer transition-colors">TG</span>
          </div>
          
          <button className="font-jetbrains text-[11px] uppercase tracking-widest px-5 py-2.5 bg-[rgba(242,237,228,0.05)] border border-[rgba(242,237,228,0.15)] rounded-full hover:bg-[#B87333] hover:text-[#080806] hover:border-[#B87333] transition-all flex items-center gap-3 text-[#F2EDE4]/90">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            0x8F9C...A29B
          </button>
        </div>
      </header>

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <main ref={elementsRef} className="relative z-10 flex-1 w-full flex flex-col items-center pt-8 lg:pt-16 pb-32">
        
        {/* Floating Badges (Positioned carefully around edges) */}
        <div className="absolute left-[5%] lg:left-[12%] top-[15%] lg:top-[20%] floater hidden md:flex items-center gap-3 bg-[#080806]/80 backdrop-blur-xl border border-[#F2EDE4]/10 rounded-full py-2.5 px-5 shadow-2xl">
          <div className="w-6 h-6 rounded-full bg-[#B87333]/20 flex items-center justify-center font-jetbrains text-[9px] text-[#B87333]">1:1</div>
          <span className="text-[13px] font-syne font-medium text-[#F2EDE4]/90">Physical Backed</span>
        </div>
        
        <div className="absolute right-[5%] lg:right-[15%] top-[10%] lg:top-[12%] floater hidden md:flex items-center gap-3 bg-[#080806]/80 backdrop-blur-xl border border-[#F2EDE4]/10 rounded-full py-2.5 px-5 shadow-2xl" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 rounded-full bg-[#D4956A]/20 flex items-center justify-center font-jetbrains text-[9px] text-[#D4956A]">IoT</div>
          <span className="text-[13px] font-syne font-medium text-[#F2EDE4]/90">Warehouse Oracle</span>
        </div>

        <div className="absolute left-[8%] lg:left-[18%] top-[55%] lg:top-[45%] floater hidden md:flex items-center gap-3 bg-[#080806]/80 backdrop-blur-xl border border-[#F2EDE4]/10 rounded-full py-2.5 px-5 shadow-2xl" style={{ animationDelay: '0.5s' }}>
          <div className="w-6 h-6 rounded-full bg-[#F2EDE4]/10 flex items-center justify-center font-jetbrains text-[9px] text-[#F2EDE4]/80">IDR</div>
          <span className="text-[13px] font-syne font-medium text-[#F2EDE4]/80">Rp 45.000 / Kg</span>
        </div>

        {/* Center Title */}
        <div className="w-full max-w-[1000px] text-center px-6 relative z-20 mx-auto mt-4 lg:mt-8">
          <h1 className="font-cormorant font-medium text-[clamp(44px,7vw,92px)] leading-[1.05] tracking-tight mb-8 text-[#F2EDE4] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Exploring the Real-World Assets <br className="hidden md:block"/>
            in the <span className="text-[#D4956A] italic pr-2">Daulat Salak</span> Ecosystem
          </h1>
          <p className="font-syne font-medium text-[clamp(14px,1.6vw,18px)] leading-[1.6] text-[#F2EDE4]/70 max-w-2xl mx-auto mb-12">
            A comprehensive guide to understanding the agricultural tokenization model, distributed yield mechanics, and the actual farmers behind the Web3 space.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link 
              href="/token"
              className="group relative flex items-center justify-center gap-3 font-jetbrains font-bold text-[12px] uppercase tracking-widest text-[#080806] bg-[#B87333] px-10 py-5 rounded-md overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(184,115,51,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Get Started
              </span>
              <div className="absolute inset-0 bg-[#D4956A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>

            {/* Avatars */}
            <div className="flex items-center gap-4 bg-[#080806]/60 backdrop-blur-md border border-[#F2EDE4]/10 rounded-full py-2.5 px-5 shadow-2xl">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="shrink-0 w-10 h-10 rounded-full border-2 border-[#080806] bg-[#B87333]/30 overflow-hidden relative shadow-sm">
                    <svg className="absolute inset-0 w-full h-full text-[#B87333]/90 pt-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start leading-none gap-1.5 ml-2">
                <span className="font-syne font-bold text-[13px] text-[#F2EDE4]/90">Trusted by +32K</span>
                <span className="font-jetbrains text-[10px] text-[#F2EDE4]/50 tracking-wider">Farmers & Holders</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM CARDS ──────────────────────────────────────────────────── */}
        {/* Absolute positioned at the very bottom of the page */}
        <div className="absolute bottom-10 lg:bottom-16 w-full px-6 lg:px-12 z-30">
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-6 lg:gap-8 max-w-[1240px] mx-auto">
            
            {/* Card 1 */}
            <div className="floater flex-1 w-full max-w-[360px] bg-gradient-to-br from-[#0C0B09] to-[#080806]/95 backdrop-blur-2xl border border-[rgba(242,237,228,0.1)] p-6 rounded-2xl flex items-center gap-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(184,115,51,0.08)] border border-[rgba(184,115,51,0.2)] flex items-center justify-center text-[#B87333] group-hover:bg-[#B87333] group-hover:text-[#080806] transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-syne font-bold text-[15px] text-[#F2EDE4] mb-1.5">Physical Verification</h3>
                <p className="font-syne font-medium text-[12px] leading-[1.5] text-[#F2EDE4]/50">Every token is backed by actual export-grade Salak stored offline in secure warehouses.</p>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-[rgba(242,237,228,0.05)] flex items-center justify-center text-[#F2EDE4]/40 group-hover:text-[#F2EDE4] transition-colors duration-300">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>

            {/* Card 2 (Center, elevated) */}
            <div className="floater flex-1 w-full max-w-[360px] bg-gradient-to-br from-[#1A1510] to-[#0A0806] backdrop-blur-2xl border border-[rgba(184,115,51,0.4)] p-6 rounded-2xl flex items-center gap-5 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(184,115,51,0.2)] xl:-translate-y-8 hover:xl:-translate-y-10 transition-transform duration-300 z-10 group" style={{ animationDelay: '0.2s' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#B87333]/20 border border-[#B87333] flex items-center justify-center text-[#D4956A] group-hover:bg-[#B87333] group-hover:text-[#080806] transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-syne font-bold text-[15px] text-[#D4956A] mb-1.5">Transparent Yield</h3>
                <p className="font-syne font-medium text-[12px] leading-[1.5] text-[#F2EDE4]/60">Export profits are distributed directly on-chain, eliminating massive middleman cuts.</p>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-[#B87333] flex items-center justify-center text-[#080806] group-hover:scale-110 transition-transform duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="floater flex-1 w-full max-w-[360px] bg-gradient-to-br from-[#0C0B09] to-[#080806]/95 backdrop-blur-2xl border border-[rgba(242,237,228,0.1)] p-6 rounded-2xl flex items-center gap-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300 group" style={{ animationDelay: '0.4s' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(184,115,51,0.08)] border border-[rgba(184,115,51,0.2)] flex items-center justify-center text-[#B87333] group-hover:bg-[#B87333] group-hover:text-[#080806] transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-syne font-bold text-[15px] text-[#F2EDE4] mb-1.5">Global Trade Access</h3>
                <p className="font-syne font-medium text-[12px] leading-[1.5] text-[#F2EDE4]/50">Holders gain fractional access to the international export market and liquidity.</p>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-[rgba(242,237,228,0.05)] flex items-center justify-center text-[#F2EDE4]/40 group-hover:text-[#F2EDE4] transition-colors duration-300">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
