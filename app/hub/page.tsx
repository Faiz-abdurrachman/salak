"use client"
import React from 'react'
import Image from 'next/image'
import clusterBg from '../../background/layer-3-cluster.jpg'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function HubPage() {
  const priceData = [
    { date: '1 Mar', salak: 3200, ekspor: 42000, token: 14200 },
    { date: '5 Mar', salak: 3100, ekspor: 43500, token: 14800 },
    { date: '10 Mar', salak: 3400, ekspor: 44000, token: 15200 },
    { date: '15 Mar', salak: 3000, ekspor: 41000, token: 13900 },
    { date: '20 Mar', salak: 3600, ekspor: 45000, token: 15800 },
    { date: '25 Mar', salak: 3200, ekspor: 44500, token: 15400 },
    { date: '1 Apr', salak: 3500, ekspor: 45000, token: 15000 },
  ]

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

      {/* 5. SECTION 3: HARGA & MARKET */}
      <section style={{
        background: '#080806',
        padding: '96px 60px',
        borderTop: '0.5px solid rgba(255,255,255,0.04)'
      }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px', flexWrap: 'wrap', gap: '32px' }}>
          {/* Kiri */}
          <div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', letterSpacing: '0.2em', opacity: 0.2, marginBottom: '16px', textTransform: 'uppercase' }}>
              SECTION 03 &middot; HARGA & MARKET
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: '#F2EDE4', lineHeight: 0.9 }}>
              Harga real-time,
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(242,237,228,0.4)', lineHeight: 0.9, fontStyle: 'italic' }}>
              tanpa manipulasi.
            </div>
          </div>
          
          {/* Kanan */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'HARGA PETANI', val: 'Rp 3.500/kg', color: '#F2EDE4' },
              { label: 'HARGA EKSPOR', val: 'Rp 45.000/kg', color: '#D4956A' },
              { label: 'HARGA TOKEN', val: 'Rp 15.000', color: '#F2EDE4' }
            ].map(p => (
              <div key={p.label} style={{ border: '0.5px solid rgba(255,255,255,0.06)', padding: '12px 20px', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '7px', opacity: 0.2, letterSpacing: '0.15em', marginBottom: '6px' }}>
                  {p.label}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: p.color }}>
                  {p.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEGEND */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {[
            { dot: '#2d7a5f', lab: 'Harga Petani (Rp/kg)' },
            { dot: '#D4956A', lab: 'Harga Ekspor (Rp/kg)' },
            { dot: 'rgba(242,237,228,0.4)', lab: 'Harga Token $SALAK' }
          ].map(lg => (
            <div key={lg.lab} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: lg.dot }} />
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.4 }}>
                {lg.lab}
              </div>
            </div>
          ))}
        </div>

        {/* CHART */}
        <div style={{ width: '100%', height: '280px' }}>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={priceData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradSalak" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2d7a5f" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2d7a5f" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradEkspor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4956A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#D4956A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradToken" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F2EDE4" stopOpacity={0.08} />
                  <stop offset="95%" stopColor="#F2EDE4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tick={{ fontFamily: 'var(--font-jetbrains)', fontSize: 9, fill: 'rgba(242,237,228,0.2)', letterSpacing: 1 }}
                axisLine={false} 
                tickLine={false} 
              />
              <YAxis hide={true} />
              <Tooltip 
                contentStyle={{ background: '#0d0d0b', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px' }}
                labelStyle={{ color: 'rgba(242,237,228,0.4)' }}
                itemStyle={{ color: '#F2EDE4' }}
              />
              <Area type="monotone" dataKey="salak" stroke="#2d7a5f" strokeWidth={1.5} fill="url(#gradSalak)" />
              <Area type="monotone" dataKey="ekspor" stroke="#D4956A" strokeWidth={1.5} fill="url(#gradEkspor)" />
              <Area type="monotone" dataKey="token" stroke="rgba(242,237,228,0.3)" strokeWidth={1} fill="url(#gradToken)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* CATATAN BAWAH CHART */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', opacity: 0.15 }}>
            Data bersumber dari transaksi aktual platform & oracle on-chain &middot; Diperbarui setiap 5 menit
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {['1D', '1W', '1M', 'ALL'].map(tm => (
              <div key={tm} style={{ 
                fontFamily: 'var(--font-jetbrains)', fontSize: '9px', padding: '4px 10px',
                color: tm === '1M' ? '#D4956A' : '#F2EDE4',
                opacity: tm === '1M' ? 1 : 0.2,
                cursor: 'pointer'
              }}>
                {tm}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
