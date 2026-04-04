"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 576;

// Non-linear frame mapping:
//   scroll  0%–30%  → frames   0–99   (slow reveal)
//   scroll 30%–75%  → frames 100–399  (main journey)
//   scroll 75%–100% → frames 400–575  (opening)
function progressToFrame(p: number): number {
  if (p <= 0.30) return Math.round((p / 0.30) * 99);
  if (p <= 0.75) return Math.round(100 + ((p - 0.30) / 0.45) * 299);
  return Math.round(400 + ((p - 0.75) / 0.25) * 175);
}

export default function SalakCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const ctxRef    = useRef<CanvasRenderingContext2D | null>(null);
  const curFrame  = useRef(0);   // current (lerped) frame
  const tgtFrame  = useRef(0);   // target frame from scroll

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctxRef.current = ctx;

    // ── Draw a single frame (cover-fit) ──────────────────────────────────
    function drawFrame(index: number) {
      const c  = canvasRef.current;
      const cx = ctxRef.current;
      const frames = framesRef.current;
      if (!c || !cx) return;
      const img = frames[Math.max(0, Math.min(TOTAL_FRAMES - 1, index))];
      if (!img?.complete || !img.naturalWidth) return;

      const cw = c.width, ch = c.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale, sh = ih * scale;
      const sx = (cw - sw) / 2, sy = (ch - sh) / 2;
      cx.drawImage(img, sx, sy, sw, sh);
    }

    // ── Resize: recalculate canvas dimensions and redraw ─────────────────
    function resize() {
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.round(curFrame.current));
    }
    resize();

    // ── Preload all 576 frames ────────────────────────────────────────────
    const frames = new Array<HTMLImageElement>(TOTAL_FRAMES);
    framesRef.current = frames;
    let firstLoaded = false;

    const handleLoad = () => {
      if (!firstLoaded) {
        firstLoaded = true;
        drawFrame(Math.round(curFrame.current));
        ScrollTrigger.refresh();
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence/${String(i + 1).padStart(3, "0")}.webp`;
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
      }
      frames[i] = img;
    }

    // ── ScrollTrigger: map scroll progress → target frame ────────────────
    const st = ScrollTrigger.create({
      trigger: "#parallax-container",
      start: "top top",
      end: "bottom bottom",
      onUpdate(self) {
        tgtFrame.current = progressToFrame(self.progress);
      },
    });

    // ── GSAP ticker: lerp curFrame → tgtFrame and redraw ─────────────────
    // Adaptive lerp speed: slower on mobile for smoother feel on low-end devices
    const ticker = gsap.ticker.add(() => {
      const isMobile = window.innerWidth < 640;
      const speed = isMobile ? 0.05 : 0.07;
      const cur = curFrame.current;
      const tgt = tgtFrame.current;
      if (Math.abs(tgt - cur) < 0.5) {
        curFrame.current = tgt;
      } else {
        curFrame.current += (tgt - cur) * speed;
      }
      drawFrame(Math.round(curFrame.current));
    });

    // ── Resize + orientationchange listeners ─────────────────────────────
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 50);
    };
    const onOrientationChange = () => {
      setTimeout(() => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(Math.round(curFrame.current));
      }, 100);
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      st.kill();
      gsap.ticker.remove(ticker);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        display: "block",
      }}
    />
  );
}
