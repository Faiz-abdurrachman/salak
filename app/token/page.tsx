"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import TokenHero from "./components/TokenHero";

import TokenGap from "./components/TokenGap";
import TokenTokenomics from "./components/TokenTokenomics";
import TokenProof from "./components/TokenProof";
import TokenHowItWorks from "./components/TokenHowItWorks";
import TokenBusinessProof from "./components/TokenBusinessProof";
import TokenCTA from "./components/TokenCTA";

const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const FullscreenMenu= dynamic(() => import("@/components/FullscreenMenu"),{ ssr: false });
const Cursor        = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Footer        = dynamic(() => import("@/components/Footer"),        { ssr: false });

export default function TokenPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <Navbar onMenuToggle={toggleMenu} menuOpen={menuOpen} />
      <FullscreenMenu open={menuOpen} onClose={toggleMenu} />

      <main>
        <TokenHero />
        <TokenGap />
        <TokenTokenomics />
        <TokenProof />
        <TokenHowItWorks />
        <TokenBusinessProof />
        <TokenCTA />
      </main>
      <Footer />
    </>
  );
}
