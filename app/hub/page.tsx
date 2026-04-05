"use client"
import React from 'react'
import Image from 'next/image'
import clusterBg from '../../background/layer-3-cluster.jpg'

export default function HubPage() {
  return (
    <main style={{
      background: '#080806',
      minHeight: '100vh',
      color: '#F2EDE4'
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      
      {/* 1. NAVBAR - PERTAHANKAN PERSIS */}
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: '56px',
        padding: '0 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(8,8,6,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.04)'
      }}>
        {/* Kiri */}
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(242,237,228,0.6)' }}>
          DAULAT SALAK
        </div>
        
        {/* Tengah */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { n: 'EKOSISTEM', act: true, href: '#' },
            { n: 'MARKETPLACE', act: false, href: '/marketplace' },
            { n: 'PETANI', act: false, href: '/petani' },
            { n: 'TOKEN', act: false, href: '/token' }
          ].map(link => (
            <div 
              key={link.n}
              onClick={() => { if(link.href !== '#') window.location.href = link.href }}
              style={{
                fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer',
                color: link.act ? '#D4956A' : 'rgba(242,237,228,0.25)'
              }}
            >
              {link.n}
            </div>
          ))}
        </div>

        {/* Kanan */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(34,197,94,0.6)' }}>
              LIVE
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/buy'}
            style={{
              background: 'rgba(184,115,51,0.85)', color: '#080806', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em',
              padding: '8px 18px', borderRadius: '2px', border: 'none', cursor: 'pointer'
            }}
          >
            Beli $SALAK
          </button>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        padding: '0 60px 0'
      }}>
        {/* FOTO BACKGROUND */}
        <div style={{ zIndex: 0 }}>
          <Image 
            src={clusterBg}
            alt="Daulat Salak Cluster"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            placeholder="blur"
          />
        </div>

        {/* OVERLAY 1 — gelap keseluruhan */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(8,8,6,0.55)'
        }} />

        {/* OVERLAY 2 — gradient bawah */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(8,8,6,1) 0%, transparent 65%)'
        }} />

        {/* KONTEN */}
        <div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          
          {/* KIRI BAWAH */}
          <div>
            {/* Eyebrow */}
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(184,115,51,0.5)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
              <span>EKOSISTEM &middot; REAL-TIME DATA</span>
            </div>
            
            {/* H1 */}
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(56px, 8vw, 96px)', color: '#F2EDE4', lineHeight: 0.9, letterSpacing: '-0.01em', margin: 0 }}>
              <div>Transparansi</div>
              <div style={{ fontStyle: 'italic', color: 'rgba(242,237,228,0.6)' }}>Penuh.</div>
            </h1>

            {/* Subtext */}
            <div style={{ marginTop: '20px', maxWidth: '360px', fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.3)', lineHeight: 1.8 }}>
              Semua data ekosistem $SALAK terbuka untuk publik &mdash; stok gudang, ekspor aktif, aktivitas on-chain.
            </div>
          </div>

          {/* KANAN BAWAH */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.12)' }}>
              LAST UPDATED &middot; JUST NOW
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', letterSpacing: '0.1em', color: 'rgba(184,115,51,0.2)' }}>
              POLYGON NETWORK &middot; BLOCK #19,847,203
            </div>
          </div>

        </div>
      </section>

      {/* 3. STAT CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        background: '#080806',
        borderTop: '0.5px solid rgba(255,255,255,0.06)'
      }}>
        {[
          { label: 'STOK GUDANG', val: '247', unit: 'ton salak', trend: '▲ +12 ton minggu ini', trColor: 'rgba(34,197,94,0.5)' },
          { label: 'TOKEN BEREDAR', val: '247.000', unit: '$SALAK on-chain', trend: '▲ backing 1:1 verified', trColor: 'rgba(34,197,94,0.5)' },
          { label: 'EKSPOR AKTIF', val: '15', unit: 'ton / minggu', trend: '→ 3 destinasi aktif', trColor: 'rgba(184,115,51,0.5)' },
          { label: 'PETANI AKTIF', val: '1.240', unit: 'petani terdaftar', trend: '▲ +18% bulan ini', trColor: 'rgba(34,197,94,0.5)' }
        ].map((card, i) => (
          <div key={card.label} style={{
            padding: '32px 40px',
            borderRight: i !== 3 ? '0.5px solid rgba(255,255,255,0.04)' : 'none'
          }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(242,237,228,0.18)', marginBottom: '12px' }}>
              {card.label}
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(40px, 4vw, 56px)', color: '#D4956A', lineHeight: 1 }}>
              {card.val}
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(242,237,228,0.2)', marginTop: '4px' }}>
              {card.unit}
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', marginTop: '10px', color: card.trColor }}>
              {card.trend}
            </div>
          </div>
        ))}
      </div>

      {/* 4. SECTION 2: STOK GUDANG */}
      <section style={{
        background: '#080806',
        padding: '0 60px 96px',
        borderTop: 'none',
        marginTop: 0
      }}>
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px', flexWrap: 'wrap', gap: '32px' }}>
          {/* Kiri */}
          <div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', letterSpacing: '0.2em', opacity: 0.2, marginBottom: '16px', textTransform: 'uppercase' }}>
              SECTION 02 &middot; STOK GUDANG
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>
              247 ton salak
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>
              siap ekspor hari ini.
            </div>
          </div>
          
          {/* Kanan */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', border: '0.5px solid rgba(45,122,95,0.4)', padding: '8px 16px', borderRadius: '2px'
            }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2d7a5f' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: '#2d7a5f', letterSpacing: '0.15em' }}>ON-CHAIN VERIFIED</span>
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15, marginTop: '8px', textAlign: 'right' }}>
              Last verified: 2 jam lalu
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.04)', marginBottom: '48px' }} />

        {/* GRID GUDANG */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)'
        }}>
          {[
            {
              nama: 'GUDANG SLEMAN',
              kap: 150,
              isi: 142,
              persen: 94.6,
              lok: 'Sleman, DI Yogyakarta'
            },
            {
              nama: 'GUDANG MAGELANG',
              kap: 100,
              isi: 105,
              persen: 100,
              lok: 'Magelang, Jawa Tengah'
            }
          ].map(gdg => {
            const isOverflow = gdg.isi >= gdg.kap;
            const barFill = isOverflow ? 'rgba(184,115,51,0.8)' : 'linear-gradient(to right, #1a4a3a, #2d7a5f)';
            const barWidth = isOverflow ? '100%' : `${gdg.persen}%`;
            const textLeft = isOverflow ? 'OVERFLOW — ekspor segera' : `${gdg.persen}% kapasitas`;
            const colorLeft = isOverflow ? 'rgba(184,115,51,0.7)' : 'rgba(45,122,95,0.7)';

            return (
              <div key={gdg.nama} style={{ background: '#080806', padding: '40px 48px' }}>
                {/* Baris atas */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '0.18em', opacity: 0.3, textTransform: 'uppercase' }}>
                    {gdg.nama}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(45,122,95,0.6)' }}>
                    &bull; ON-CHAIN
                  </div>
                </div>

                {/* Angka besar terisi */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(52px, 5vw, 72px)', color: '#2d7a5f', lineHeight: 1 }}>
                    {gdg.isi} ton
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', opacity: 0.2, marginTop: '6px' }}>
                    dari {gdg.kap} ton kapasitas
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ marginTop: '24px' }}>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: barWidth, height: '4px', background: barFill, borderRadius: '2px' }} />
                  </div>
                </div>

                {/* Baris bawah */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: colorLeft }}>
                    {textLeft}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15 }}>
                    {gdg.lok}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* FOOTER SECTION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '48px', paddingTop: '24px', borderTop: '0.5px solid rgba(255,255,255,0.04)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.2 }}>
            Total stok aktif: 247 ton &middot; 2 gudang terverifikasi
          </div>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.12, textAlign: 'right' }}>
            Data diperbarui setiap 6 jam via oracle on-chain
          </div>
        </div>
      </section>

    </main>
  )
}
