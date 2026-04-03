"use client";

import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface NavbarProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function Navbar({ onMenuToggle, menuOpen }: NavbarProps) {
  const [hamburgerHovered, setHamburgerHovered] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  // Lines are gold when hovered OR when menu is open
  const lineColor = hamburgerHovered || menuOpen ? "#B87333" : "#F2EDE4";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: isMobile ? "48px" : "56px",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(20px, 4vw, 56px)",
        background: "transparent",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: isMobile ? "11px" : "13px",
          letterSpacing: "0.22em",
          lineHeight: 1,
          textShadow: "0 2px 20px rgba(8,8,6,0.8)",
        }}
      >
        <span style={{ color: "#F2EDE4" }}>DAULAT</span>
        <span style={{ color: "#B87333" }}> SALAK</span>
      </div>

      {/* Hamburger */}
      <button
        onClick={onMenuToggle}
        onMouseEnter={() => setHamburgerHovered(true)}
        onMouseLeave={() => setHamburgerHovered(false)}
        aria-label="Toggle menu"
        style={{
          background: "transparent",
          cursor: "none",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "7px",
          zIndex: 110,
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: lineColor,
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.25s ease",
            transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: lineColor,
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.25s ease",
            transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
          }}
        />
      </button>
    </nav>
  );
}
