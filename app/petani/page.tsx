"use client"
import React, { useState } from 'react'

export default function PetaniPage() {
  const [formData, setFormData] = useState({
    nama: '', noHp: '', koperasi: ''
  })
  const [submitted, setSubmitted] = useState(false)

  return (
    <main style={{ position: 'relative', overflow: 'visible', background: '#080806', minHeight: '100vh', color: '#F2EDE4' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* NAVBAR */}
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
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F2EDE4', opacity: 0.6 }}>
          DAULAT SALAK
        </div>
        
        {/* Tengah */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { n: 'EKOSISTEM', act: false, href: '/hub' },
            { n: 'MARKETPLACE', act: false, href: '/marketplace' },
            { n: 'PETANI', act: true, href: '/petani' },
            { n: 'TOKEN', act: false, href: '/token' }
          ].map(link => (
            <div 
              key={link.n}
              onClick={() => { if(link.href) window.location.href = link.href }}
              style={{
                fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer',
                color: link.act ? '#D4956A' : 'rgba(242,237,228,0.25)',
                opacity: link.act ? 1 : 0.25
              }}
            >
              {link.n}
            </div>
          ))}
        </div>

        {/* Kanan */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#22c55e', opacity: 0.6 }}>
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
            BELI $SALAK
          </button>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'flex-end',
        overflow: 'hidden'
      }}>
        <img 
          src="/background/1.jpeg" 
          alt="Salak petani" 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover' as const,
            objectPosition: 'center',
            zIndex: 0,
            display: 'block'
          }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,6,0.6)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,6,1) 0%, rgba(8,8,6,0.5) 40%, transparent 100%)', zIndex: 2 }} />

        <div style={{ 
          position: 'relative', 
          zIndex: 3, 
          padding: '56px 60px 72px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '48px' 
        }}>
          {/* KIRI */}
          <div style={{ flex: 1, minWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(184,115,51,0.6)', textTransform: 'uppercase' }}>
                PORTAL PETANI &middot; DAULAT SALAK
              </span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, margin: 0 }}>
              <div style={{ fontSize: 'clamp(60px, 8vw, 100px)', color: '#F2EDE4', lineHeight: 0.85 }}>Kendalikan</div>
              <div style={{ fontSize: 'clamp(60px, 8vw, 100px)', color: '#F2EDE4', lineHeight: 0.85 }}>hargamu</div>
              <div style={{ fontSize: 'clamp(60px, 8vw, 100px)', color: 'rgba(242,237,228,0.4)', fontStyle: 'italic', lineHeight: 0.85 }}>sendiri.</div>
            </h1>

            <div style={{ marginTop: '24px', fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.3)', lineHeight: 1.8, maxWidth: '400px' }}>
              Platform digital untuk petani salak Indonesia &mdash; jual langsung ke importir, akses modal tanpa agunan, harga transparan on-chain.
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => document.getElementById('daftar')?.scrollIntoView({behavior:'smooth'})}
                style={{ background: 'rgba(184,115,51,0.9)', color: '#080806', fontFamily: 'var(--font-jetbrains)', fontSize: '11px', padding: '13px 28px', borderRadius: '2px', border: 'none', cursor: 'pointer', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                DAFTAR SEKARANG &rarr;
              </button>
              <button 
                style={{ background: 'transparent', border: '0.5px solid rgba(242,237,228,0.15)', color: 'rgba(242,237,228,0.4)', fontFamily: 'var(--font-jetbrains)', fontSize: '11px', padding: '13px 28px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                PELAJARI LEBIH &rarr;
              </button>
            </div>
          </div>

          {/* KANAN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-end' }}>
            {[
              { val: '1.240', lab: 'petani terdaftar' },
              { val: 'Rp 3.500', lab: 'harga rata-rata/kg' },
              { val: '25%', lab: 'peningkatan margin' }
            ].map(s => (
              <div key={s.lab} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '32px', color: '#D4956A', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.12em', marginTop: '2px', textTransform: 'uppercase' }}>{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — PAIN POINT VS SOLUSI */}
      <section style={{ background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.04)', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1px minmax(0, 1fr)', gap: 0 }}>
        {/* KOLOM KIRI */}
        <div style={{ paddingRight: '60px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>MASALAH SAAT INI</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', color: '#F2EDE4', lineHeight: 0.9, marginBottom: '8px' }}>Sistem lama</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', color: 'rgba(242,237,228,0.3)', lineHeight: 0.9, fontStyle: 'italic', marginBottom: '40px' }}>merugikan petani.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { t: 'Harga dikontrol tengkulak', d: 'Petani tidak punya posisi tawar, harga ditentukan sepihak' },
              { t: 'Tidak ada akses modal', d: 'Bank minta agunan yang tidak dimiliki petani kecil' },
              { t: 'Informasi harga terbatas', d: 'Tidak tahu harga pasar sesungguhnya saat panen' },
              { t: 'Rantai distribusi panjang', d: 'Margin tergerus berlapis sebelum sampai konsumen' },
            ].map((p, i) => (
              <div key={i} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.04)', padding: '20px 0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(255,255,255,0.15)', flexShrink: 0, marginTop: '2px' }}>&times;</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.5)', marginBottom: '4px' }}>{p.t}</div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', opacity: 0.2, lineHeight: 1.6 }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: '0.5px', background: 'rgba(255,255,255,0.04)' }} />

        {/* KOLOM KANAN */}
        <div style={{ paddingLeft: '60px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(184,115,51,0.4)', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>SOLUSI DAULAT SALAK</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', color: '#F2EDE4', lineHeight: 0.9, marginBottom: '8px' }}>Ekosistem baru</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', color: '#D4956A', opacity: 0.7, lineHeight: 0.9, fontStyle: 'italic', marginBottom: '40px' }}>untuk petani.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { t: 'Jual langsung ke importir', d: 'P2P marketplace tanpa perantara berlebih' },
              { t: 'Pinjaman via $SALAK token', d: 'Modal tanam tanpa agunan berbasis reputasi on-chain' },
              { t: 'Harga real-time transparan', d: 'Data harga aktual dari transaksi nyata di blockchain' },
              { t: 'Pasar Asia terbuka', d: 'Terhubung langsung ke importir Singapura, Malaysia, Hongkong' },
            ].map((p, i) => (
              <div key={i} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.04)', padding: '20px 0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(45,122,95,0.6)', flexShrink: 0, marginTop: '2px' }}>&#10003;</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.5)', marginBottom: '4px' }}>{p.t}</div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', opacity: 0.2, lineHeight: 1.6 }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — 3 BENEFIT */}
      <section style={{ background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>SECTION 03 &middot; KEUNTUNGAN PETANI</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>Tiga keuntungan</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>bergabung bersama kami.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
          {/* Card 1 */}
          <div style={{ background: '#080806', padding: '48px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '52px', color: 'rgba(184,115,51,0.15)', marginBottom: '28px', lineHeight: 1 }}>01</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#F2EDE4', marginBottom: '12px' }}>Harga Adil</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '40px', color: '#D4956A', marginBottom: '4px', lineHeight: 1 }}>+25%</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, marginBottom: '20px' }}>peningkatan margin rata-rata</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.25, lineHeight: 1.7 }}>Jual langsung ke pembeli akhir tanpa margin perantara yang menggerus pendapatan Anda.</div>
          </div>
          {/* Card 2 */}
          <div style={{ background: '#080806', padding: '48px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '52px', color: 'rgba(184,115,51,0.15)', marginBottom: '28px', lineHeight: 1 }}>02</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#F2EDE4', marginBottom: '12px' }}>Modal Tanam</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '40px', color: '#D4956A', marginBottom: '4px', lineHeight: 1 }}>0%</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, marginBottom: '20px' }}>agunan konvensional</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.25, lineHeight: 1.7 }}>Akses pinjaman modal tanam berbasis reputasi transaksi on-chain &mdash; tanpa jaminan fisik.</div>
          </div>
          {/* Card 3 */}
          <div style={{ background: '#080806', padding: '48px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '52px', color: 'rgba(184,115,51,0.15)', marginBottom: '28px', lineHeight: 1 }}>03</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#F2EDE4', marginBottom: '12px' }}>Pasar Luas</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '40px', color: '#D4956A', marginBottom: '4px', lineHeight: 1 }}>3</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, marginBottom: '20px' }}>negara tujuan ekspor aktif</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.25, lineHeight: 1.7 }}>Terhubung ke jaringan importir Asia &mdash; Singapura, Malaysia, Hongkong &mdash; langsung dari kebun.</div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PREVIEW PORTAL */}
      <section style={{ background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>SECTION 04 &middot; PREVIEW PORTAL</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>Dashboard petani,</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>semua dalam satu tempat.</div>
          <div style={{ marginTop: '16px', fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.25 }}>Bergabung untuk akses penuh ke portal petani Daulat Salak.</div>
        </div>

        <div style={{ border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
          {/* Mockup Header */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px 24px', borderBottom: '0.5px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.3 }}>PORTAL PETANI &middot; PAK SLAMET</div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2d7a5f' }} />
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: '#2d7a5f', opacity: 0.6 }}>AKTIF</div>
            </div>
          </div>

          {/* Mockup Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
            {[
              { l: 'STOK LISTED', v: '5,2', u: 'ton aktif' },
              { l: 'PENDAPATAN', v: 'Rp 44,2M', u: 'bulan ini' },
              { l: 'PINJAMAN', v: 'Rp 5M', u: 'aktif · 0% overdue' },
              { l: 'RATING', v: '4.9', u: 'dari 5.0' },
            ].map(ms => (
              <div key={ms.l} style={{ background: 'rgba(255,255,255,0.01)', padding: '20px 24px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.15em', marginBottom: '8px' }}>{ms.l}</div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#D4956A' }}>{ms.v}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', opacity: 0.3, marginTop: '2px' }}>{ms.u}</div>
              </div>
            ))}
          </div>

          {/* Mockup Table */}
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
            {/* Header Tipis */}
            <div style={{ padding: '10px 24px', borderBottom: '0.5px solid rgba(255,255,255,0.04)', display: 'flex', gap: 0, alignItems: 'center' }}>
              <div style={{ flex: 2, fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.18em', textTransform: 'uppercase' }}>KOMODITAS</div>
              <div style={{ flex: 1, fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.18em', textTransform: 'uppercase' }}>GRADE</div>
              <div style={{ flex: 1, fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'right' }}>STOK</div>
              <div style={{ flex: 1, fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'right' }}>HARGA/KG</div>
              <div style={{ flex: 1, fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'right' }}>STATUS</div>
            </div>

            {/* Data Rows */}
            {[
              { k: 'Salak Pondoh', a: 'Sleman, DIY', g: 'A', s: '2 ton', h: 'Rp 8.500', st: 'LISTED' },
              { k: 'Salak Pondoh', a: 'Magelang, Jateng', g: 'B', s: '3,2 ton', h: 'Rp 6.800', st: 'LISTED' },
              { k: 'Salak Banjarnegara', a: 'Banjarnegara, Jateng', g: 'A', s: '1,5 ton', h: 'Rp 9.000', st: 'PENDING' },
            ].map((r, i) => (
              <div key={i} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.04)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 0 }}>
                {/* Kolom 1 - Komoditas */}
                <div style={{ flex: 2 }}>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '18px', color: '#F2EDE4', lineHeight: 1.2 }}>{r.k}</div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', opacity: 0.4, marginTop: '4px' }}>&#9678; {r.a}</div>
                </div>
                
                {/* Kolom 2 - Grade */}
                <div style={{ flex: 1 }}>
                  <span style={{ 
                    border: r.g === 'A' ? '0.5px solid rgba(184,115,51,0.3)' : '0.5px solid rgba(255,255,255,0.08)',
                    color: r.g === 'A' ? 'rgba(184,115,51,0.6)' : 'rgba(242,237,228,0.3)',
                    background: r.g === 'A' ? 'rgba(184,115,51,0.06)' : 'transparent',
                    padding: '3px 10px', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px'
                  }}>
                    Grade {r.g}
                  </span>
                </div>

                {/* Kolom 3 - Stok */}
                <div style={{ flex: 1, textAlign: 'right', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#F2EDE4', opacity: 0.7 }}>
                  {r.s}
                </div>

                {/* Kolom 4 - Harga */}
                <div style={{ flex: 1, textAlign: 'right', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#D4956A' }}>
                  {r.h}
                </div>

                {/* Kolom 5 - Status */}
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <span style={{ 
                    background: r.st === 'LISTED' ? 'rgba(45,122,95,0.08)' : 'rgba(184,115,51,0.08)',
                    color: r.st === 'LISTED' ? 'rgba(45,122,95,0.7)' : 'rgba(184,115,51,0.5)',
                    border: r.st === 'LISTED' ? '0.5px solid rgba(45,122,95,0.25)' : '0.5px solid rgba(184,115,51,0.2)',
                    padding: '3px 10px', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px'
                  }}>
                    {r.st}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to top, rgba(8,8,6,0.95) 0%, transparent 100%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', opacity: 0.6, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Bergabung untuk akses penuh</div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FORM DAFTAR */}
      <section id="daftar" style={{ background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* KOLOM KIRI */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>DAFTAR SEKARANG</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>Mulai perjalananmu</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>bersama kami.</div>
          <div style={{ marginTop: '20px', fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.25, lineHeight: 1.8 }}>Gratis bergabung. Tim kami akan menghubungi dalam 1x24 jam untuk proses verifikasi.</div>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {["Verifikasi identitas petani", "Onboarding & pelatihan platform", "Listing produk pertama gratis"].map(pt => (
              <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e' }} />
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.3 }}>{pt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          {!submitted ? (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>NAMA LENGKAP</label>
                <input type="text" placeholder="Pak Slamet Raharjo" value={formData.nama} onChange={e => setFormData({...formData, nama: e.target.value})} style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '2px', color: '#F2EDE4', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>NOMOR HP / WHATSAPP</label>
                <input type="text" placeholder="08xx-xxxx-xxxx" value={formData.noHp} onChange={e => setFormData({...formData, noHp: e.target.value})} style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '2px', color: '#F2EDE4', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>NAMA KOPERASI (opsional)</label>
                <input type="text" placeholder="KUD / Gapoktan / Mandiri" value={formData.koperasi} onChange={e => setFormData({...formData, koperasi: e.target.value})} style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '2px', color: '#F2EDE4', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', outline: 'none' }} />
              </div>
              <button 
                onClick={() => { if(formData.nama && formData.noHp) setSubmitted(true) }}
                style={{ width: '100%', padding: '14px', background: 'rgba(184,115,51,0.9)', color: '#080806', fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', borderRadius: '2px', border: 'none', cursor: 'pointer', marginTop: '8px' }}
              >
                DAFTAR SEKARANG &rarr;
              </button>
              <div style={{ marginTop: '12px', fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15, textAlign: 'center' }}>Data Anda aman dan tidak akan disebarkan.</div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: '32px', color: '#2d7a5f', marginBottom: '16px' }}>&#10003;</div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '32px', color: '#F2EDE4', marginBottom: '12px' }}>Pendaftaran Diterima!</div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.3, lineHeight: 1.7 }}>Tim kami akan menghubungi {formData.nama} dalam 1x24 jam.</div>
              <button 
                onClick={() => window.location.href = '/'}
                style={{ marginTop: '24px', background: 'transparent', border: '0.5px solid rgba(255,255,255,0.12)', color: 'rgba(242,237,228,0.4)', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', padding: '12px 24px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                KEMBALI KE BERANDA
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.04)', padding: '28px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.12 }}>&copy; 2026 Daulat Salak &middot; Portal Petani</div>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { n: 'EKOSISTEM', h: '/hub' },
            { n: 'MARKETPLACE', h: '/marketplace' },
            { n: 'TOKEN', h: '/token' }
          ].map(l => (
            <div key={l.n} onClick={() => window.location.href = l.h} style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15, letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase' }}>{l.n}</div>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.1, letterSpacing: '0.12em' }}>POLYGON NETWORK &middot; ERC-20</div>
      </div>
    </main>
  )
}
