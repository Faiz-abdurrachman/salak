"use client";

import React from "react";

export default function TokenGap() {
  return (
    <section style={{
      background: '#080806',
      padding: '140px 40px',
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        {/* 1. EYEBROW */}
        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color: '#B87333',
          marginBottom: '48px',
          textAlign: 'left'
        }}>
          MENGAPA INI PENTING
        </div>

        {/* 2. GRID DUA KOLOM */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'flex-start'
        }}>
          {/* KOLOM KIRI */}
          <div style={{
            borderLeft: '1px solid rgba(220,80,50,0.25)',
            paddingLeft: '28px'
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(220,100,80,0.6)',
              marginBottom: '8px'
            }}>HARGA PETANI</div>
            
            <div>
              <span style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(52px, 7vw, 80px)',
                color: 'rgba(242,237,228,0.45)',
                lineHeight: 1
              }}>Rp 3.000</span>
              <span style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '11px',
                color: 'rgba(242,237,228,0.3)',
                marginLeft: '4px',
                verticalAlign: 'middle'
              }}>/kg</span>
            </div>

            <div style={{ height: '24px' }} />

            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.25)',
              letterSpacing: '0.1em'
            }}>↓  4 perantara</div>

            <div style={{ height: '24px' }} />

            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(220,100,80,0.8)',
              marginBottom: '8px'
            }}>HARGA EKSPOR</div>

            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(52px, 7vw, 80px)',
              color: 'rgba(242,237,228,0.9)',
              lineHeight: 1
            }}>Rp 45.000</div>

            <div style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '13px',
              color: 'rgba(242,237,228,0.4)',
              marginTop: '12px'
            }}>15× lipat. Semua ke tengkulak.</div>
          </div>

          {/* KOLOM KANAN */}
          <div style={{
            borderLeft: '1px solid rgba(184,115,51,0.3)',
            paddingLeft: '28px'
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#B87333',
              marginBottom: '16px'
            }}>DENGAN $SALAK</div>

            {/* Baris 1 */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'rgba(184,115,51,0.12)',
                border: '0.5px solid rgba(184,115,51,0.3)',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: '#B87333'
              }}>$</div>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '13px',
                color: 'rgba(242,237,228,0.6)',
                marginLeft: '12px'
              }}>Petani listing token</div>
            </div>

            {/* Baris 2 */}
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(184,115,51,0.5)',
              letterSpacing: '0.08em',
              marginTop: '16px'
            }}>→  Smart contract escrow</div>

            {/* Baris 3 */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'rgba(184,115,51,0.12)',
                border: '0.5px solid rgba(184,115,51,0.3)',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: '#B87333'
              }}>✓</div>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '13px',
                color: 'rgba(242,237,228,0.6)',
                marginLeft: '12px'
              }}>Pembeli di mana saja</div>
            </div>

            {/* Sub kanan bawah */}
            <div style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '13px',
              fontStyle: 'italic',
              color: '#D4956A',
              marginTop: '24px'
            }}>Harga adil. Transparan. On-chain.</div>
          </div>
        </div>

        {/* 3. QUOTE FULL WIDTH */}
        <div style={{
          marginTop: '80px',
          paddingTop: '48px',
          borderTop: '0.5px solid rgba(184,115,51,0.15)',
          textAlign: 'center',
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 3vw, 34px)',
          color: 'rgba(242,237,228,0.5)'
        }}>
          &ldquo;Lima belas kali lipat. Semua masuk ke tengkulak.&rdquo;
        </div>
      </div>
    </section>
  );
}
