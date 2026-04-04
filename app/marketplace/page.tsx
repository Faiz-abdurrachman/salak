"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const FullscreenMenu= dynamic(() => import("@/components/FullscreenMenu"),{ ssr: false });
const Cursor        = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Footer        = dynamic(() => import("@/components/Footer"),        { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const TSB = "0 1px 3px rgba(8,8,6,0.85), 0 2px 6px rgba(8,8,6,0.5)";

const H1: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 300,
  fontSize: "clamp(32px, 5vw, 84px)",
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  color: "#F2EDE4",
};

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)",
  fontSize: "10px",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#B87333",
  display: "block",
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: 1.6,
  color: "rgba(242,237,228,0.4)",
};

const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>`;

const MOCK_LISTINGS = [
  { id: "LOT-09X: MEGA", farmer: "Koperasi Tani Makmur", date: "LIVE AUCTION", qty: "15,400", grade: "A (Ekspor)", location: "Sleman, DIY", type: "hero" },
  { id: "LOT-840", farmer: "Kelompok Tani Harapan", date: "T-2 HOURS", qty: "1,800", grade: "B (Industri)", location: "Magelang", type: "standard" },
  { id: "LOT-839", farmer: "Suka Maju", date: "T-4 HOURS", qty: "3,200", grade: "A+ (Ekspor)", location: "Sleman", type: "standard" },
  { id: "LOT-838", farmer: "Agung Jaya", date: "SETTLED", qty: "800", grade: "B", location: "Sleman", type: "small" },
  { id: "LOT-837", farmer: "KUD Nusantara", date: "SETTLED", qty: "4,500", grade: "A", location: "Magelang", type: "small" },
  { id: "LOT-836", farmer: "Tani Sejahtera", date: "UPCOMING", qty: "6,000", grade: "A+", location: "Sleman", type: "wide" },
];

function SpotlightCard({ children, className, index, style }: { children: React.ReactNode, className?: string, index: number, style?: React.CSSProperties }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!divRef.current) return;
    gsap.fromTo(divRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 1.2, ease: "expo.out", delay: index * 0.1,
        scrollTrigger: { trigger: divRef.current, start: "top 95%" }
      }
    );
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={className}
      style={{
        ...style,
        position: "relative",
        background: "rgba(8,8,6,0.8)",
        border: "1px solid rgba(242,237,228,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
      }}
    >
      <div 
        style={{
          position: "absolute",
          left: pos.x, top: pos.y, transform: "translate(-50%, -50%)",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(184,115,51,0.12) 0%, transparent 60%)",
          opacity, transition: "opacity 0.5s ease",
          pointerEvents: "none", zIndex: 0
        }}
      />
      <div style={{ position: "relative", zIndex: 1, height: "100%", padding: "40px" }}>
        {children}
      </div>
    </div>
  );
}

export default function MarketplacePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <Navbar onMenuToggle={toggleMenu} menuOpen={menuOpen} />
      <FullscreenMenu open={menuOpen} onClose={toggleMenu} />

      <main style={{ position: "relative", zIndex: 5, paddingBottom: "12vh", overflow: "hidden" }}>
        
        <div style={{ position: "fixed", inset: 0, zIndex: -2, background: "#060605" }} />
        <div style={{
          position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none",
          backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "160px", opacity: 0.6, mixBlendMode: "overlay",
        }} />

        {/* Massive Background Ticker */}
        <div style={{ 
          position: "fixed", top: "25%", left: "-10%", right: "-10%", zIndex: -1,
          transform: "rotate(-4deg)", pointerEvents: "none", opacity: 0.15
        }}>
          <div style={{
            display: "inline-block", whiteSpace: "nowrap", animation: "marqueeLeft 60s linear infinite",
            fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "clamp(120px, 22vw, 320px)",
            WebkitTextStroke: "2px #B87333", color: "transparent", letterSpacing: "-0.04em",
          }}>
            <style>{`@keyframes marqueeLeft { 0% { transform: translate(0, 0); } 100% { transform: translate(-50%, 0); } }`}</style>
            LIQUIDITY INDEX • GLOBAL SALAK • YIELD 14% • LIQUIDITY INDEX • GLOBAL SALAK • YIELD 14% • 
          </div>
        </div>

        {/* Header Section */}
        <section style={{ padding: "20vh 6vw 8vh" }}>
          <div>
            <div style={{ ...EYEBROW, color: "rgba(242,237,228,0.3)" }}>Terminal Perdagangan RWA</div>
            <h1 style={{ ...H1, marginTop: "16px", textShadow: TSB }}>Real World Liquidity,<br />Settled On-Chain.</h1>
          </div>
        </section>

        {/* Asymmetrical Bento Grid */}
        <section style={{ padding: "0 6vw" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)", 
            gridAutoRows: "minmax(280px, auto)",
            gap: isMobile ? "16px" : "2px", 
            background: "rgba(242,237,228,0.06)",
            padding: isMobile ? "0" : "2px",
            border: "1px solid rgba(242,237,228,0.06)"
          }}>
            {MOCK_LISTINGS.map((lot, idx) => {
              // Bento Logic mapping based on type
              let span = "span 12"; // mobile default
              if (!isMobile) {
                if (lot.type === "hero") span = "span 8";
                else if (lot.type === "standard") span = "span 4";
                else if (lot.type === "wide") span = "span 6";
                else if (lot.type === "small") span = "span 3";
              }
              
              const isHero = lot.type === "hero";

              return (
                <SpotlightCard 
                  key={lot.id} index={idx}
                  style={{ gridColumn: span, gridRow: isHero && !isMobile ? "span 2" : "span 1" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ ...EYEBROW, marginBottom: "8px", color: isHero ? "#F2EDE4" : "#B87333" }}>{lot.id}</div>
                      <div style={{ ...BODY }}>{lot.farmer}</div>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-jetbrains)", fontSize: "10px", 
                      padding: "6px 12px", border: "1px solid rgba(184,115,51,0.3)", borderRadius: "30px",
                      background: lot.date.includes("LIVE") ? "rgba(184,115,51,0.15)" : "transparent",
                      color: lot.date.includes("LIVE") ? "#D4956A" : "rgba(242,237,228,0.4)"
                    }}>
                      {lot.date}
                    </div>
                  </div>

                  <div style={{ marginTop: isHero ? "120px" : "60px" }}>
                    <div style={{ 
                        fontFamily: "var(--font-cormorant)", 
                        fontSize: isHero && !isMobile ? "140px" : "clamp(48px, 8vw, 72px)", 
                        lineHeight: 0.8, letterSpacing: "-0.04em", color: "#F2EDE4" 
                    }}>
                      {lot.qty}
                    </div>
                    <div style={{ ...EYEBROW, color: "rgba(242,237,228,0.2)", marginTop: "12px" }}>KILOGRAM AVAILABLE</div>
                  </div>
                  
                  <div style={{ display: "flex", gap: "32px", marginTop: "40px", borderTop: "1px solid rgba(242,237,228,0.05)", paddingTop: "24px" }}>
                    <div>
                      <div style={{ ...EYEBROW, color: "rgba(242,237,228,0.3)", marginBottom: "4px" }}>GRADE</div>
                      <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "13px", color: "#D4956A" }}>{lot.grade}</div>
                    </div>
                    <div>
                      <div style={{ ...EYEBROW, color: "rgba(242,237,228,0.3)", marginBottom: "4px" }}>LOKASI</div>
                      <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "13px", color: "#F2EDE4" }}>{lot.location}</div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
