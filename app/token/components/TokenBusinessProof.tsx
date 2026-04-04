"use client";

import React from "react";

export default function TokenBusinessProof() {
  return (
    <section style={{
      background: '#080806',
      padding: '120px 40px',
    }}>
      <div style={{
        maxWidth: '1000px',
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
          BISNIS NYATA
        </div>

        {/* HEADING */}
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 300,
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: '#F2EDE4',
          lineHeight: 1.05,
          margin: 0
        }}>
          <div style={{ fontStyle: 'normal' }}>Bukan konsep.</div>
          <div style={{ fontStyle: 'italic' }}>Sudah berjalan.</div>
        </h2>

        {/* SUB */}
        <div style={{
          marginTop: '16px',
          marginBottom: '80px',
          fontFamily: 'var(--font-syne)',
          fontSize: '14px',
          color: 'rgba(242,237,228,0.4)',
          maxWidth: '460px',
          lineHeight: 1.7
        }}>
          Mentor kami telah mengekspor salak secara aktif. $SALAK adalah tokenisasi bisnis yang sudah nyata dan menghasilkan, bukan sekadar mencoba membangun dari nol.
        </div>

        {/* DUA ANGKA BESAR */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          marginBottom: '64px'
        }}>
          {/* Item 1 */}
          <div style={{
            borderLeft: '2px solid rgba(184,115,51,0.3)',
            paddingLeft: '32px'
          }}>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(64px, 9vw, 100px)',
              color: '#D4956A',
              lineHeight: 1
            }}>15 ton</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(242,237,228,0.3)',
              marginTop: '10px'
            }}>EKSPOR PER MINGGU</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.2)',
              marginTop: '4px'
            }}>volume aktif</div>
          </div>

          {/* Item 2 */}
          <div style={{
            borderLeft: '2px solid rgba(184,115,51,0.3)',
            paddingLeft: '32px'
          }}>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(64px, 9vw, 100px)',
              color: '#D4956A',
              lineHeight: 1
            }}>780 ton</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(242,237,228,0.3)',
              marginTop: '10px'
            }}>ESTIMASI PER TAHUN</div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(242,237,228,0.2)',
              marginTop: '4px'
            }}>kapasitas produksi</div>
          </div>
        </div>

        {/* TRACK RECORD */}
        <div style={{ marginTop: '64px' }}>
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#B87333',
            marginBottom: '24px'
          }}>TRACK RECORD</div>

          {/* Row 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#B87333',
              marginTop: '5px',
              flexShrink: 0
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 500, color: 'rgba(242,237,228,0.7)' }}>
                Bisnis ekspor berjalan
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.3)' }}>
                Ekspor aktif 15 ton/minggu
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#B87333',
              marginTop: '5px',
              flexShrink: 0
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 500, color: 'rgba(242,237,228,0.7)' }}>
                Tokenisasi dimulai
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.3)' }}>
                Infrastruktur $SALAK dibangun
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#B87333',
              marginTop: '5px',
              flexShrink: 0
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 500, color: '#B87333' }}>
                Hackathon Launch
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.3)' }}>
                Platform Daulat Salak go-live
              </div>
            </div>
          </div>
        </div>

        {/* DESTINASI EKSPOR */}
        <div style={{ marginTop: '40px' }}>
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            textTransform: 'uppercase',
            color: 'rgba(242,237,228,0.25)',
            marginBottom: '16px'
          }}>DESTINASI EKSPOR</div>
          
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 12px',
              borderRadius: '2px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '10px',
              color: 'rgba(184,115,51,0.5)'
            }}>
              Kamboja
            </div>
            <div style={{
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 12px',
              borderRadius: '2px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '10px',
              color: 'rgba(184,115,51,0.5)'
            }}>
              Thailand
            </div>
            <div style={{
              background: 'rgba(184,115,51,0.08)',
              border: '0.5px solid rgba(184,115,51,0.2)',
              padding: '4px 12px',
              borderRadius: '2px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '10px',
              color: 'rgba(184,115,51,0.5)'
            }}>
              China
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
