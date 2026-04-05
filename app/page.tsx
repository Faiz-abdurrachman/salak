"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const SalakCanvas   = dynamic(() => import("@/components/SalakCanvas"),   { ssr: false });
const TextOverlay   = dynamic(() => import("@/components/TextOverlay"),   { ssr: false });
const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const FullscreenMenu = dynamic(() => import("@/components/FullscreenMenu"), { ssr: false });
const Cursor        = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Footer        = dynamic(() => import("@/components/Footer"),        { ssr: false });

// Inline SVG grain (no external request)
const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const bp = useBreakpoint();
  const containerHeight = bp === "mobile" ? "700vh" : bp === "tablet" ? "800vh" : "1100vh";

  return (
    <>
      {/* ── Fixed UI layer (above everything) ────────────────────────────── */}
      <Cursor />
      <SmoothScroll />
      <LoadingScreen onComplete={() => {}} />
      <Navbar onMenuToggle={toggleMenu} menuOpen={menuOpen} />
      <FullscreenMenu open={menuOpen} onClose={toggleMenu} />

      {/* ── 1100vh parallax scroll container ─────────────────────────────── */}
      {/*
        Structure:
          #parallax-container  (900vh, position:relative)
            #canvas-wrapper    (position:sticky, top:0, 100vh)  ← z-index 1
              <canvas>
              vignette overlay                                   ← z-index 2
              film grain overlay                                 ← z-index 3
            zone-1             (position:sticky, top:0, 100vh,  ← z-index 5
            zone-2              marginTop:-100vh each)
            zone-3
            zone-4
            zone-5
            zone-6
      */}
      <div
        id="parallax-container"
        style={{ height: containerHeight, position: "relative", background: "#080806" }}
      >
        {/* Sticky canvas + overlays */}
        <div
          id="canvas-wrapper"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          {/* Frame-sequence canvas */}
          <SalakCanvas />

          {/* Vignette — radial dark edges */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,8,6,0.55) 65%, rgba(8,8,6,0.92) 100%)",
            }}
          />

          {/* Film grain — SVG fractal noise overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              pointerEvents: "none",
              backgroundImage: `url("${GRAIN_SVG}")`,
              backgroundSize: "160px",
              opacity: 0.4,
              mixBlendMode: "overlay",
            }}
          />
        </div>

        {/* Text zones — each sticky, stacked on canvas via marginTop:-100vh */}
        {/* Opacity for each zone is driven by GSAP ScrollTrigger in TextOverlay */}
        <TextOverlay />
      </div>

      <div style={{ textAlign: "center", padding: "10vh 0" }}>
        <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "11px", letterSpacing: "0.2em", color: "#B87333", marginBottom: "24px" }}>SIAP MENJELAJAH?</div>
        <Link href="/hub" style={{ 
          display: "inline-block", background: "#B87333", color: "#060605", padding: "16px 40px", 
          fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textDecoration: "none"
        }}>MASUK KE EKOSISTEM</Link>
      </div>

      {/* ── Footer — OUTSIDE container, plain document flow ──────────────── */}
      <Footer />
    </>
  );
}
