"use client"
import React, { useState } from 'react'

export default function MarketplacePage() {
  const listings = [
    {
      id: 1,
      koperasi: 'KUD Sleman Makmur',
      asal: 'Sleman, DIY',
      grade: 'A',
      harga: 8500,
      stok: 12,
      minOrder: 2,
      deskripsi: 'Salak pondoh super, ukuran seragam, siap ekspor',
      sertifikasi: 'GAP Certified'
    },
    {
      id: 2,
      koperasi: 'Koperasi Tani Magelang',
      asal: 'Magelang, Jateng',
      grade: 'A',
      harga: 8200,
      stok: 18,
      minOrder: 5,
      deskripsi: 'Salak pondoh grade ekspor, packaging standar internasional',
      sertifikasi: 'GAP Certified'
    },
    {
      id: 3,
      koperasi: 'Gapoktan Bantul Sejahtera',
      asal: 'Bantul, DIY',
      grade: 'B',
      harga: 6500,
      stok: 25,
      minOrder: 3,
      deskripsi: 'Salak pondoh grade B, cocok untuk pasar retail Asia',
      sertifikasi: 'Internal Verified'
    },
    {
      id: 4,
      koperasi: 'KUD Banjarnegara Maju',
      asal: 'Banjarnegara, Jateng',
      grade: 'A',
      harga: 9000,
      stok: 8,
      minOrder: 2,
      deskripsi: 'Salak banjarnegara premium, rasa manis khas dataran tinggi',
      sertifikasi: 'GAP Certified'
    },
    {
      id: 5,
      koperasi: 'Koperasi Salak Merapi',
      asal: 'Sleman, DIY',
      grade: 'B',
      harga: 6800,
      stok: 30,
      minOrder: 5,
      deskripsi: 'Salak lereng Merapi, volume besar tersedia, harga kompetitif',
      sertifikasi: 'Internal Verified'
    },
    {
      id: 6,
      koperasi: 'Gapoktan Wonosobo Hijau',
      asal: 'Wonosobo, Jateng',
      grade: 'A',
      harga: 8800,
      stok: 15,
      minOrder: 3,
      deskripsi: 'Salak dataran tinggi Wonosobo, aroma kuat, ekspor ready',
      sertifikasi: 'GAP Certified'
    },
  ]

  const [activeGrade, setActiveGrade] = useState('SEMUA')
  const [activeFilter, setActiveFilter] = useState('SEMUA')

  const filtered = listings.filter(l => {
    const gradeOk = activeGrade === 'SEMUA' || l.grade === activeGrade
    const asalOk = activeFilter === 'SEMUA' || l.asal.includes(activeFilter)
    return gradeOk && asalOk
  })

  return (
    <main style={{ background: '#080806', minHeight: '100vh', color: '#F2EDE4' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .req-btn {
          background: rgba(184,115,51,0.08);
          transition: background 0.2s ease;
        }
        .req-btn:hover {
          background: rgba(184,115,51,0.15) !important;
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
            { n: 'MARKETPLACE', act: true, href: '/marketplace' },
            { n: 'PETANI', act: false, href: '/petani' },
            { n: 'TOKEN', act: false, href: '/token' }
          ].map(link => (
            <div 
              key={link.n}
              onClick={() => window.location.href = link.href}
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
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#22c55e' }}>
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
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <img src="/background/gudang.jpeg" alt="Gudang" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(8,8,6,0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to top, rgba(8,8,6,1) 0%, rgba(8,8,6,0.4) 50%, transparent 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 3, padding: '56px 60px 64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
            {/* KIRI */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(184,115,51,0.6)', textTransform: 'uppercase' }}>
                  MARKETPLACE &middot; B2B EKSPOR GRADE
                </span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(56px, 7vw, 88px)', color: '#F2EDE4', lineHeight: 0.9, margin: 0 }}>
                <div>Pasar langsung.</div>
                <div style={{ fontStyle: 'italic', color: 'rgba(242,237,228,0.4)' }}>Harga transparan.</div>
              </h1>
              <div style={{ marginTop: '20px', fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.3)', lineHeight: 1.8, maxWidth: '380px' }}>
                Beli salak ekspor grade langsung dari koperasi tani Indonesia &mdash; tanpa perantara, pembayaran via $SALAK atau transfer.
              </div>
            </div>
            
            {/* KANAN */}
            <div>
              <div style={{ border: '0.5px solid rgba(184,115,51,0.3)', padding: '8px 20px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: 'rgba(184,115,51,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  EKSPOR GRADE &middot; GAP CERTIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <section style={{
        background: '#080806',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 0
      }}>
        {[
          { label: 'LISTING AKTIF', val: '6', unit: 'koperasi' },
          { label: 'VOLUME TERSEDIA', val: '108', unit: 'ton salak' },
          { label: 'HARGA TERENDAH', val: 'Rp 6.500', unit: 'per kg grade B' },
          { label: 'TRANSAKSI BULAN INI', val: '47', unit: 'order selesai' }
        ].map((c, i) => (
          <div key={c.label} style={{ padding: '24px 40px', borderRight: i !== 3 ? '0.5px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.18em', opacity: 0.18, marginBottom: '10px' }}>
              {c.label}
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(32px, 3vw, 44px)', color: '#D4956A', lineHeight: 1 }}>
              {c.val}
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.15, marginTop: '4px' }}>
              {c.unit}
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 3 — FILTER + GRID */}
      <section style={{ background: '#080806', padding: '64px 60px', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '32px' }}>
          {/* KIRI */}
          <div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '12px', textTransform: 'uppercase' }}>
              LISTING TERSEDIA
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '32px', color: '#F2EDE4' }}>
              {filtered.length} koperasi ditemukan
            </div>
          </div>

          {/* KANAN - FILTERS */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Filter Grade */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, alignSelf: 'center', marginRight: '4px', textTransform: 'uppercase' }}>
                GRADE:
              </div>
              {['SEMUA', 'A', 'B'].map(g => (
                <div key={g} 
                  onClick={() => setActiveGrade(g)}
                  style={{
                    padding: '5px 12px', borderRadius: '2px', border: '0.5px solid',
                    borderColor: activeGrade === g ? 'rgba(184,115,51,0.5)' : 'rgba(255,255,255,0.06)',
                    color: activeGrade === g ? '#D4956A' : 'rgba(242,237,228,0.25)',
                    background: activeGrade === g ? 'rgba(184,115,51,0.08)' : 'transparent',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '9px', cursor: 'pointer'
                  }}
                >
                  {g}
                </div>
              ))}
            </div>

            {/* Filter Asal */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginLeft: '16px' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, alignSelf: 'center', marginRight: '4px', textTransform: 'uppercase' }}>
                ASAL:
              </div>
              {['SEMUA', 'DIY', 'Jateng'].map(a => (
                <div key={a} 
                  onClick={() => setActiveFilter(a)}
                  style={{
                    padding: '5px 12px', borderRadius: '2px', border: '0.5px solid',
                    borderColor: activeFilter === a ? 'rgba(184,115,51,0.5)' : 'rgba(255,255,255,0.06)',
                    color: activeFilter === a ? '#D4956A' : 'rgba(242,237,228,0.25)',
                    background: activeFilter === a ? 'rgba(184,115,51,0.08)' : 'transparent',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '9px', cursor: 'pointer'
                  }}
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.04)', marginTop: '24px' }}>
          {filtered.map(l => (
            <div key={l.id} style={{ background: '#080806', padding: '32px' }}>
              {/* Baris Atas */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  background: l.grade === 'A' ? 'rgba(184,115,51,0.1)' : 'rgba(255,255,255,0.04)',
                  color: l.grade === 'A' ? '#D4956A' : 'rgba(242,237,228,0.4)',
                  border: l.grade === 'A' ? '0.5px solid rgba(184,115,51,0.3)' : '0.5px solid rgba(255,255,255,0.08)',
                  padding: '3px 10px', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '9px'
                }}>
                  Grade {l.grade}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15 }}>
                  {l.sertifikasi}
                </div>
              </div>

              {/* Nama + Asal */}
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '22px', color: '#F2EDE4', marginBottom: '4px', lineHeight: 1.2 }}>
                {l.koperasi}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.25, marginBottom: '20px' }}>
                ◎ {l.asal}
              </div>

              {/* Deskripsi */}
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', opacity: 0.3, lineHeight: 1.7, marginBottom: '24px' }}>
                {l.deskripsi}
              </div>

              {/* Divider */}
              <div style={{ borderBottom: '0.5px solid rgba(255,255,255,0.04)', marginBottom: '20px' }} />

              {/* Harga */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '14px', color: '#D4956A' }}>
                  Rp {l.harga.toLocaleString('id-ID')}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', opacity: 0.3 }}>
                  /kg
                </div>
              </div>

              {/* Info Bawah */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.2 }}>
                  Stok: {l.stok} ton
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', opacity: 0.2 }}>
                  Min. {l.minOrder} ton
                </div>
              </div>

              {/* Tombol Request */}
              <button className="req-btn" style={{
                width: '100%', padding: '12px',
                border: '0.5px solid rgba(184,115,51,0.25)', color: 'rgba(184,115,51,0.7)',
                fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em',
                borderRadius: '2px', cursor: 'pointer'
              }}>
                REQUEST ORDER &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — CARA KERJA */}
      <section style={{ background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.2, letterSpacing: '0.2em', marginBottom: '16px', textTransform: 'uppercase' }}>
            SECTION 04 &middot; CARA KERJA
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>
            Tiga langkah,
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>
            salak sampai ke tanganmu.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
          {/* Step 1 */}
          <div style={{ background: '#080806', padding: '40px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '48px', color: 'rgba(184,115,51,0.2)', marginBottom: '24px' }}>01</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '24px', color: '#F2EDE4' }}>Pilih Listing</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.3, lineHeight: 1.7, marginTop: '12px' }}>
              Pilih koperasi, grade, dan volume yang sesuai kebutuhan ekspor Anda.
            </div>
          </div>
          {/* Step 2 */}
          <div style={{ background: '#080806', padding: '40px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '48px', color: 'rgba(184,115,51,0.2)', marginBottom: '24px' }}>02</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '24px', color: '#F2EDE4' }}>Submit Request</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.3, lineHeight: 1.7, marginTop: '12px' }}>
              Isi form kebutuhan volume, jadwal pengiriman, dan tujuan ekspor.
            </div>
          </div>
          {/* Step 3 */}
          <div style={{ background: '#080806', padding: '40px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '48px', color: 'rgba(184,115,51,0.2)', marginBottom: '24px' }}>03</div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '24px', color: '#F2EDE4' }}>Bayar &amp; Terima</div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', opacity: 0.3, lineHeight: 1.7, marginTop: '12px' }}>
              Pembayaran via $SALAK token atau transfer &mdash; salak dikirim dari gudang terverifikasi.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA FOOTER */}
      <section style={{
        background: '#080806', padding: '96px 60px', borderTop: '0.5px solid rgba(255,255,255,0.06)',
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', letterSpacing: '0.25em', opacity: 0.15, marginBottom: '24px', textTransform: 'uppercase' }}>
          BUTUH VOLUME CUSTOM?
        </div>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 6vw, 80px)', color: '#F2EDE4', lineHeight: 0.9, marginBottom: 0 }}>
          Hubungi tim kami
        </div>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 6vw, 80px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic', marginBottom: 0 }}>
          untuk negosiasi langsung.
        </div>
        
        <div style={{ marginTop: '24px', marginBottom: '40px', fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.25)', lineHeight: 1.8, maxWidth: '400px' }}>
          Volume di atas 50 ton? Kami siapkan dedicated sourcing manager untuk kebutuhan ekspor Anda.
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'rgba(184,115,51,0.9)', color: '#080806', border: 'none',
            fontFamily: 'var(--font-jetbrains)', fontSize: '11px', padding: '14px 32px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.2em', textTransform: 'uppercase'
          }}>
            HUBUNGI VIA WHATSAPP &rarr;
          </button>
          <button 
            onClick={() => window.location.href = '/hub'}
            style={{
              background: 'transparent', color: 'rgba(242,237,228,0.4)', border: '0.5px solid rgba(242,237,228,0.12)',
              fontFamily: 'var(--font-jetbrains)', fontSize: '11px', padding: '14px 32px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.2em', textTransform: 'uppercase'
            }}
          >
            LIHAT DASHBOARD &rarr;
          </button>
        </div>

        <div style={{ width: '100%', height: '0.5px', background: 'rgba(255,255,255,0.04)', marginTop: '64px', marginBottom: '28px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.12 }}>
            &copy; 2026 Daulat Salak &middot; B2B Marketplace
          </div>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.1, letterSpacing: '0.12em' }}>
            POLYGON NETWORK &middot; ERC-20
          </div>
        </div>
      </section>

    </main>
  )
}
