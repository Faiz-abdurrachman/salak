"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const FullscreenMenu= dynamic(() => import("@/components/FullscreenMenu"),{ ssr: false });
const Cursor        = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Footer        = dynamic(() => import("@/components/Footer"),        { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const TSH = "0 3px 12px rgba(8,8,6,0.9)";
const H1: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)", fontWeight: 300,
  fontSize: "clamp(48px, 9vw, 140px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#F2EDE4", textShadow: TSH,
};
const H2: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)", fontWeight: 300,
  fontSize: "clamp(32px, 5vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#F2EDE4",
};
const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B87333",
};
const BODY: React.CSSProperties = {
  fontFamily: "var(--font-syne)", fontWeight: 300,
  fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: 1.8, color: "rgba(242,237,228,0.5)",
};

const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>`;

export default function DeepProductPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const cb = () => setIsMobile(window.innerWidth < 768);
    cb();
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hydrated) return;

    // Reset GSAP to prevent overlapping ghosts on hot reload
    ScrollTrigger.getAll().forEach(t => t.kill());

    // 1. Hero Parallax
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: "25%", opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true
        }
      });
    }

    // 2. Horizontal Scroll Pinning (Only on desktop)
    if (horizontalWrapperRef.current && horizontalScrollRef.current && !isMobile) {
      const el = horizontalScrollRef.current;
      gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalWrapperRef.current,
          start: "top top",
          end: () => `+=\${el.scrollWidth}`, // Dynamic pin duration based on exact block width
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });
    }

    // Delay a refresh so images and fonts settle
    setTimeout(() => { ScrollTrigger.refresh(); }, 500);

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [hydrated, isMobile]);

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <Navbar onMenuToggle={toggleMenu} menuOpen={menuOpen} />
      <FullscreenMenu open={menuOpen} onClose={toggleMenu} />

      <main style={{ position: "relative", zIndex: 5, background: "#060605" }}>
        
        {/* Cinematic Grain Overlay */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 99, pointerEvents: "none",
          backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "160px", opacity: 0.6, mixBlendMode: "overlay",
        }} />

        {/* 1. HERO SECTION */}
        <section ref={heroRef} style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "10vh 6vw" }}>
          <div>
            <div style={EYEBROW}>COMMODITY TOKEN PROTOCOL</div>
            <h1 style={{ ...H1, marginTop: "24px", maxWidth: "1200px" }}>The First Real World Asset Born from Volcanic Soil.</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "40px" }}>
              <div style={{ width: "2px", height: "60px", background: "#D4956A" }} />
              <p style={{ ...BODY, maxWidth: "500px" }}>
                Meet $SALAK. A cryptographic representation of export-quality salak. Merging Indonesia's agricultural heritage with global decentralized liquidity.
              </p>
            </div>
          </div>
          
          <div style={{ position: "absolute", bottom: "40px", right: "6vw", display: "flex", flexDirection: "column", alignItems: "flex-end", animation: "pulse 2s infinite" }}>
            <style>{`@keyframes pulse { 0% { opacity: 0.5; transform: translateY(0); } 50% { opacity: 1; transform: translateY(10px); } 100% { opacity: 0.5; transform: translateY(0); } }`}</style>
            <div style={EYEBROW}>SCROLL TO EXPLORE</div>
            <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #B87333, transparent)", marginTop: "12px" }} />
          </div>
        </section>

        {/* 2. NARRATIVE HORIZONTAL TIMELINE */}
        {hydrated && !isMobile ? (
          <section ref={horizontalWrapperRef} style={{ height: "100vh", overflow: "hidden", background: "#080806" }}>
            <div ref={horizontalScrollRef} style={{ display: "flex", height: "100vh", width: "300vw" }}>
              
              <div style={{ width: "100vw", height: "100%", padding: "10vh 6vw", display: "flex", alignItems: "center", background: "linear-gradient(90deg, #060605, rgba(184,115,51,0.05))" }}>
                <div style={{ maxWidth: "600px" }}>
                  <div style={EYEBROW}>Phase 1: The Origin</div>
                  <h2 style={{ ...H2, marginTop: "16px" }}>Grown in the Ash.</h2>
                  <p style={{ ...BODY, marginTop: "24px" }}>Setiap kilogram Salak yang mem-backing token ini dipanen dari lereng gunung berapi aktif di Jawa. Kami bermitra langsung dengan lebih dari 200 petani lokal untuk mendapatkan grade ekspor premium.</p>
                </div>
              </div>

              <div style={{ width: "100vw", height: "100%", padding: "10vh 6vw", display: "flex", alignItems: "center", background: "rgba(184,115,51,0.05)" }}>
                <div style={{ maxWidth: "600px" }}>
                  <div style={EYEBROW}>Phase 2: The Vault</div>
                  <h2 style={{ ...H2, marginTop: "16px" }}>Physical Custody.</h2>
                  <p style={{ ...BODY, marginTop: "24px" }}>Hasil panen disimpan di gudang berteknologi tinggi kami. Sistem manajemen inventaris menggunakan IoT (Internet of Things) yang melaporkan tonase gudang langsung ke jaringan blockchain melalui Chainlink Oracle.</p>
                </div>
              </div>

              <div style={{ width: "100vw", height: "100%", padding: "10vh 6vw", display: "flex", alignItems: "center", justifyContent: "flex-end", background: "linear-gradient(90deg, rgba(184,115,51,0.05), #060605)" }}>
                <div style={{ maxWidth: "600px", textAlign: "right" }}>
                  <div style={EYEBROW}>Phase 3: The Token</div>
                  <h2 style={{ ...H2, marginTop: "16px" }}>Digital Liquidity.</h2>
                  <p style={{ ...BODY, marginTop: "24px" }}>Setelah gudang menverifikasi stok, Smart Contract secara otomatis mencetak (minting) token $SALAK. 1 kg = 1 Token. Transparan, terpercaya, dan bisa diperdagangkan seketika di seluruh dunia.</p>
                </div>
              </div>

            </div>
          </section>
        ) : hydrated && isMobile ? (
          <section style={{ display: "flex", flexDirection: "column", gap: "10vh", padding: "10vh 6vw" }}>
            <div>
              <div style={EYEBROW}>Phase 1: The Origin</div>
              <h2 style={{ ...H2, marginTop: "16px" }}>Grown in the Ash.</h2>
              <p style={{ ...BODY, marginTop: "16px" }}>Setiap kilogram Salak dipanen dari lereng gunung berapi aktif...</p>
            </div>
            <div>
              <div style={EYEBROW}>Phase 2: The Vault</div>
              <h2 style={{ ...H2, marginTop: "16px" }}>Physical Custody.</h2>
              <p style={{ ...BODY, marginTop: "16px" }}>Hasil panen disimpan di gudang berteknologi tinggi dan dilaporkan ke blockchain.</p>
            </div>
            <div>
              <div style={EYEBROW}>Phase 3: The Token</div>
              <h2 style={{ ...H2, marginTop: "16px" }}>Digital Liquidity.</h2>
              <p style={{ ...BODY, marginTop: "16px" }}>Smart Contract mencetak token $SALAK. 1 kg = 1 Token. Transparan dan instan.</p>
            </div>
          </section>
        ) : null}

        {/* 3. DUAL COLUMN TOKENOMICS (Using pure CSS sticky - NO GSAP PIN BUGS) */}
        {hydrated && (
          <section style={{ display: "flex", flexDirection: isMobile ? "column" : "row", position: "relative", borderTop: "1px solid rgba(242,237,228,0.05)" }}>
            
            {/* Sticky Left Column */}
            <div style={{ 
              width: isMobile ? "100%" : "40%", 
              padding: "10vh 6vw", 
              height: isMobile ? "auto" : "100vh", 
              position: isMobile ? "relative" : "sticky", 
              top: 0,
              display: "flex", flexDirection: "column", justifyContent: "center" 
            }}>
              <div style={EYEBROW}>The Utility</div>
              <h2 style={{ ...H2, marginTop: "16px" }}>Real-World Yield.</h2>
              <p style={{ ...BODY, marginTop: "24px" }}>$SALAK bukan sekadar medium spekulasi. Token ini memiliki arus kas bawaan yang berasal langsung dari margin ekspor komoditas salak kami ke pasar China dan Eropa.</p>
              
              <div style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
                 <button style={{ 
                   background: "#B87333", color: "#060605", padding: "16px 32px", fontFamily: "var(--font-syne)", 
                   fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", borderRadius: "2px", border: "none", cursor: "pointer"
                 }}>BUY $SALAK</button>
                 <button style={{ 
                   background: "transparent", color: "#B87333", border: "1px solid #B87333", padding: "16px 32px", fontFamily: "var(--font-syne)", 
                   fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", borderRadius: "2px", cursor: "pointer"
                 }}>WHITEPAPER</button>
              </div>
            </div>

            {/* Scrollable Right Column */}
            <div style={{ width: isMobile ? "100%" : "60%", padding: "10vh 6vw", background: "rgba(242,237,228,0.02)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
                
                <div style={{ borderBottom: "1px solid rgba(242,237,228,0.1)", paddingBottom: "40px" }}>
                  <div style={EYEBROW}>01 — Stabilisasi Harga</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>Price Floor Protection.</div>
                  <p style={{ ...BODY, marginTop: "16px" }}>Dana cadangan dari penjualan token dialokasikan untuk menjaga batas bawah harga (price floor) agar petani tidak pernah rugi saat panen raya.</p>
                </div>

                <div style={{ borderBottom: "1px solid rgba(242,237,228,0.1)", paddingBottom: "40px" }}>
                  <div style={EYEBROW}>02 — Ekspansi Kapasitas</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>15 Tons to 60 Tons.</div>
                  <p style={{ ...BODY, marginTop: "16px" }}>Likuiditas kripto memberdayakan gudang kami untuk menyerap hasil panen 4x lebih banyak dari sebelumnya. Mengeksekusi pesanan B2B tanpa kendala modal Fiat tradisional.</p>
                </div>

                <div style={{ borderBottom: "1px solid rgba(242,237,228,0.1)", paddingBottom: "40px" }}>
                  <div style={EYEBROW}>03 — Mekanisme Bakar (Burning)</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>Auto-Settlement On-Chain.</div>
                  <p style={{ ...BODY, marginTop: "16px" }}>Setiap kontainer salak yang diberangkatkan dan dilunasi pembeli luar negeri akan memicu protokol Buyback & Burn. Nilai token meningkat seiring dengan suksesnya bisnis ekspor kami.</p>
                </div>

                <div style={{ borderBottom: "1px solid rgba(242,237,228,0.1)", paddingBottom: "40px" }}>
                  <div style={EYEBROW}>04 — Real-Yield Distribution</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>Sustainable Dividends.</div>
                  <p style={{ ...BODY, marginTop: "16px" }}>Pemegang token yang men-stake salaknya tidak sekadar menunggu harga naik. Mereka mendapatkan passive income dari omset operasional gudang setiap bulannya.</p>
                </div>

              </div>
            </div>

          </section>
        )}

        {/* 4. TECHNICAL PROOF OF RESERVE */}
        {hydrated && (
          <section style={{ padding: "15vh 6vw", background: "#060605" }}>
             <div style={{ textAlign: "center", marginBottom: "80px" }}>
               <h2 style={H2}>Audited & Verified.</h2>
               <div style={{ ...BODY, maxWidth: "600px", margin: "16px auto 0" }}>Jaringan arsitektur canggih memastikan tidak ada satu token pun yang tercipta tanpa salak fisik sebagai jaminannya.</div>
             </div>

             <div style={{ 
               background: "#080806", border: "1px solid rgba(184,115,51,0.2)",
               borderRadius: "12px", padding: isMobile ? "32px 20px" : "80px 8vw",
               boxShadow: "inset 0 1px 0 rgba(242,237,228,0.05), 0 20px 40px rgba(0,0,0,0.5)",
             }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "40px" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={EYEBROW}>PHYSICAL WAREHOUSE</div>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "40px", color: "#F2EDE4", marginTop: "12px" }}>15.24 <span style={{fontSize: "14px", color:"#D4956A"}}>TONS</span></div>
                    <div style={{ ...BODY, fontSize: "12px", marginTop: "8px" }}>Live Sensor IoT Timbangan</div>
                  </div>
                  <div style={{ textAlign: "center", borderLeft: isMobile ? "none" : "1px solid rgba(242,237,228,0.05)", borderRight: isMobile ? "none" : "1px solid rgba(242,237,228,0.05)" }}>
                    <div style={EYEBROW}>CHAINLINK ORACLE</div>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "40px", color: "#F2EDE4", marginTop: "12px" }}>SYNCHRONIZED</div>
                    <div style={{ ...BODY, fontSize: "12px", marginTop: "8px" }}>Node Data Transmission</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={EYEBROW}>TOTAL $SALAK MINTED</div>
                    <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "40px", color: "#F2EDE4", marginTop: "12px" }}>15,240 <span style={{fontSize: "14px", color:"#D4956A"}}>TKN</span></div>
                    <div style={{ ...BODY, fontSize: "12px", marginTop: "8px" }}>Polygon Network Ledger</div>
                  </div>
                </div>
             </div>
          </section>
        )}

      </main>
      
      <Footer />
    </>
  );
}
