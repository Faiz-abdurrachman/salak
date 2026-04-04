"use client";

import React from "react";

export default function TokenTokenomics() {
  return (
    <section style={{
      background: '#080806',
      padding: '120px 40px',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* 1. SECTION HEADER */}
        <div>
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#B87333',
            marginBottom: '16px'
          }}>
            TOKENOMICS
          </div>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: '#F2EDE4',
            lineHeight: 1.1,
            margin: 0
          }}>
            <div style={{ fontStyle: 'normal' }}>Didukung Aset Nyata,</div>
            <div style={{ fontStyle: 'italic' }}>Bukan Spekulasi.</div>
          </h2>
          <div style={{
            marginTop: '16px',
            fontFamily: 'var(--font-syne)',
            fontSize: '14px',
            color: 'rgba(242,237,228,0.45)',
            maxWidth: '400px',
            lineHeight: 1.7
          }}>
            Setiap token yang beredar memiliki backing fisik 1:1 di gudang terverifikasi.
          </div>
        </div>

        {/* 2. TIGA STAT CARDS */}
        <div style={{
          marginTop: '64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'rgba(242,237,228,0.03)',
            border: '0.5px solid rgba(242,237,228,0.08)',
            borderRadius: '6px',
            padding: '32px 28px'
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(242,237,228,0.3)',
              marginBottom: '12px'
            }}>TOTAL SUPPLY</div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: '44px',
              color: '#D4956A',
              lineHeight: 1
            }}>[TBD]</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.25)',
              marginTop: '8px'
            }}>token $SALAK</div>
          </div>

          {/* Card 2 */}
          <div style={{
            background: 'rgba(242,237,228,0.03)',
            border: '0.5px solid rgba(242,237,228,0.08)',
            borderRadius: '6px',
            padding: '32px 28px'
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(242,237,228,0.3)',
              marginBottom: '12px'
            }}>BACKING RATIO</div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: '44px',
              color: '#D4956A',
              lineHeight: 1
            }}>1 : 1</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.25)',
              marginTop: '8px'
            }}>kg salak per token</div>
          </div>

          {/* Card 3 */}
          <div style={{
            background: 'rgba(242,237,228,0.03)',
            border: '0.5px solid rgba(242,237,228,0.08)',
            borderRadius: '6px',
            padding: '32px 28px'
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(242,237,228,0.3)',
              marginBottom: '12px'
            }}>EKSPOR AKTIF</div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: '44px',
              color: '#D4956A',
              lineHeight: 1
            }}>15 ton</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.25)',
              marginTop: '8px'
            }}>per minggu &middot; live</div>
          </div>
        </div>

        {/* 3. DISTRIBUSI TOKEN */}
        <div style={{ marginTop: '56px' }}>
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#B87333',
            marginBottom: '24px'
          }}>DISTRIBUSI TOKEN</div>

          {/* Baris 1: Petani & Ekosistem 40% */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: '#F2EDE4', minWidth: '180px' }}>
              Petani & Ekosistem
            </div>
            <div style={{ flex: 1, height: '5px', borderRadius: '2px', background: 'rgba(184,115,51,0.1)' }}>
              <div style={{ width: '40%', height: '100%', background: '#B87333', borderRadius: '2px' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: '#B87333', minWidth: '36px', textAlign: 'right' }}>
              40%
            </div>
          </div>

          {/* Baris 2: Liquidity Pool 25% */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: '#F2EDE4', minWidth: '180px' }}>
              Liquidity Pool
            </div>
            <div style={{ flex: 1, height: '5px', borderRadius: '2px', background: 'rgba(184,115,51,0.1)' }}>
              <div style={{ width: '25%', height: '100%', background: '#B87333', borderRadius: '2px' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: '#B87333', minWidth: '36px', textAlign: 'right' }}>
              25%
            </div>
          </div>

          {/* Baris 3: Treasury 20% */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: '#F2EDE4', minWidth: '180px' }}>
              Treasury
            </div>
            <div style={{ flex: 1, height: '5px', borderRadius: '2px', background: 'rgba(184,115,51,0.1)' }}>
              <div style={{ width: '20%', height: '100%', background: '#B87333', borderRadius: '2px' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: '#B87333', minWidth: '36px', textAlign: 'right' }}>
              20%
            </div>
          </div>

          {/* Baris 4: Tim & Advisor 15% */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: '#F2EDE4', minWidth: '180px' }}>
              Tim & Advisor
            </div>
            <div style={{ flex: 1, height: '5px', borderRadius: '2px', background: 'rgba(184,115,51,0.1)' }}>
              <div style={{ width: '15%', height: '100%', background: '#B87333', borderRadius: '2px' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: '#B87333', minWidth: '36px', textAlign: 'right' }}>
              15%
            </div>
          </div>
        </div>

        {/* 4. NETWORK INFO */}
        <div style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '0.5px solid rgba(242,237,228,0.06)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)' }}>NETWORK</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.7)' }}>Polygon (MATIC)</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)' }}>STANDARD</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.7)' }}>ERC-20</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)' }}>CONTRACT</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.7)' }}>0x....[TBD]</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.25)' }}>AUDIT</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.7)' }}>Pending &middot; Q2 2025</div>
          </div>
        </div>

      </div>
    </section>
  );
}
