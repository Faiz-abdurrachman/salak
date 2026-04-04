"use client";

import React from "react";

export default function TokenHowItWorks() {
  return (
    <section style={{
      background: '#080806',
      padding: '120px 40px',
      textAlign: 'left'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* 1. EYEBROW */}
        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color: '#B87333',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          CARA KERJA
        </div>

        {/* 2. HEADING */}
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 5vw, 56px)',
          color: '#F2EDE4',
          lineHeight: 1.1,
          marginBottom: '80px',
          marginTop: 0,
          textAlign: 'center'
        }}>
          Tiga langkah. Satu tujuan.
        </h2>

        {/* 3. TIGA STEP BESAR */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* STEP 1 */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '32px',
            padding: '48px 0',
            borderBottom: '0.5px solid rgba(242,237,228,0.06)'
          }}>
            {/* KIRI (Nomor Besar) */}
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(72px, 9vw, 110px)',
              color: 'rgba(184,115,51,0.2)',
              lineHeight: 1,
              minWidth: '120px'
            }}>
              01
            </div>

            {/* KANAN (Konten) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: '1 1 300px'
            }}>
              {/* Tag Atas */}
              <div>
                <span style={{
                  background: 'rgba(184,115,51,0.08)',
                  border: '0.5px solid rgba(184,115,51,0.2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#B87333'
                }}>
                  INVESTOR &middot; PEMBELI
                </span>
              </div>

              {/* Judul Step */}
              <h3 style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#F2EDE4',
                lineHeight: 1.1,
                margin: 0
              }}>
                Beli $SALAK Token
              </h3>

              {/* Deskripsi Step */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '15px',
                color: 'rgba(242,237,228,0.4)',
                maxWidth: '480px',
                lineHeight: 1.75
              }}>
                Beli token $SALAK via crypto wallet atau metode pembayaran yang tersedia. Setiap token langsung ter-backing 1:1 dengan salak fisik di gudang.
              </div>

              {/* Detail Teknis */}
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '11px',
                color: 'rgba(184,115,51,0.4)',
                letterSpacing: '0.1em',
                marginTop: '16px'
              }}>
                Via MetaMask &middot; WalletConnect &middot; Fiat
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '32px',
            padding: '48px 0',
            borderBottom: '0.5px solid rgba(242,237,228,0.06)'
          }}>
            {/* KIRI (Nomor Besar) */}
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(72px, 9vw, 110px)',
              color: 'rgba(184,115,51,0.2)',
              lineHeight: 1,
              minWidth: '120px'
            }}>
              02
            </div>

            {/* KANAN (Konten) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: '1 1 300px'
            }}>
              {/* Tag Atas */}
              <div>
                <span style={{
                  background: 'rgba(184,115,51,0.08)',
                  border: '0.5px solid rgba(184,115,51,0.2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#B87333'
                }}>
                  SMART CONTRACT
                </span>
              </div>

              {/* Judul Step */}
              <h3 style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#F2EDE4',
                lineHeight: 1.1,
                margin: 0
              }}>
                Backing Otomatis Terkunci
              </h3>

              {/* Deskripsi Step */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '15px',
                color: 'rgba(242,237,228,0.4)',
                maxWidth: '480px',
                lineHeight: 1.75
              }}>
                Smart contract secara otomatis mengunci 1 kg salak di gudang terverifikasi untuk setiap token yang beredar. Transparan dan dapat diverifikasi on-chain.
              </div>

              {/* Detail Teknis */}
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '11px',
                color: 'rgba(184,115,51,0.4)',
                letterSpacing: '0.1em',
                marginTop: '16px'
              }}>
                ERC-20 &middot; Polygon &middot; Auto-execute
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '32px',
            padding: '48px 0'
          }}>
            {/* KIRI (Nomor Besar) */}
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(72px, 9vw, 110px)',
              color: 'rgba(184,115,51,0.2)',
              lineHeight: 1,
              minWidth: '120px'
            }}>
              03
            </div>

            {/* KANAN (Konten) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: '1 1 300px'
            }}>
              {/* Tag Atas */}
              <div>
                <span style={{
                  background: 'rgba(184,115,51,0.08)',
                  border: '0.5px solid rgba(184,115,51,0.2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#B87333'
                }}>
                  KAPAN SAJA &middot; LIKUID
                </span>
              </div>

              {/* Judul Step */}
              <h3 style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#F2EDE4',
                lineHeight: 1.1,
                margin: 0
              }}>
                Redeem atau Jual Bebas
              </h3>

              {/* Deskripsi Step */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '15px',
                color: 'rgba(242,237,228,0.4)',
                maxWidth: '480px',
                lineHeight: 1.75
              }}>
                Pemegang token bebas menjual di marketplace kapan saja, atau meredeem token untuk mendapatkan salak fisik langsung dari gudang.
              </div>

              {/* Detail Teknis */}
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '11px',
                color: 'rgba(184,115,51,0.4)',
                letterSpacing: '0.1em',
                marginTop: '16px'
              }}>
                DEX &middot; P2P &middot; Direct redemption
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
