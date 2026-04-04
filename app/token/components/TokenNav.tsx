"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TokenNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-[100] transition-all duration-400 ease-out flex flex-row justify-between items-center px-6 lg:px-10 h-[64px]"
      style={{
        background: scrolled ? "rgba(8,8,6,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Brand / Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-8 h-8">
          <Image
            src="/logo-transparan.png"
            alt="Daulat Salak Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="font-jetbrains font-bold text-[12px] uppercase tracking-[0.2em] text-[#F2EDE4] mt-0.5">
          DAULAT SALAK
        </div>
      </Link>

      {/* Button */}
      <button className="font-jetbrains text-[11px] uppercase tracking-[0.15em] bg-[#B87333] text-[#080806] px-6 py-2.5 rounded-sm hover:bg-[#D4956A] transition-colors duration-300">
        Beli $SALAK
      </button>
    </nav>
  );
}
