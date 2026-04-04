"use client"
import React, { useState, useEffect, useRef } from 'react'
import { 
  AreaChart, Area, XAxis, YAxis,
  Tooltip, ResponsiveContainer
} from 'recharts'

const chartData = [
  {date:'1 Mar',price:14200},
  {date:'3 Mar',price:14500},
  {date:'5 Mar',price:14100},
  {date:'7 Mar',price:14800},
  {date:'9 Mar',price:15200},
  {date:'11 Mar',price:14900},
  {date:'13 Mar',price:15100},
  {date:'15 Mar',price:15400},
  {date:'17 Mar',price:15000},
  {date:'19 Mar',price:15300},
  {date:'21 Mar',price:15600},
  {date:'23 Mar',price:15200},
  {date:'25 Mar',price:15800},
  {date:'27 Mar',price:15500},
  {date:'29 Mar',price:15000},
  {date:'31 Mar',price:15000},
]

export default function BuyPage() {
  const [amount, setAmount] = useState(10)
  const [period, setPeriod] = useState('1M')
  const [walletStep, setWalletStep] = useState('idle')
  // idle | selecting | connecting | connected | success
  const [selectedWallet, setSelectedWallet] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <style>{`
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 2px;
          border-radius: 1px;
          outline: none;
          cursor: pointer;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #D4956A;
          border: 2px solid #080806;
          box-shadow: 0 0 0 1px rgba(184,115,51,0.5);
          cursor: grab;
        }
        input[type='range']::-webkit-slider-thumb:active {
          cursor: grabbing;
        }
        @keyframes spinWallet {
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (min-width: 900px) {
          .main-grid {
            grid-template-columns: 1fr 380px !important;
          }
        }
      `}</style>

      {/* BACKGROUND HALAMAN */}
      <div style={{
        minHeight: '100vh',
        background: '#080806',
        color: '#F2EDE4',
        fontFamily: 'var(--font-syne)',
        overflowX: 'hidden'
      }}>
        
        {/* NAVBAR */}
        <div style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 200,
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: 'rgba(8,8,6,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '0.5px solid rgba(255,255,255,0.05)',
          boxSizing: 'border-box'
        }}>
          {/* Kiri */}
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            onClick={() => window.location.href = '/token'}
            onMouseEnter={(e) => {
              const el = e.currentTarget.querySelector('.nav-text') as HTMLElement;
              if (el) el.style.color = 'rgba(242,237,228,0.7)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget.querySelector('.nav-text') as HTMLElement;
              if (el) el.style.color = 'rgba(242,237,228,0.4)';
            }}
          >
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(184,115,51,0.5)' }}>&larr;</span>
            <span className="nav-text" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(242,237,228,0.4)', transition: '0.2s' }}>
              $SALAK
            </span>
          </div>
          
          {/* Kanan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4CAF50', animation: 'pulseGreen 2s infinite' }} />
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.35)' }}>
              LIVE &middot; POLYGON
            </div>
          </div>
        </div>

        {/* LAYOUT UTAMA */}
        <div 
          className="main-grid"
          style={{
            paddingTop: '52px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            minHeight: '100vh',
            boxSizing: 'border-box'
          }}
        >
          {/* KOLOM KIRI */}
          <div style={{
            padding: '48px 48px 48px 56px',
            borderRight: '0.5px solid rgba(255,255,255,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            boxSizing: 'border-box'
          }}>
            
            {/* BLOK 1: TOKEN IDENTITY */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(242,237,228,0.2)', marginBottom: '10px' }}>
                    DAULAT SALAK &middot; RWA TOKEN
                  </div>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: 'clamp(56px, 6vw, 80px)', color: '#F2EDE4', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                    $SALAK
                  </div>
                </div>
                
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 6vw, 72px)', color: '#D4956A', lineHeight: 1 }}>
                    Rp 15.000
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(72,199,142,0.06)', border: '0.5px solid rgba(72,199,142,0.2)', padding: '6px 12px', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(72,199,142,0.9)' }}>
                    <span style={{ fontSize: '8px' }}>▲</span> 2.4% (24j)
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.1em', marginTop: '6px' }}>
                    1 token = 1 kg salak ekspor
                  </div>
                  
                  {/* Period Pills moved here for right-alignment under price */}
                  <div style={{ display: 'flex', gap: '6px', marginTop: '24px' }}>
                    {['1D','1W','1M','ALL'].map(p => (
                      <button
                        key={p}
                        onClick={() => setPeriod(p)}
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          fontSize: '10px',
                          textTransform: 'uppercase',
                          padding: '8px 14px',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          transition: '0.15s',
                          background: period === p ? 'rgba(184,115,51,0.12)' : 'transparent',
                          border: period === p ? '0.5px solid rgba(184,115,51,0.3)' : '0.5px solid rgba(255,255,255,0.04)',
                          color: period === p ? '#D4956A' : 'rgba(242,237,228,0.15)'
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BLOK 2: CHART */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ height: '240px', margin: '0 -8px', marginTop: '12px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B87333" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#B87333" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide={true} />
                    <YAxis hide={true} domain={['dataMin - 500', 'dataMax + 500']} />
                    <Tooltip 
                      cursor={{ stroke: 'rgba(184,115,51,0.2)', strokeWidth: 1 }}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div style={{
                              background: 'rgba(8,8,6,0.95)',
                              border: '0.5px solid rgba(184,115,51,0.25)',
                              borderRadius: '4px',
                              padding: '8px 12px'
                            }}>
                              <div style={{
                                fontFamily: 'var(--font-jetbrains)',
                                fontSize: '9px',
                                color: 'rgba(242,237,228,0.3)',
                                letterSpacing: '0.1em',
                                marginBottom: '3px'
                              }}>{label}</div>
                              <div style={{
                                fontFamily: 'var(--font-jetbrains)',
                                fontSize: '14px',
                                color: '#D4956A'
                              }}>Rp {payload[0].value?.toLocaleString('id-ID')}</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#B87333" 
                      strokeWidth={1.5} 
                      fill="url(#goldGrad)" 
                      dot={false}
                      activeDot={{ r: 3, fill: '#D4956A', strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* BLOK 3: STATS ROW */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '6px',
              overflow: 'hidden'
            }}>
              {[
                { label: 'MARKET CAP', val: 'Rp [TBD]' },
                { label: 'SUPPLY', val: '[TBD]' },
                { label: 'BACKING', val: '1:1 fisik' },
                { label: 'NETWORK', val: 'Polygon' }
              ].map((s, i) => (
                <div key={i} style={{ background: '#080806', padding: '16px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(242,237,228,0.18)', marginBottom: '6px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: 'rgba(242,237,228,0.6)' }}>
                    {s.val}
                  </div>
                </div>
              ))}
            </div>

            {/* BLOK 4: PROOF STRIP */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              background: 'rgba(184,115,51,0.03)',
              border: '0.5px solid rgba(184,115,51,0.08)',
              borderRadius: '6px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B87333', opacity: 0.6 }} />
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.3)' }}>
                  Gudang terverifikasi &middot; Stok aktif
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(184,115,51,0.4)', cursor: 'pointer' }}>
                Lihat Proof &rarr;
              </div>
            </div>

          </div>

          {/* KOLOM KANAN — BUY PANEL */}
          <div style={{
            padding: '48px 40px',
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            background: 'rgba(242,237,228,0.01)',
            minHeight: 'calc(100vh - 52px)',
            height: 'auto',
            overflowY: 'visible',
            boxSizing: 'border-box'
          }}>
            
            {/* PANEL HEADER */}
            <div style={{ marginBottom: '32px' }}>
              {(walletStep === 'connected' || walletStep === 'success') && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
                  background: 'rgba(72,199,142,0.06)', border: '0.5px solid rgba(72,199,142,0.15)',
                  borderRadius: '4px', marginBottom: '20px'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50' }} />
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(72,199,142,0.7)' }}>
                    0x1a2b...9f3e &middot; Connected
                  </div>
                </div>
              )}

              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#F2EDE4', lineHeight: 1.1, marginBottom: '4px' }}>
                {walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting' ? 'Beli $SALAK' : 
                 walletStep === 'connected' ? 'Konfirmasi Pembelian' : 
                 'Berhasil dibeli'}
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.25)', lineHeight: 1.6 }}>
                {walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting' ? 'Harga saat ini: Rp 15.000 / token' : 
                 walletStep === 'connected' ? 'Tinjau total transaksi Anda' : 
                 'Aset Anda sedang diproses on-chain'}
              </div>
            </div>

            {/* SLIDER AMOUNT */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '48px', color: '#D4956A', lineHeight: 1 }}>
                  {amount}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: 'rgba(242,237,228,0.3)' }}>
                  $SALAK token
                </div>
              </div>
              
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #B87333 0%, #B87333 ${amount}%, rgba(242,237,228,0.08) ${amount}%, rgba(242,237,228,0.08) 100%)`
                }}
              />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: 'rgba(242,237,228,0.15)', marginTop: '6px' }}>
                <div>1 token</div>
                <div>100 token</div>
              </div>
            </div>

            {/* KALKULASI */}
            <div style={{
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              borderTop: '0.5px solid rgba(255,255,255,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.2)' }}>
                  BACKING FISIK
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'rgba(242,237,228,0.55)' }}>
                  {amount} kg salak
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.2)' }}>
                  HARGA PETANI
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'rgba(242,237,228,0.55)' }}>
                  Rp {(amount*15000).toLocaleString('id-ID')}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.2)' }}>
                  NILAI EKSPOR
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'rgba(242,237,228,0.55)' }}>
                  Rp {(amount*45000).toLocaleString('id-ID')}
                </div>
              </div>

              {/* Total row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.4)' }}>
                  Total
                </div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '32px', color: '#D4956A' }}>
                  Rp {(amount*15000).toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* TOMBOL UTAMA & WALLET FLOW */}
            <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
              
              {/* STATE: idle */}
              {(walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting') && (
                <>
                  <button 
                    onClick={() => setShowModal(true)}
                    style={{
                      width: '100%', padding: '15px', background: 'rgba(184,115,51,0.12)', border: '1px solid rgba(184,115,51,0.35)', color: '#D4956A',
                      fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', borderRadius: '4px', cursor: 'pointer',
                      transition: '0.2s', boxSizing: 'border-box'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(184,115,51,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(184,115,51,0.12)'}
                  >
                    Hubungkan Wallet
                  </button>
                  <button style={{
                    width: '100%', padding: '12px', background: 'transparent', border: '0.5px solid rgba(255,255,255,0.06)', color: 'rgba(242,237,228,0.25)',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', borderRadius: '4px', cursor: 'pointer', boxSizing: 'border-box'
                  }}>
                    Transfer Bank (IDR)
                  </button>
                </>
              )}

              {/* STATE: connected */}
              {walletStep === 'connected' && (
                <button 
                  onClick={() => {
                    setWalletStep('success');
                    setShowModal(false);
                  }}
                  style={{
                    width: '100%', padding: '15px', background: 'linear-gradient(135deg, #B87333 0%, #D4956A 100%)', color: '#080806',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', borderRadius: '4px', border: 'none', cursor: 'pointer', boxSizing: 'border-box'
                  }}
                >
                  Konfirmasi Beli {amount} $SALAK
                </button>
              )}

              {/* STATE: success */}
              {walletStep === 'success' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{
                    background: 'rgba(72,199,142,0.06)', border: '0.5px solid rgba(72,199,142,0.2)', borderRadius: '6px', padding: '20px', textAlign: 'center'
                  }}>
                    <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '36px', color: 'rgba(72,199,142,0.8)' }}>
                      {amount} $SALAK
                    </div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', color: 'rgba(242,237,228,0.4)', marginTop: '6px' }}>
                      Berhasil dibeli &middot; Menunggu konfirmasi on-chain
                    </div>
                  </div>
                  <button style={{
                    width: '100%', padding: '12px', background: 'transparent', border: '0.5px solid rgba(72,199,142,0.2)', color: 'rgba(72,199,142,0.5)',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', boxSizing: 'border-box'
                  }}>
                    Lihat di Explorer &nearr;
                  </button>
                </div>
              )}

              <div style={{
                fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(242,237,228,0.1)', textAlign: 'center', lineHeight: 1.6, marginTop: '12px'
              }}>
                Demo UI &middot; Transaksi belum aktif
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WALLET MODAL */}
      {showModal && (
        <div style={{ zIndex: 9999 }}>
          {/* Overlay */}
          <div 
            onClick={() => {
              if (walletStep !== 'connecting') setShowModal(false);
            }}
            style={{
              position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(8,8,6,0.85)', backdropFilter: 'blur(8px)'
            }} 
          />
          
          {/* Modal */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed', zIndex: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '360px', background: '#0f0c08', border: '0.5px solid rgba(184,115,51,0.2)', borderRadius: '12px', padding: '32px 28px', boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '16px', fontWeight: 500, color: '#F2EDE4' }}>
                Pilih Wallet
              </div>
              <button 
                onClick={() => {
                  if (walletStep !== 'connecting') setShowModal(false);
                }}
                style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '18px', color: 'rgba(242,237,228,0.3)', background: 'transparent', border: 'none', cursor: 'pointer', lineHeight: 1 }}
              >
                &times;
              </button>
            </div>

            {walletStep === 'connecting' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '20px 0' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', border: '2px solid rgba(184,115,51,0.15)', borderTop: '2px solid #B87333', animation: 'spinWallet 1s linear infinite'
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', color: 'rgba(242,237,228,0.5)' }}>
                    Menghubungkan ke {selectedWallet}...
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.1em', marginTop: '6px' }}>
                    Konfirmasi di wallet kamu
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {[
                  { name: 'MetaMask', sub: 'Browser extension', bg: 'rgba(246,133,27,0.12)', dot: '#F6851B' },
                  { name: 'WalletConnect', sub: 'Mobile · QR code', bg: 'rgba(59,153,252,0.12)', dot: '#3B99FC' },
                  { name: 'Coinbase', sub: 'Coinbase wallet', bg: 'rgba(0,82,255,0.12)', dot: '#0052FF' }
                ].map((w, i) => (
                  <div 
                    key={i}
                    onClick={() => {
                      setSelectedWallet(w.name)
                      setWalletStep('connecting')
                      setTimeout(() => {
                        setWalletStep('connected')
                        setShowModal(false)
                      }, 1800)
                    }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', borderRadius: '6px', cursor: 'pointer', marginBottom: '8px', transition: '0.15s',
                      background: selectedWallet === w.name ? 'rgba(184,115,51,0.1)' : 'rgba(242,237,228,0.03)',
                      border: selectedWallet === w.name ? '0.5px solid rgba(184,115,51,0.3)' : '0.5px solid rgba(242,237,228,0.07)'
                    }}
                    onMouseEnter={(e) => { if (selectedWallet !== w.name) e.currentTarget.style.background = 'rgba(242,237,228,0.05)' }}
                    onMouseLeave={(e) => { if (selectedWallet !== w.name) e.currentTarget.style.background = 'rgba(242,237,228,0.03)' }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: w.bg }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: w.dot }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 500, color: '#F2EDE4' }}>{w.name}</div>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.2)', marginTop: '2px' }}>{w.sub}</div>
                    </div>
                    {selectedWallet === w.name && (
                      <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#B87333' }}>✓</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div style={{
              marginTop: '20px', paddingTop: '16px', borderTop: '0.5px solid rgba(255,255,255,0.04)', textAlign: 'center',
              fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(242,237,228,0.12)', letterSpacing: '0.08em'
            }}>
              Aman &middot; Terenkripsi &middot; Non-custodial
            </div>
          </div>
        </div>
      )}
    </>
  )
}
