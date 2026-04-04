"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

// ─── Zone scroll ranges — 4-point opacity envelope (fractions of container) ───
// start→peakStart: fade in   peakStart→peakEnd: hold at 1   peakEnd→end: fade out
const ZONE_RANGES = [
  { start: 0.00, peakStart: 0.03, peakEnd: 0.11, end: 0.15 }, // Zone 1
  { start: 0.16, peakStart: 0.20, peakEnd: 0.28, end: 0.33 }, // Zone 2
  { start: 0.34, peakStart: 0.38, peakEnd: 0.46, end: 0.51 }, // Zone 3
  { start: 0.52, peakStart: 0.56, peakEnd: 0.63, end: 0.68 }, // Zone 4
  { start: 0.69, peakStart: 0.73, peakEnd: 0.80, end: 0.85 }, // Zone 5
  { start: 0.86, peakStart: 0.89, peakEnd: 0.97, end: 1.00 }, // Zone 6
] as const;

// ─── Typography constants ─────────────────────────────────────────────────────
const TSH = "0 2px 10px rgba(8,8,6,0.7), 0 10px 40px rgba(8,8,6,0.5)";
const TSB = "0 2px 6px rgba(8,8,6,0.8), 0 4px 16px rgba(8,8,6,0.4)";

const H1: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 400,
  fontSize: "clamp(36px, 8vw, 140px)",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
  color: "#F2EDE4",
  textShadow: TSH,
  display: "block",
};

const H2: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 400,
  fontSize: "clamp(28px, 6vw, 96px)",
  lineHeight: 1.15,
  letterSpacing: "-0.025em",
  color: "#F2EDE4",
  textShadow: TSH,
  display: "block",
};

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#D4956A",
  textShadow: TSB,
  display: "block",
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontWeight: 500,
  fontSize: "clamp(14px, 1.8vw, 19px)",
  lineHeight: 1.6,
  color: "rgba(242,237,228,0.95)",
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
        clipPath: "inset(-20% 0 -35% 0)",
        display: "block",
        ...style,
      }}
    >
      <span
        className={`reveal-line${className ? " " + className : ""}`}
        style={{
          display: "block",
          transform: "translateY(135%)",
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
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

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

    const ch = container.offsetHeight;
    const maxScroll = ch - window.innerHeight;

    const toPx = (frac: number) => Math.min(frac * ch, maxScroll);

    zoneRefs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      el.querySelectorAll<HTMLElement>(".reveal-body, .reveal-body-late").forEach((e) => {
        gsap.set(e, { opacity: 0 });
      });
      el.querySelectorAll<HTMLElement>(".reveal-pills").forEach((e) => {
        gsap.set(e, { opacity: 0, y: 16 });
      });
    });

    function revealZone(zoneEl: HTMLElement) {
      const lines  = zoneEl.querySelectorAll<HTMLElement>(".reveal-line");
      const bodies = zoneEl.querySelectorAll<HTMLElement>(".reveal-body");
      const lates  = zoneEl.querySelectorAll<HTMLElement>(".reveal-body-late");
      const pills  = zoneEl.querySelectorAll<HTMLElement>(".reveal-pills");

      const lineCount = lines.length;
      const bodyDelay = lineCount * 0.1 + 0.4;
      const pillDelay = lineCount * 0.1 + 0.6;
      const lateDelay = lineCount * 0.1 + 1.6;

      lines.forEach((line, i) => {
        gsap.to(line, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          overwrite: "auto",
        });
      });

      if (bodies.length) {
        gsap.to(Array.from(bodies), {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: bodyDelay,
          overwrite: "auto",
        });
      }

      if (lates.length) {
        gsap.to(Array.from(lates), {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: lateDelay,
          overwrite: "auto",
        });
      }

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

    const triggers = ZONE_RANGES.map((range, i) => {
      const el = zoneRefs[i].current;
      if (!el) return null;

      const isZone1 = i === 0;
      el.style.opacity = isZone1 ? "1" : "0";

      let revealed = false;

      if (isZone1) {
        const tid = setTimeout(() => revealZone(el), 3100);
        (el as HTMLElement & { _tid?: ReturnType<typeof setTimeout> })._tid = tid;
      }

      const zoneSpan    = range.end - range.start;
      const fadeInFrac  = (range.peakStart - range.start) / zoneSpan;
      const holdEndFrac = (range.peakEnd   - range.start) / zoneSpan;

      return ScrollTrigger.create({
        trigger: "#parallax-container",
        start: `top+=${toPx(range.start)} top`,
        end:   `top+=${toPx(range.end)}   top`,
        scrub: true,
        onUpdate(self) {
          const p = self.progress;
          let opacity: number;

          if (isZone1) {
            if      (p < holdEndFrac) opacity = 1;
            else                      opacity = (1 - p) / (1 - holdEndFrac);
          } else {
            if      (p < fadeInFrac)  opacity = p / fadeInFrac;
            else if (p < holdEndFrac) opacity = 1;
            else                      opacity = (1 - p) / (1 - holdEndFrac);
          }

          el.style.opacity = String(Math.max(0, Math.min(1, opacity)));

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
      <div ref={z1} style={{ ...ZONE_BASE, justifyContent: "center", padding: "0 clamp(20px, 6vw, 80px)" }}>
        <div style={{ textAlign: "center" }}>
          <Line>
            <span style={H1}>Ada buah</span>
          </Line>
          <Line>
            <span style={{ ...H1, fontStyle: "italic", color: "#D4956A" }}>
              yang mengubah segalanya.
            </span>
          </Line>

          <div className="reveal-body" style={{ marginTop: "24px" }}>
            <div style={BODY}>Tumbuh di Jawa. Diekspor ke dunia.</div>
            <div style={BODY}>Namun petaninya tidak pernah</div>
            <div style={BODY}>mendapat bagian yang adil.</div>
          </div>

          <div
            className="reveal-body"
            style={{
              marginTop: isMobile ? "32px" : "56px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(242,237,228,0.85)",
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
          ZONE 2 — CENTER — "Rp 2,4 triliun"
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z2} style={{ ...ZONE_BASE, justifyContent: "center", padding: "0 clamp(20px, 6vw, 80px)" }}>
        <div style={{ textAlign: "center", position: "relative" }}>
          <div
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(80px, 18vw, 220px)",
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

          <Line>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(36px, 7vw, 100px)",
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

          <Line style={{ marginTop: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: isMobile ? "9px" : "11px",
                letterSpacing: "0.2em",
                color: "#B87333",
                textShadow: TSB,
                display: "block",
              }}
            >
              NILAI EKSPOR SALAK INDONESIA / TAHUN
            </span>
          </Line>

          <div className="reveal-body" style={{ marginTop: "20px" }}>
            <div style={BODY}>Tidak ada yang transparan.</div>
            <div style={BODY}>Tidak ada yang adil.</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 3 — RIGHT (desktop) / CENTER (mobile) — "Petani menerima Rp 3.000 per kilo"
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={z3}
        style={{
          ...ZONE_BASE,
          justifyContent: isMobile ? "center" : "flex-end",
          padding: isMobile ? "0 clamp(20px, 6vw, 80px)" : "0 8vw",
        }}
      >
        <div style={{ textAlign: isMobile ? "center" : "right" }}>
          <Line>
            <span style={H2}>Petani menerima</span>
          </Line>
          <Line>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              Rp 3.000 per kilo.
            </span>
          </Line>

          <div
            className="reveal-body"
            style={{
              margin: isMobile ? "24px auto" : "24px 0 24px auto",
              width: "60px",
              height: "1px",
              background: "#B87333",
              opacity: 0,
            }}
          />

          <Line>
            <span
              style={{
                ...H2,
                fontSize: "clamp(20px, 4.5vw, 68px)",
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
                color: "rgba(242,237,228,0.85)",
                fontSize: "clamp(20px, 4.5vw, 68px)",
              }}
            >
              Rp 45.000.
            </span>
          </Line>

          <div className="reveal-body" style={{ marginTop: "20px" }}>
            <div style={BODY}>Lima belas kali lipat.</div>
            <div style={BODY}>Semua masuk ke tengkulak.</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 4 — CENTER — "Bagaimana jika?"
      ══════════════════════════════════════════════════════════════════════ */}
      <div ref={z4} style={{ ...ZONE_BASE, justifyContent: "center", padding: "0 clamp(20px, 6vw, 80px)" }}>
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

          <div
            className="reveal-body-late"
            style={{
              marginTop: "40px",
              fontFamily: "var(--font-syne)",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(242,237,228,0.85)",
              letterSpacing: "0.04em",
              textShadow: TSB,
            }}
          >
            Inilah yang sedang kami bangun.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ZONE 5 — LEFT (desktop) / CENTER (mobile) — "Daulat Salak"
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={z5}
        style={{
          ...ZONE_BASE,
          justifyContent: isMobile ? "center" : "flex-start",
          padding: isMobile ? "0 clamp(20px, 6vw, 80px)" : "0 8vw",
        }}
      >
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <Line style={{ marginBottom: "8px" }}>
            <span style={EYEBROW}>Daulat Salak</span>
          </Line>

          <Line>
            <span style={H2}>1 kilogram salak.</span>
          </Line>
          <Line style={{ marginBottom: "0" }}>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              1 token. Di blockchain.
            </span>
          </Line>

          <div className="reveal-body" style={{ marginTop: "24px" }}>
            <div style={BODY}>Setiap token di-back buah nyata</div>
            <div style={BODY}>di gudang terverifikasi.</div>
            <div style={{ ...BODY, marginTop: "8px" }}>Bisa diperdagangkan. Bisa di-redeem.</div>
            <div style={BODY}>Transparan untuk semua.</div>
          </div>

          <div
            className="reveal-pills"
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
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
        style={{ ...ZONE_BASE, justifyContent: "center", padding: "0 clamp(20px, 6vw, 80px)", pointerEvents: "none" }}
      >
        <div style={{ textAlign: "center", pointerEvents: "auto" }}>
          <Line style={{ marginBottom: "8px" }}>
            <span style={EYEBROW}>Bergabung</span>
          </Line>

          <Line>
            <span style={H2}>Jadilah bagian</span>
          </Line>
          <Line style={{ marginBottom: "32px" }}>
            <span style={{ ...H2, fontStyle: "italic", color: "#D4956A" }}>
              dari perubahan ini.
            </span>
          </Line>

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

          <div
            className="reveal-pills"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "12px" : "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MagneticButton isMobile={isMobile} />
            <button
              style={{
                background: "transparent",
                color: "rgba(242,237,228,0.85)",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                fontSize: "clamp(13px, 1.3vw, 14px)",
                padding: "16px 20px",
                cursor: "none",
                transition: "color 0.3s ease",
                textShadow: TSB,
                border: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,237,228,0.85)"; }}
              onClick={() => { window.location.href = '/token#tokenomics'; }}
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
function MagneticButton({ isMobile }: { isMobile: boolean }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMobile) return;
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
        cursor: isMobile ? "auto" : "none",
        transition: "background 0.3s ease",
        position: "relative",
        overflow: "hidden",
        width: isMobile ? "100%" : "auto",
      }}
    >
      Masuk ke Ekosistem
    </button>
  );
}
