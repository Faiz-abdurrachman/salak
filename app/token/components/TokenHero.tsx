"use client";

import React from "react";
import Image from "next/image";

export default function TokenHero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#080806]"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      {/* BACKGROUND IMAGE AND OVERLAY */}
      <Image
        src="/background/layer-4-soil.jpg"
        alt="Soil Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,6,0.3) 0%, rgba(8,8,6,0.6) 50%, rgba(8,8,6,0.97) 100%)"
        }}
      />

      {/* CONTENT WRAPPER */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        width: '100%',
        maxWidth: '700px'
      }}>
        
        {/* 1. BADGE LIVE */}
        <div className="flex flex-row items-center justify-center gap-[8px] bg-[rgba(184,115,51,0.1)] border-[0.5px] border-[rgba(184,115,51,0.3)] px-[14px] py-[5px] rounded-[2px]">
          <div className="w-[5px] h-[5px] rounded-full bg-[#B87333] animate-pulse-gold" />
          <span className="font-jetbrains text-[10px] tracking-[0.22em] text-[#D4956A] uppercase">
            LIVE · POLYGON NETWORK · ERC-20
          </span>
        </div>

        {/* 2. HEADLINE */}
        <div className="mt-[24px]">
          <h1 className="font-cormorant font-semibold text-[clamp(56px,8vw,96px)] text-[#F2EDE4] leading-[1] not-italic">
            $SALAK
          </h1>
          <h2 className="font-cormorant font-light italic text-[clamp(32px,5vw,64px)] text-[#F2EDE4] leading-[1.1] mt-[8px]">
            Token Didukung Salak Nyata
          </h2>
        </div>

        {/* 3. SUBLINE */}
        <p className="mt-[20px] font-syne font-normal text-[15px] text-[rgba(242,237,228,0.55)] max-w-[440px] mx-auto text-center leading-[1.75]">
          1 kg salak ekspor grade = 1 $SALAK token.
          <br />
          Disimpan di gudang terverifikasi on-chain.
        </p>

        {/* 4. DUA TOMBOL CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          justifyContent: 'center',
          marginTop: '36px',
          position: 'relative',
          zIndex: 10
        }}>
          <button 
            onClick={() => { window.location.href = '/buy'; }}
            style={{
            background: '#B87333',
            color: '#080806',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '14px 32px',
            borderRadius: '2px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Beli $SALAK
          </button>
          <button style={{
            background: 'transparent',
            color: 'rgba(242,237,228,0.65)',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '14px 32px',
            borderRadius: '2px',
            border: '0.5px solid rgba(242,237,228,0.25)',
            cursor: 'pointer'
          }}>
            Lihat Bukti Gudang →
          </button>
        </div>

        {/* 5. SCROLL INDICATOR */}
        <div style={{ marginTop: 'auto', paddingTop: '48px' }} className="flex flex-col items-center gap-[8px]">
          <span className="font-jetbrains text-[9px] tracking-[0.25em] text-[rgba(242,237,228,0.25)] uppercase">
            SCROLL
          </span>
          <div className="w-[1px] h-[36px] bg-[rgba(184,115,51,0.35)] animate-bounce-y" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-y {
          animation: bounce-y 2s infinite ease-in-out;
        }
        @keyframes pulse-gold {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite ease-in-out;
        }
      `}} />
    </section>
  );
}
