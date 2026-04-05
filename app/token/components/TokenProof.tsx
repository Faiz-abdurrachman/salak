"use client";

import React from "react";
import Image from "next/image";

export default function TokenProof() {
  return (
    <section id="proof-section" style={{
      background: '#080806',
      padding: '120px 40px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* KOLOM KIRI — Visual Gudang Asli */}
        <div style={{
          width: '100%',
          minHeight: '460px',
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '0.5px solid rgba(184,115,51,0.2)'
        }}>
          <Image
            src="/background/gudang.jpeg"
            alt="Gudang penyimpanan salak terverifikasi"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,6,0.7) 0%, rgba(8,8,6,0.1) 60%, rgba(8,8,6,0) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '9px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(184,115,51,0.7)'
          }}>
            ◆ Gudang Terverifikasi &middot; Aktif
          </div>
        </div>

        {/* KOLOM KANAN — Data Proof */}
        <div>
          {/* 1. Eyebrow */}
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#B87333',
            marginBottom: '20px'
          }}>
            PROOF OF RESERVE
          </div>

          {/* 2. Heading */}
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#F2EDE4',
            lineHeight: 1.15,
            margin: 0
          }}>
            <div style={{ fontStyle: 'normal' }}>Bukan janji.</div>
            <div style={{ fontStyle: 'italic' }}>Ada gudangnya.</div>
          </h2>

          {/* 3. Sub */}
          <div style={{
            marginTop: '16px',
            fontFamily: 'var(--font-syne)',
            fontSize: '14px',
            color: 'rgba(242,237,228,0.45)',
            lineHeight: 1.7,
            maxWidth: '380px'
          }}>
            Setiap $SALAK token yang beredar dijamin dengan salak fisik di gudang terverifikasi. Data stok diperbarui secara berkala on-chain.
          </div>

          {/* 4. EMPAT DATA ROWS */}
          <div style={{ marginTop: '36px' }}>
            {/* Row 1 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '0.5px solid rgba(242,237,228,0.06)'
            }}>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(242,237,228,0.25)'
              }}>STOK AKTIF</div>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: 'rgba(242,237,228,0.7)'
              }}>{`247 ton`}</div>
            </div>

            {/* Row 2 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '0.5px solid rgba(242,237,228,0.06)'
            }}>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(242,237,228,0.25)'
              }}>KAPASITAS GUDANG</div>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: 'rgba(242,237,228,0.7)'
              }}>{`250 ton`}</div>
            </div>

            {/* Row 3 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '0.5px solid rgba(242,237,228,0.06)'
            }}>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(242,237,228,0.25)'
              }}>LAST VERIFIED</div>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: 'rgba(242,237,228,0.7)'
              }}>{`19,847,203`}</div>
            </div>

            {/* Row 4 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 0',
              borderBottom: '0.5px solid rgba(242,237,228,0.06)'
            }}>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(242,237,228,0.25)'
              }}>ON-CHAIN STATUS</div>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: '#B87333'
              }}>✓ Verified &middot; Polygon</div>
            </div>
          </div>

          {/* 5. TIGA BADGE */}
          <div style={{
            marginTop: '24px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {/* Badge 1 */}
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4956A',
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 10px',
              borderRadius: '2px'
            }}>
              Export Grade A
            </div>
            
            {/* Badge 2 */}
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4956A',
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 10px',
              borderRadius: '2px'
            }}>
              Polygon Mainnet
            </div>

            {/* Badge 3 */}
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4956A',
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 10px',
              borderRadius: '2px'
            }}>
              CID Hash Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
