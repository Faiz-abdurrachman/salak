"use client";

import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("daulat-loaded")) {
      setVisible(false);
      onComplete();
      return;
    }
    
    sessionStorage.setItem("daulat-loaded", "true");
    const TOTAL_FRAMES = 576;
    const DURATION = 3200;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      // Ease out expo
      const eased = rawProgress === 1 ? 1 : 1 - Math.pow(2, -10 * rawProgress);
      const pct = Math.round(eased * 100);
      setProgress(pct);

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.opacity = "0";
            containerRef.current.style.visibility = "hidden";
          }
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 1000);
        }, 200);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "#080806",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 1s ease, visibility 1s ease",
        opacity: 1,
        visibility: "visible",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "32px",
          letterSpacing: "0.25em",
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        <span style={{ color: "#F2EDE4" }}>DAULAT</span>
        <span style={{ color: "#B87333" }}> SALAK</span>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "11px",
          color: "rgba(242,237,228,0.42)",
          letterSpacing: "0.12em",
          marginBottom: "44px",
        }}
      >
        Komoditas. Terdesentralisasi.
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "280px",
          height: "1px",
          background: "rgba(242,237,228,0.1)",
          position: "relative",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            right: `${100 - progress}%`,
            background: "#B87333",
            boxShadow: "0 0 12px rgba(184,115,51,0.8), 0 0 4px rgba(184,115,51,1)",
            transition: "right 0.05s linear",
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "11px",
          color: "#B87333",
          letterSpacing: "0.08em",
          tabularNums: "true",
        } as React.CSSProperties}
      >
        {String(progress).padStart(3, "0")}%
      </div>
    </div>
  );
}
