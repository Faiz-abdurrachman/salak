"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const FullscreenMenu= dynamic(() => import("@/components/FullscreenMenu"),{ ssr: false });
const Cursor        = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Footer        = dynamic(() => import("@/components/Footer"),        { ssr: false });

const H1: React.CSSProperties = { fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(64px, 12vw, 180px)", lineHeight: 0.8, letterSpacing: "-0.04em", color: "#F2EDE4" };
const H2: React.CSSProperties = { fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#F2EDE4" };
const EYEBROW: React.CSSProperties = { fontFamily: "var(--font-jetbrains)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B87333" };
const BODY: React.CSSProperties = { fontFamily: "var(--font-syne)", fontWeight: 300, fontSize: "clamp(15px, 1.6vw, 18px)", lineHeight: 1.8, color: "rgba(242,237,228,0.5)" };

const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>`;

export default function SecondaryHomepage() {
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

      <main style={{ position: "relative", zIndex: 5, background: "#060605", minHeight: "100vh" }}>
        
        {/* Cinematic Background */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "160px", opacity: 0.6, mixBlendMode: "overlay",
        }} />

        {/* Hero Section */}
        <section style={{ position: "relative", padding: "20vh 6vw 10vh", zIndex: 1, minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={EYEBROW}>THE ECOSYSTEM</div>
          <h1 style={{ ...H1, marginTop: "24px" }}>
            RWA Powered<br />By <span style={{ color: "transparent", WebkitTextStroke: "2px #B87333", fontStyle: "italic" }}>Nature.</span>
          </h1>
          <p style={{ ...BODY, marginTop: "40px", maxWidth: "600px", fontSize: "18px" }}>
            Selamat datang di gerbang utama Daulat Salak. Kami menghubungkan hasil bumi vulkanik Indonesia langsung dengan pasar likuiditas global melalui teknologi blockchain.
          </p>
        </section>

        {/* About Us (Full Width Story) */}
        <section style={{ position: "relative", padding: "15vh 6vw", zIndex: 1, borderTop: "1px solid rgba(242,237,228,0.05)", background: "linear-gradient(180deg, #060605, rgba(184,115,51,0.03))" }}>
           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10vw" }}>
             <div>
               <div style={EYEBROW}>ABOUT US</div>
               <h2 style={{ ...H2, marginTop: "24px" }}>Bukan Sekadar Tim Web3 Biasa.</h2>
             </div>
             <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
               <p style={BODY}>
                 Kami bermula dari dunia nyata—seorang pengusaha eksportir salak yang mensuplai hingga 15 Ton salak setiap bulannya ke luar negeri. Alih-alih membuat token kripto kosong, kami menetapkan nilai $SALAK secara 1:1 dengan komoditas kami di gudang.
               </p>
               <p style={{ ...BODY, marginTop: "24px" }}>
                 Visi kami sederhana: Mensejahterakan petani lokal di kaki Gunung Merapi dengan memotong perantara (tengkulak) menggunakan efisiensi smart contract, sekaligus memberikan real-yield (dividen) yang nyata bagi holder token kami dari profit margin ekspor.
               </p>
             </div>
           </div>
        </section>

        {/* Features / Mission Bento */}
        <section style={{ position: "relative", padding: "10vh 6vw 20vh", zIndex: 1 }}>
           <div style={{ textAlign: "center", marginBottom: "8vh" }}>
             <div style={EYEBROW}>OUR CORE PILLARS</div>
             <h2 style={{ ...H2, marginTop: "16px", fontSize: "clamp(36px, 4vw, 64px)" }}>Why Choose Daulat Salak?</h2>
           </div>
           
           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "24px" }}>
             <div style={{ background: "rgba(242,237,228,0.02)", padding: "40px", border: "1px solid rgba(242,237,228,0.05)", borderRadius: "4px" }}>
               <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "40px", color: "#F2EDE4", lineHeight: 1 }}>Volcanic<br/>Grade.</h3>
               <p style={{ ...BODY, fontSize: "14px", marginTop: "24px" }}>Setiap stok salak kami ditanam secara langsung dari tanah vulkanik pegunungan. Menghasilkan rasa, tekstur, dan durabilitas tingkat ekspor.</p>
             </div>
             <div style={{ background: "rgba(184,115,51,0.03)", padding: "40px", border: "1px solid rgba(184,115,51,0.15)", borderRadius: "4px" }}>
               <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "40px", color: "#B87333", lineHeight: 1 }}>Real-Yield<br/>Dividends.</h3>
               <p style={{ ...BODY, fontSize: "14px", marginTop: "24px", color: "rgba(242,237,228,0.6)" }}>Kontrak ekspor kami bersifat organik dan stabil. Keuntungan dari B2B langsung dibagikan menggunakan automated stablecoin ke para staker $SALAK.</p>
             </div>
             <div style={{ background: "rgba(242,237,228,0.02)", padding: "40px", border: "1px solid rgba(242,237,228,0.05)", borderRadius: "4px" }}>
               <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "40px", color: "#F2EDE4", lineHeight: 1 }}>Oracle<br/>Verified.</h3>
               <p style={{ ...BODY, fontSize: "14px", marginTop: "24px" }}>Integrasi timbangan IoT otomatis tersambung ke node Chainlink kami. Tidak pernah ada token ekstra yang dicetak tanpa backup fisik harian di gudang.</p>
             </div>
           </div>
        </section>

        {/* Explores / Next Steps */}
        <section style={{ position: "relative", padding: "10vh 6vw 15vh", zIndex: 1, borderTop: "1px solid rgba(242,237,228,0.05)" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            
            <a href="/product" style={{ textDecoration: "none" }}>
              <div style={{ 
                background: "rgba(242,237,228,0.03)", border: "1px solid rgba(184,115,51,0.2)", padding: "60px 40px",
                transition: "all 0.4s ease", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(184,115,51,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(242,237,228,0.03)"; }}>
                <div>
                  <div style={EYEBROW}>THE PROTOCOL</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>
                    Understanding<br/>Our Tokenomics.
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B87333", marginTop: "40px", display: "flex", alignItems: "center", gap: "8px" }}>
                  Learn More <span>→</span>
                </div>
              </div>
            </a>

            <a href="/marketplace" style={{ textDecoration: "none" }}>
              <div style={{ 
                background: "rgba(242,237,228,0.03)", border: "1px solid rgba(184,115,51,0.2)", padding: "60px 40px",
                transition: "all 0.4s ease", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(184,115,51,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(242,237,228,0.03)"; }}>
                <div>
                  <div style={EYEBROW}>THE MARKETPLACE</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 56px)", color: "#F2EDE4", marginTop: "16px", lineHeight: 1 }}>
                    Trade Physical<br/>Salak On-Chain.
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B87333", marginTop: "40px", display: "flex", alignItems: "center", gap: "8px" }}>
                  Enter Terminal <span>→</span>
                </div>
              </div>
            </a>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
