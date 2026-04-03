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

    // Drive frame index from scroll via GSAP
    // trigger = #parallax-container (the 900vh outer div in page.tsx)
    // scrub 0.5 = smooth catch-up
    const anim = gsap.to(frameObj.current, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: () => drawFrame(Math.round(frameObj.current.frame)),
    });

    return () => {
      window.removeEventListener("resize", resize);
      anim.scrollTrigger?.kill();
      anim.kill();
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
