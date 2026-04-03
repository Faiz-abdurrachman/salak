"use client";

import { useState } from "react";

interface FullscreenMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuLinks = ["Token", "Marketplace", "Whitepaper", "Tentang Kami"];
const socials = ["X / Twitter", "Telegram", "Discord", "GitHub"];

export default function FullscreenMenu({ open, onClose }: FullscreenMenuProps) {
  const [backHovered, setBackHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 500,
        background: "#080806",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Top bar: Kembali button ─────────────────────────────────────────── */}
      <div
        style={{
          height: "56px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 4vw, 56px)",
          borderBottom: "1px solid rgba(242,237,228,0.05)",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: "0.22em",
          }}
        >
          <span style={{ color: "#F2EDE4" }}>DAULAT</span>
          <span style={{ color: "#B87333" }}> SALAK</span>
        </div>

        {/* Kembali / close button */}
        <button
          onClick={onClose}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          aria-label="Tutup menu"
          style={{
            background: "transparent",
            border: "none",
            cursor: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: backHovered ? "#B87333" : "rgba(242,237,228,0.42)",
            transition: "color 0.25s ease",
            padding: "8px 0",
          }}
        >
          {/* Arrow */}
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            style={{ transition: "transform 0.25s ease", transform: backHovered ? "translateX(-3px)" : "none" }}
          >
            <path
              d="M5 1L1 5L5 9M1 5H15"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Kembali
        </button>
      </div>

      {/* ── Main body: links left, socials right ────────────────────────────── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          minHeight: 0, // allow shrink
          overflow: "hidden",
        }}
      >
        {/* Left — nav links */}
        <div
          style={{
            flex: "0 0 60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(24px, 4vw, 56px) clamp(40px, 8vw, 120px)",
            overflow: "hidden",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            {menuLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="menu-link-wrap"
                style={{
                  position: "relative",
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  fontSize: "clamp(40px, 7vw, 88px)",
                  color: "rgba(242,237,228,0.1)",
                  lineHeight: 1.05,
                  cursor: "none",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                }}
              >
                {link}
                <span className="menu-link-inner">{link}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Right — socials + contact */}
        <div
          style={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(24px, 4vw, 56px) clamp(32px, 5vw, 72px)",
            borderLeft: "1px solid rgba(242,237,228,0.07)",
            overflow: "hidden",
          }}
        >
          {/* Socials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginBottom: "28px",
            }}
          >
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "rgba(242,237,228,0.38)",
                  cursor: "none",
                  transition: "color 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#B87333"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,237,228,0.38)"; }}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "11px",
              color: "rgba(242,237,228,0.38)",
              letterSpacing: "0.08em",
            }}
          >
            hello@daulatpangan.id
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
      <div
        style={{
          flexShrink: 0,
          borderTop: "1px solid rgba(242,237,228,0.07)",
          padding: "16px clamp(20px, 4vw, 56px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.22)",
            letterSpacing: "0.06em",
          }}
        >
          Daulat Salak · Komoditas. Terdesentralisasi.
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.22)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Daulat Salak
        </div>
      </div>
    </div>
  );
}
