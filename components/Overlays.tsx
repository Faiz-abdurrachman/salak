"use client";

// Vignette (z-index 2) + Film grain (z-index 3)
// These are sticky, height 100vh, pointer-events none

const GRAIN_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>`;

export default function Overlays() {
  return (
    <>
      {/* Vignette */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,8,6,0.55) 65%, rgba(8,8,6,0.92) 100%)",
        }}
      />

      {/* Film grain */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          backgroundImage: `url("${GRAIN_SVG}")`,
          backgroundSize: "160px",
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
