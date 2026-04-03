"use client";

interface NavbarProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function Navbar({ onMenuToggle, menuOpen }: NavbarProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "56px",
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
          fontSize: "13px",
          letterSpacing: "0.22em",
          lineHeight: 1,
          textShadow: "0 2px 20px rgba(8,8,6,0.8)",
        }}
      >
        <span style={{ color: "#F2EDE4" }}>DAULAT</span>
        <span style={{ color: "#B87333" }}> SALAK</span>
      </div>

      {/* Hamburger — always visible */}
      <button
        onClick={onMenuToggle}
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
            background: "#F2EDE4",
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
            transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: "#F2EDE4",
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
            transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
          }}
        />
      </button>
    </nav>
  );
}
