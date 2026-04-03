"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop (pointer: fine)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;
    let ringSize = 36;
    let targetRingSize = 36;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const onMouseEnterHoverable = () => {
      targetRingSize = 56;
      ring.style.borderColor = "#B87333";
    };
    const onMouseLeaveHoverable = () => {
      targetRingSize = 36;
      ring.style.borderColor = "rgba(184,115,51,0.5)";
    };

    const onMouseEnterBtn = () => {
      targetRingSize = 72;
      ring.style.borderColor = "#B87333";
    };

    const addHoverListeners = () => {
      document
        .querySelectorAll("a, button, [data-magnetic]")
        .forEach((el) => {
          const isBtn =
            el.tagName === "BUTTON" ||
            (el as HTMLElement).dataset.magnetic !== undefined;
          el.addEventListener(
            "mouseenter",
            isBtn ? onMouseEnterBtn : onMouseEnterHoverable
          );
          el.addEventListener("mouseleave", onMouseLeaveHoverable);
        });
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ringSize += (targetRingSize - ringSize) * 0.1;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;
      ring.style.marginLeft = `${-ringSize / 2}px`;
      ring.style.marginTop = `${-ringSize / 2}px`;

      rafId = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    addHoverListeners();

    // Re-add hover listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#B87333",
          pointerEvents: "none",
          zIndex: 9999,
          marginLeft: "-4px",
          marginTop: "-4px",
          mixBlendMode: "difference",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(184,115,51,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          marginLeft: "-18px",
          marginTop: "-18px",
          transition: "border-color 0.2s ease",
        }}
      />
    </>
  );
}
