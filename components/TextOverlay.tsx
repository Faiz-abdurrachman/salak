"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Zone scroll ranges as fractions of the 900vh container ──────────────────
const ZONE_RANGES = [
  { start: 0.00, end: 0.13 }, // Zone 1 — CENTER
  { start: 0.15, end: 0.30 }, // Zone 2 — CENTER (big number)
  { start: 0.32, end: 0.48 }, // Zone 3 — RIGHT
  { start: 0.50, end: 0.64 }, // Zone 4 — CENTER (question)
  { start: 0.66, end: 0.79 }, // Zone 5 — LEFT (reveal)
  { start: 0.82, end: 1.00 }, // Zone 6 — CENTER (CTA)
] as const;

// ─── Typography constants ─────────────────────────────────────────────────────
const TSH = "0 0 120px rgba(8,8,6,1), 0 0 60px rgba(8,8,6,0.95), 0 2px 20px rgba(8,8,6,0.9)";
const TSB = "0 0 120px rgba(8,8,6,1), 0 0 60px rgba(8,8,6,0.95), 0 2px 20px rgba(8,8,6,0.9)";

const H1: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 300,
  fontSize: "clamp(64px, 10vw, 140px)",
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  color: "#F2EDE4",
  textShadow: TSH,
  display: "block",
};

const H2: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 300,
  fontSize: "clamp(40px, 6.5vw, 96px)",
  lineHeight: 0.92,
  letterSpacing: "-0.025em",
  color: "#F2EDE4",
  textShadow: TSH,
  display: "block",
};

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)",
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#B87333",
  textShadow: TSB,
  display: "block",
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontWeight: 300,
  fontSize: "clamp(15px, 1.6vw, 18px)",
  lineHeight: 1.75,
  color: "rgba(242,237,228,0.42)",
  textShadow: TSB,
};

// ─── Zone container base style ────────────────────────────────────────────────
const ZONE_BASE: React.CSSProperties = {
  position: "sticky",
  top: 0,
  height: "100vh",
  marginTop: "-100vh",
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
  opacity: 0,
  willChange: "opacity",
};

// ─── Heading line — overflow:hidden wrapper ───────────────────────────────────
// Inner span.reveal-line starts at translateY(108%), GSAP animates to 0%
function Line({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "block",
        paddingBottom: "0.06em", // prevent descender clipping
        ...style,
      }}
    >
      <span
        className={`reveal-line${className ? " " + className : ""}`}
        style={{
          display: "block",
          transform: "translateY(108%)",
          willChange: "transform",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function TextOverlay() {
  const z1 = useRef<HTMLDivElement>(null);
  const z2 = useRef<HTMLDivElement>(null);
  const z3 = useRef<HTMLDivElement>(null);
  const z4 = useRef<HTMLDivElement>(null);
  const z5 = useRef<HTMLDivElement>(null);
  const z6 = useRef<HTMLDivElement>(null);
  const zoneRefs = [z1, z2, z3, z4, z5, z6];

  useEffect(() => {
    const container = document.getElementById("parallax-container");
    if (!container) return;

    const ch = container.offsetHeight;          // 900vh in px
    const maxScroll = ch - window.innerHeight;  // 800vh = actual scroll range

    // Clamp fraction to max scrollable pixel offset
    const toPx = (frac: number) => Math.min(frac * ch, maxScroll);

    // ── Set initial states for all animated elements ──────────────────────
    zoneRefs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      // body text / body-late start invisible
      el.querySelectorAll<HTMLElement>(".reveal-body, .reveal-body-late").forEach((e) => {
        gsap.set(e, { opacity: 0 });
      });
      // pills row starts invisible + offset
      el.querySelectorAll<HTMLElement>(".reveal-pills").forEach((e) => {
        gsap.set(e, { opacity: 0, y: 16 });
      });
    });

    // ── Reveal function per zone ──────────────────────────────────────────
    function revealZone(zoneEl: HTMLElement) {
      const lines  = zoneEl.querySelectorAll<HTMLElement>(".reveal-line");
      const bodies = zoneEl.querySelectorAll<HTMLElement>(".reveal-body");
      const lates  = zoneEl.querySelectorAll<HTMLElement>(".reveal-body-late");
      const pills  = zoneEl.querySelectorAll<HTMLElement>(".reveal-pills");

      const lineCount = lines.length;
      const bodyDelay = lineCount * 0.1 + 0.4;
      const pillDelay = lineCount * 0.1 + 0.6;
      const lateDelay = lineCount * 0.1 + 1.6;

      // Heading clip-path reveal — stagger 0.1s
      lines.forEach((line, i) => {
        gsap.to(line, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          overwrite: "auto",
        });
      });

      // Body fade-in
      if (bodies.length) {
        gsap.to(Array.from(bodies), {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: bodyDelay,
          overwrite: "auto",
        });
      }

      // Late body (Zone 4 — "Inilah yang sedang kami bangun.")
      if (lates.length) {
        gsap.to(Array.from(lates), {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: lateDelay,
          overwrite: "auto",
        });
      }

      // Pills — fade + slide
      if (pills.length) {
        gsap.to(Array.from(pills), {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: pillDelay,
          overwrite: "auto",
        });
      }
    }

    // ── Build ScrollTrigger per zone ──────────────────────────────────────
    const triggers = ZONE_RANGES.map((range, i) => {
      const el = zoneRefs[i].current;
      if (!el) return null;

      const isZone1 = i === 0;
      el.style.opacity = isZone1 ? "1" : "0";

      let revealed = false;

      // Zone 1 — reveal text after loading screen completes (~3.2s)
      if (isZone1) {
        const tid = setTimeout(() => revealZone(el), 3100);
        (el as HTMLElement & { _tid?: ReturnType<typeof setTimeout> })._tid = tid;
      }

      return ScrollTrigger.create({
        trigger: "#parallax-container",
        start: `top+=${toPx(range.start)} top`,
        end:   `top+=${toPx(range.end)}   top`,
        scrub: true,
        onUpdate(self) {
          const p = self.progress;
          let opacity: number;

          if (isZone1) {
            // Zone 1: full opacity until last 20%, then fades out
            opacity = p < 0.8 ? 1 : (1 - p) / 0.2;
          } else {
            // Zones 2–6: fade-in first 20%, hold, fade-out last 20%
            if      (p < 0.2) opacity = p / 0.2;
            else if (p > 0.8) opacity = (1 - p) / 0.2;
            else              opacity = 1;
          }

          el.style.opacity = String(Math.max(0, Math.min(1, opacity)));

          // Trigger reveal once when zone becomes visible
          if (!revealed && opacity > 0.3) {
            revealed = true;
            revealZone(el);
          }
        },
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
      zoneRefs.forEach((ref) => {
        const el = ref.current as (HTMLElement & { _tid?: ReturnType<typeof setTimeout> }) | null;
        if (el?._tid) clearTimeout(el._tid);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONE RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 1 — CENTER — "Ada buah yang mengubah segalanya"
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z1} style={{ ...ZONE_BASE, justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          {/* H1 headline */}
          <Line>
            <span style={H1}>Ada buah</span>
          </Line>
          <Line>
            <span style={{ ...H1, fontStyle: "italic", color: "#D4956A" }}>
              yang mengubah segalanya.
            </span>
          </Line>

          {/* Body */}
          <div className="reveal-body" style={{ marginTop: "32px" }}>
            <div style={BODY}>Tumbuh di Jawa. Diekspor ke dunia.</div>
            <div style={BODY}>Namun petaninya tidak pernah</div>
            <div style={BODY}>mendapat bagian yang adil.</div>
          </div>

          {/* Scroll hint */}
          <div
            className="reveal-body"
            style={{
              marginTop: "56px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "10px",
                color: "rgba(242,237,228,0.38)",
                letterSpacing: "0.14em",
                textShadow: TSB,
                animation: "pulseOpacity 2.4s ease infinite",
              }}
            >
              scroll
            </div>
            <div
              style={{
                width: "1px",
                height: "52px",
                background: "linear-gradient(to bottom, #B87333, transparent)",
                animation: "pulseOpacity 2.4s ease infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 2 — CENTER — "Rp 2,4 triliun" (dramatic number reveal)
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z2} style={{ ...ZONE_BASE, justifyContent: "center" }}>
        <div style={{ textAlign: "center", position: "relative" }}>
          {/* Giant decorative "Rp" — faint background text */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(120px, 18vw, 220px)",
              lineHeight: 0.8,
              color: "rgba(242,237,228,0.07)",
              letterSpacing: "-0.04em",
              userSelect: "none",
              pointerEvents: "none",
              textShadow: "none",
              marginBottom: "-0.12em",
            }}
          >
            Rp
          </div>

          {/* Main number */}
          <Line>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(52px, 7vw, 100px)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "#F2EDE4",
                textShadow: TSH,
                display: "block",
              }}
            >
              2,4 triliun
            </span>
          </Line>

          {/* Sub-label */}
          <Line style={{ marginTop: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#B87333",
                textShadow: TSB,
                display: "block",
              }}
            >
              NILAI EKSPOR SALAK INDONESIA / TAHUN
            </span>
          </Line>

          {/* Body */}
          <div className="reveal-body" style={{ marginTop: "20px" }}>
            <div style={BODY}>Tidak ada yang transparan.</div>
            <div style={BODY}>Tidak ada yang adil.</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 3 — RIGHT — "Petani menerima Rp 3.000 per kilo"
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z3} style={{ ...ZONE_BASE, justifyContent: "flex-end", paddingRight: "8vw" }}>
        <div style={{ textAlign: "right" }}>
          {/* Headline block 1 — farmer price */}
          <Line>
            <span style={H2}>Petani menerima</span>
          </Line>
          <Line>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              Rp 3.000 per kilo.
            </span>
          </Line>

          {/* Gold divider */}
          <div className="reveal-body" style={{ margin: "24px 0 24px auto", width: "60px", height: "1px", background: "#B87333", opacity: 0 }} />

          {/* Headline block 2 — export price */}
          <Line>
            <span
              style={{
                ...H2,
                fontSize: "clamp(28px, 4.5vw, 68px)",
                color: "#F2EDE4",
              }}
            >
              Yang sampai ke luar negeri:
            </span>
          </Line>
          <Line>
            <span
              style={{
                ...H2,
                fontStyle: "italic",
                color: "rgba(242,237,228,0.38)",
                fontSize: "clamp(28px, 4.5vw, 68px)",
              }}
            >
              Rp 45.000.
            </span>
          </Line>

          {/* Body */}
          <div className="reveal-body" style={{ marginTop: "20px" }}>
            <div style={BODY}>Lima belas kali lipat.</div>
            <div style={BODY}>Semua masuk ke tengkulak.</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 4 — CENTER — "Bagaimana jika?" (hanging question)
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z4} style={{ ...ZONE_BASE, justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Line>
            <span style={H2}>Bagaimana jika</span>
          </Line>
          <Line>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              petani bisa menetapkan
            </span>
          </Line>
          <Line>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              harganya sendiri?
            </span>
          </Line>

          {/* Late-reveal answer — appears ~1.6s after headings */}
          <div
            className="reveal-body-late"
            style={{
              marginTop: "40px",
              fontFamily: "var(--font-syne)",
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(242,237,228,0.38)",
              letterSpacing: "0.04em",
              textShadow: TSB,
            }}
          >
            Inilah yang sedang kami bangun.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 5 — LEFT — "Daulat Salak" (product reveal)
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z5} style={{ ...ZONE_BASE, justifyContent: "flex-start", paddingLeft: "8vw" }}>
        <div>
          {/* Eyebrow */}
          <Line style={{ marginBottom: "8px" }}>
            <span style={EYEBROW}>Daulat Salak</span>
          </Line>

          {/* Headlines */}
          <Line>
            <span style={H2}>1 kilogram salak.</span>
          </Line>
          <Line style={{ marginBottom: "0" }}>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              1 token. Di blockchain.
            </span>
          </Line>

          {/* Body */}
          <div className="reveal-body" style={{ marginTop: "24px" }}>
            <div style={BODY}>Setiap token di-back buah nyata</div>
            <div style={BODY}>di gudang terverifikasi.</div>
            <div style={{ ...BODY, marginTop: "8px" }}>Bisa diperdagangkan. Bisa di-redeem.</div>
            <div style={BODY}>Transparan untuk semua.</div>
          </div>

          {/* Pills */}
          <div
            className="reveal-pills"
            style={{ marginTop: "28px", display: "flex", gap: "10px", flexWrap: "wrap" }}
          >
            {["15 ton / minggu", "On-chain", "Live"].map((pill) => (
              <span
                key={pill}
                style={{
                  border: "1px solid rgba(184,115,51,0.45)",
                  color: "#B87333",
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "10px",
                  padding: "7px 16px",
                  borderRadius: "2px",
                  letterSpacing: "0.08em",
                  textShadow: TSB,
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 6 — CENTER — "Jadilah bagian" (CTA)
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={z6}
        style={{ ...ZONE_BASE, justifyContent: "center", pointerEvents: "none" }}
      >
        <div style={{ textAlign: "center", pointerEvents: "auto" }}>
          {/* Eyebrow */}
          <Line style={{ marginBottom: "8px" }}>
            <span style={EYEBROW}>Bergabung</span>
          </Line>

          {/* Headlines */}
          <Line>
            <span style={H2}>Jadilah bagian</span>
          </Line>
          <Line style={{ marginBottom: "32px" }}>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              dari perubahan ini.
            </span>
          </Line>

          {/* Body */}
          <div
            className="reveal-body"
            style={{
              maxWidth: "420px",
              margin: "0 auto 48px",
              textAlign: "center",
            }}
          >
            <div style={BODY}>Pertama kali dalam sejarah,</div>
            <div style={BODY}>komoditas salak Indonesia bisa dimiliki,</div>
            <div style={BODY}>diperdagangkan, dan memberi keadilan</div>
            <div style={BODY}>bagi yang menanamnya.</div>
          </div>

          {/* CTA buttons */}
          <div
            className="reveal-pills"
            style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center" }}
          >
            <MagneticButton />
            <button
              style={{
                background: "transparent",
                color: "rgba(242,237,228,0.5)",
                fontFamily: "var(--font-syne)",
                fontWeight: 500,
                fontSize: "13px",
                padding: "16px 20px",
                cursor: "none",
                transition: "color 0.3s ease",
                textShadow: TSB,
                border: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F2EDE4"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,237,228,0.5)"; }}
            >
              Pelajari Lebih Lanjut →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Magnetic primary CTA ─────────────────────────────────────────────────────
function MagneticButton() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.35;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
    btn.style.transition = "background 0.3s ease";
  };

  const onLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transition = "transform 0.4s ease, background 0.3s ease";
    btn.style.transform = "";
    setTimeout(() => {
      if (btn) btn.style.transition = "background 0.3s ease";
    }, 400);
  };

  return (
    <button
      ref={btnRef}
      data-magnetic
      className="btn-primary"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#D4956A"; }}
      style={{
        background: "#B87333",
        color: "#080806",
        fontFamily: "var(--font-syne)",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        padding: "16px 44px",
        borderRadius: "2px",
        cursor: "none",
        transition: "background 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      Masuk ke Ekosistem
    </button>
  );
}
