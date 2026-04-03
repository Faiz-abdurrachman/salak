"use client";

interface FullscreenMenuProps {
  open: boolean;
}

const menuLinks = ["Token", "Marketplace", "Whitepaper", "Tentang Kami"];
const socials = ["X / Twitter", "Telegram", "Discord", "GitHub"];

export default function FullscreenMenu({ open }: FullscreenMenuProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "#080806",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Left — 60% */}
      <div
        style={{
          flex: "0 0 60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(40px, 6vw, 80px) clamp(40px, 8vw, 120px)",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
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
                fontSize: "clamp(48px, 9vw, 108px)",
                color: "rgba(242,237,228,0.12)",
                lineHeight: 1.05,
                cursor: "none",
                textDecoration: "none",
              }}
            >
              {link}
              <span className="menu-link-inner">{link}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Right — 40% */}
      <div
        style={{
          flex: "0 0 40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(40px, 6vw, 80px) clamp(40px, 6vw, 80px)",
          borderLeft: "1px solid rgba(242,237,228,0.07)",
        }}
      >
        {/* Socials */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "32px",
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
                color: "rgba(242,237,228,0.42)",
                cursor: "none",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#B87333";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(242,237,228,0.42)";
              }}
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
            color: "rgba(242,237,228,0.42)",
            letterSpacing: "0.08em",
            marginBottom: "24px",
          }}
        >
          hello@daulatpangan.id
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(242,237,228,0.07)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "10px",
              color: "rgba(242,237,228,0.28)",
            }}
          >
            © 2026 Daulat Salak
          </div>
        </div>
      </div>

      {/* Full width bottom copyright */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(242,237,228,0.07)",
          padding: "20px clamp(40px, 8vw, 120px)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.28)",
          }}
        >
          Daulat Salak · Komoditas. Terdesentralisasi.
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "10px",
            color: "rgba(242,237,228,0.28)",
          }}
        >
          © 2026 Daulat Salak
        </div>
      </div>
    </div>
  );
}
