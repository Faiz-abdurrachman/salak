"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";

const ecosystemLinks = ["Token $SALAK", "Marketplace", "DeFi Lending", "Whitepaper"];
const companyLinks = ["Tentang Kami", "Tim", "Blog", "Karir"];
const communityLinks = ["X / Twitter", "Telegram", "Discord", "GitHub"];

const columnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const columnTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)",
  fontSize: "10px",
  color: "#B87333",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  marginBottom: "6px",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontWeight: 400,
  fontSize: "13px",
  color: "rgba(242,237,228,0.42)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

export default function Footer() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  return (
    <footer
      style={{
        background: "#080806",
        borderTop: "1px solid rgba(242,237,228,0.07)",
        padding:
          "clamp(60px,8vw,100px) clamp(24px,6vw,80px) 48px",
      }}
    >
      {/* Top section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: isMobile ? "32px" : "48px",
          marginBottom: "60px",
        }}
      >
        {/* Brand column */}
        <div style={{ flex: "0 0 260px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.22em",
              marginBottom: "14px",
            }}
          >
            <span style={{ color: "#F2EDE4" }}>DAULAT</span>
            <span style={{ color: "#B87333" }}> SALAK</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 300,
              fontSize: "13px",
              color: "rgba(242,237,228,0.42)",
              lineHeight: 1.7,
            }}
          >
            <div>Komoditas. Terdesentralisasi.</div>
            <div>Untuk petani Indonesia.</div>
          </div>
        </div>

        {/* Links section */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "32px" : "60px",
            flexWrap: "wrap",
          }}
        >
          {/* Ekosistem */}
          <div style={columnStyle}>
            <div style={columnTitleStyle}>Ekosistem</div>
            {ecosystemLinks.map((l) => (
              <a
                key={l}
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(242,237,228,0.42)";
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Perusahaan */}
          <div style={columnStyle}>
            <div style={columnTitleStyle}>Perusahaan</div>
            {companyLinks.map((l) => (
              <a
                key={l}
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(242,237,228,0.42)";
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Komunitas */}
          <div style={columnStyle}>
            <div style={columnTitleStyle}>Komunitas</div>
            {communityLinks.map((l) => (
              <a
                key={l}
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(242,237,228,0.42)";
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(242,237,228,0.07)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.28)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Daulat Salak. Built on blockchain.
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.28)",
            letterSpacing: "0.06em",
          }}
        >
          Privacy Policy · Terms of Service
        </div>
      </div>
    </footer>
  );
}
