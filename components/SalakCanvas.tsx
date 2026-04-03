"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 576;

export default function SalakCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameObj = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctxRef.current = ctx;

    function drawFrame(index: number) {
      const c = canvasRef.current;
      const cx = ctxRef.current;
      const frames = framesRef.current;
      if (!c || !cx) return;
      const img = frames[index];
      if (!img?.complete || !img.naturalWidth) return;

      const cw = c.width;
      const ch = c.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;
      cx.drawImage(img, sx, sy, sw, sh);
    }

    // Resize canvas to fill viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.round(frameObj.current.frame));
    };
    window.addEventListener("resize", resize);
    resize();

    // Preload all 576 frames
    const frames = new Array<HTMLImageElement>(TOTAL_FRAMES);
    framesRef.current = frames;
    let firstLoaded = false;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence/${String(i + 1).padStart(3, "0")}.webp`;
      img.onload = () => {
        if (!firstLoaded) {
          firstLoaded = true;
          drawFrame(0);
        }
      };
      frames[i] = img;
    }

    // Custom non-linear frame mapping:
    //   scroll  0%-30%  → frames   0-99   (slow salak reveal)
    //   scroll 30%-75%  → frames 100-399  (main journey)
    //   scroll 75%-100% → frames 400-575  (explosion / opening)
    function progressToFrame(p: number): number {
      if (p <= 0.30) {
        return Math.round((p / 0.30) * 99);
      } else if (p <= 0.75) {
        return Math.round(100 + ((p - 0.30) / 0.45) * 299);
      } else {
        return Math.round(400 + ((p - 0.75) / 0.25) * 175);
      }
    }

    const targetRef = { frame: 0 };

    // ScrollTrigger sets the target frame via custom mapping
    const st = ScrollTrigger.create({
      trigger: "#parallax-container",
      start: "top top",
      end: "bottom bottom",
      onUpdate(self) {
        targetRef.frame = progressToFrame(self.progress);
      },
    });

    // GSAP ticker lerps current frame towards target and redraws
    const ticker = gsap.ticker.add(() => {
      const cur = frameObj.current.frame;
      const tgt = targetRef.frame;
      if (Math.abs(tgt - cur) < 0.5) {
        frameObj.current.frame = tgt;
      } else {
        frameObj.current.frame += (tgt - cur) * 0.1;
      }
      drawFrame(Math.round(frameObj.current.frame));
    });

    return () => {
      window.removeEventListener("resize", resize);
      st.kill();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
