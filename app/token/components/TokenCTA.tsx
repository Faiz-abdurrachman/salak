"use client";

import React from "react";

export default function TokenCTA() {
  return (
    <section style={{
      background: 'rgba(184,115,51,0.04)',
      borderTop: '0.5px solid rgba(184,115,51,0.1)',
      padding: '140px 40px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        
        {/* EYEBROW */}
        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color: '#B87333',
          marginBottom: '20px'
        }}>
          BERGABUNG SEKARANG
        </div>

        {/* HEADING */}
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(44px, 7vw, 80px)',
          lineHeight: 1.05,
          margin: 0
        }}>
          <div style={{ fontStyle: 'italic', fontWeight: 300, color: '#F2EDE4' }}>Jadilah bagian</div>
          <div style={{ fontStyle: 'normal', fontWeight: 600, color: '#B87333' }}>pertama.</div>
        </h2>

        {/* BODY */}
        <div style={{
          marginTop: '24px',
          fontFamily: 'var(--font-syne)',
          fontSize: '15px',
          color: 'rgba(242,237,228,0.45)',
          maxWidth: '440px',
          margin: '24px auto 0',
          lineHeight: 1.75
        }}>
          Pertama kali dalam sejarah, komoditas salak Indonesia bisa dimiliki, diperdagangkan, dan memberi keadilan bagi yang menanamnya.
        </div>

        {/* SOCIAL PROOF BAR */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0',
          padding: '28px 0',
          border: '0.5px solid rgba(184,115,51,0.12)',
          borderRadius: '4px',
          background: 'rgba(184,115,51,0.04)',
          maxWidth: '520px',
          margin: '48px auto 0',
          flexWrap: 'nowrap'
        }}>
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: '1', padding: '0 24px', borderRight: '0.5px solid rgba(184,115,51,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#D4956A', lineHeight: 1 }}>[TBD]</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)', textAlign: 'center', marginTop: '4px' }}>TOKEN TERSIRKULASI</div>
          </div>
          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: '1', padding: '0 24px', borderRight: '0.5px solid rgba(184,115,51,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#D4956A', lineHeight: 1 }}>[TBD]</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)', textAlign: 'center', marginTop: '4px' }}>HOLDER AKTIF</div>
          </div>
          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: '1', padding: '0 24px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#D4956A', lineHeight: 1 }}>15 ton/mg</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)', textAlign: 'center', marginTop: '4px' }}>EKSPOR AKTIF</div>
          </div>
        </div>

        {/* DUA TOMBOL */}
        <div style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => { window.location.href = '/buy'; }}
            style={{
            background: '#B87333',
            color: '#080806',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            padding: '16px 40px',
            borderRadius: '2px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Beli $SALAK Sekarang
          </button>
          <button style={{
            background: 'transparent',
            border: '0.5px solid rgba(242,237,228,0.2)',
            color: 'rgba(242,237,228,0.5)',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            padding: '16px 40px',
            borderRadius: '2px',
            cursor: 'pointer'
          }}>
            Baca Whitepaper ↗
          </button>
        </div>

        {/* FOOTER MINI */}
        <div style={{
          marginTop: '100px',
          paddingTop: '32px',
          borderTop: '0.5px solid rgba(242,237,228,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
             fontFamily: 'var(--font-jetbrains)',
             fontSize: '10px',
             color: 'rgba(242,237,228,0.2)'
          }}>
            &copy; 2025 Daulat Salak &middot; $PetaniRakyat-DS3
          </div>
          
          <div style={{
             display: 'flex',
             flexDirection: 'row',
             gap: '20px',
             fontFamily: 'var(--font-jetbrains)',
             fontSize: '10px',
             color: 'rgba(242,237,228,0.25)'
          }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Whitepaper</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Telegram</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter/X</a>
          </div>
        </div>

      </div>
    </section>
  );
}
