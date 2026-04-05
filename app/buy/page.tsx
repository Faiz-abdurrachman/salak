"use client"
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

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
  const [selectedWallet, setSelectedWallet] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080806; color: #F2EDE4; }
        input[type='range'] {
          -webkit-appearance: none;
          width: 100%;
          height: 1px;
          background: transparent;
          outline: none;
          cursor: pointer;
        }
        input[type='range']::-webkit-slider-runnable-track {
          height: 1px;
          border-radius: 1px;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #D4956A;
          border: 2px solid #080806;
          box-shadow: 0 0 0 1px rgba(184,115,51,0.5);
          cursor: grab;
          margin-top: -10px;
        }
        input[type='range']::-webkit-slider-thumb:active {
          cursor: grabbing;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .buy-grid {
          grid-template-columns: 1fr;
          gap: 60px;
        }
        @media (min-width: 900px) {
          .buy-grid {
            grid-template-columns: 1fr 1fr;
            gap: 120px;
          }
        }
      `}</style>

      {/* BAGIAN 1: NAVBAR */}
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
        <div 
          onClick={() => window.location.href = '/token'}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '24px', height: '24px', borderRadius: '50%',
            border: '0.5px solid rgba(242,237,228,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10px', color: 'rgba(242,237,228,0.3)'
          }}>
            &larr;
          </div>
          <div style={{
            fontFamily: 'var(--font-jetbrains)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.35)', transition: '0.2s'
          }}>
            $SALAK
          </div>
        </div>
        {/* Kanan */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.2)' }}>
            LIVE &middot; POLYGON
          </div>
        </div>
      </div>

      {/* BAGIAN 2: HERO */}
      <div style={{
        paddingTop: '56px',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '56px 60px 80px'
      }}>
        {/* Baris atas (kecil) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.2)' }}>
            DAULAT SALAK &middot; REAL WORLD ASSET &middot; 2025
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(34,197,94,0.08)', border: '0.5px solid rgba(34,197,94,0.2)',
              padding: '5px 12px', borderRadius: '2px', fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(34,197,94,0.7)', letterSpacing: '0.08em'
            }}>
              ▲ 2.4% (24 JAM)
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.1em' }}>
              1 $SALAK = 1 KG SALAK EKSPOR
            </div>
          </div>
        </div>

        {/* Baris utama (BESAR) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(80px, 12vw, 160px)', lineHeight: 0.85, letterSpacing: '-0.02em', color: '#F2EDE4' }}>
            $SALAK
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1, color: '#D4956A', textAlign: 'right' }}>
              Rp 15.000
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(242,237,228,0.15)', letterSpacing: '0.1em', textAlign: 'right', marginTop: '8px' }}>
              PER TOKEN &middot; HARGA PETANI
            </div>
          </div>
        </div>
      </div>

      {/* BAGIAN 3: CHART SECTION */}
      <div style={{ padding: '0 60px 80px', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0 24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.15)' }}>
            HARGA $SALAK &middot; 30 HARI TERAKHIR
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {['1D','1W','1M','ALL'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                style={{
                  fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '5px 12px', borderRadius: '2px', cursor: 'pointer', transition: '0.15s', outline: 'none',
                  background: period === p ? 'rgba(184,115,51,0.12)' : 'transparent',
                  color: period === p ? '#D4956A' : 'rgba(242,237,228,0.2)',
                  border: period === p ? '0.5px solid rgba(184,115,51,0.25)' : '0.5px solid rgba(255,255,255,0.05)'
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: '220px', margin: '0 -8px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="goldGradHero" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B87333" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#080806" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" hide={true} />
              <YAxis hide={true} domain={['dataMin - 800', 'dataMax + 800']} />
              <Tooltip 
                cursor={{ stroke: 'rgba(184,115,51,0.15)', strokeWidth: 1 }}
                contentStyle={{ background: 'rgba(8,8,6,0.95)', border: '0.5px solid rgba(184,115,51,0.2)', borderRadius: '4px', padding: '10px 14px', fontFamily: 'var(--font-jetbrains)' }}
                labelStyle={{ fontSize: '9px', color: 'rgba(242,237,228,0.25)', letterSpacing: '0.1em', marginBottom: '4px' }}
                itemStyle={{ fontSize: '14px', color: '#D4956A' }}
                formatter={(v: any) => [`Rp ${v?.toLocaleString('id-ID')}`, '']}
              />
              <Area type="monotone" dataKey="price" stroke="#B87333" strokeWidth={1.5} fill="url(#goldGradHero)" dot={false} activeDot={{ r: 4, fill: '#D4956A', strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAGIAN 4: STATS ROW */}
      <div style={{
        padding: '0 60px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 0,
        borderTop: '0.5px solid rgba(255,255,255,0.04)', borderBottom: '0.5px solid rgba(255,255,255,0.04)'
      }}>
        {[
          { label: 'MARKET CAP', val: 'Rp 3,7M' },
          { label: 'TOTAL SUPPLY', val: '1.000.000' },
          { label: 'BACKING RATIO', val: '1 : 1 fisik' },
          { label: 'NETWORK', val: 'Polygon (MATIC)' }
        ].map((s, i) => (
          <div key={i} style={{ padding: '28px 0', borderRight: i !== 3 ? '0.5px solid rgba(255,255,255,0.04)' : 'none', paddingLeft: i !== 0 ? '30px' : '0' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(242,237,228,0.15)', marginBottom: '10px' }}>
              {s.label}
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '14px', color: 'rgba(242,237,228,0.55)' }}>
              {s.val}
            </div>
          </div>
        ))}
      </div>

      {/* BAGIAN 5: BUY SECTION */}
      <div className="buy-grid" style={{ padding: '80px 60px 120px', display: 'grid', alignItems: 'start' }}>
        
        {/* KOLOM KIRI: NARASI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15, color: 'rgba(242,237,228,0.8)' }}>
            Setiap token yang kamu beli<br/>
            <span style={{ fontStyle: 'italic' }}>adalah 1 kg salak nyata.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { n: '01', t: 'Salak fisik dikunci di gudang terverifikasi untuk setiap token yang beredar' },
              { n: '02', t: 'Harga mengikuti harga petani — bukan harga spekulasi pasar kripto' },
              { n: '03', t: 'Token dapat dijual atau diredeem menjadi salak fisik kapan saja' }
            ].map(f => (
              <div key={f.n} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(184,115,51,0.4)', letterSpacing: '0.1em', minWidth: '20px', marginTop: '2px' }}>
                  {f.n}
                </div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', color: 'rgba(242,237,228,0.35)', lineHeight: 1.7 }}>
                  {f.t}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 0', borderTop: '0.5px solid rgba(255,255,255,0.04)', borderBottom: '0.5px solid rgba(255,255,255,0.04)' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B87333', opacity: 0.5 }} />
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.25)' }}>
              Gudang terverifikasi &middot; Data on-chain
            </div>
            <button style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(184,115,51,0.4)', background: 'transparent', border: 'none', cursor: 'pointer', marginLeft: 'auto' }}>
              Lihat Proof &rarr;
            </button>
          </div>
        </div>

        {/* KOLOM KANAN: BUY PANEL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ marginBottom: '40px' }}>
            {(walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting') ? (
              <>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.3)', marginBottom: '8px' }}>
                  JUMLAH TOKEN
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(56px, 6vw, 80px)', color: '#D4956A', lineHeight: 1 }}>
                    {amount}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '14px', color: 'rgba(242,237,228,0.25)' }}>
                    $SALAK
                  </div>
                </div>
              </>
            ) : walletStep === 'connected' ? (
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '40px', color: '#D4956A', lineHeight: 1 }}>Konfirmasi Pesanan</div>
            ) : (
              <></>
            )}

            {/* Slider only in idle state */}
            {(walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting') && (
              <>
                <div style={{ padding: '8px 0', marginBottom: '20px' }}>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, rgba(184,115,51,0.8) 0%, rgba(184,115,51,0.8) ${amount}%, rgba(255,255,255,0.06) ${amount}%, rgba(255,255,255,0.06) 100%)`
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-jetbrains)', fontSize: '9px', color: 'rgba(242,237,228,0.12)', letterSpacing: '0.08em', marginBottom: '40px' }}>
                  <div>1 token</div>
                  <div>100 token</div>
                </div>
              </>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '0.5px solid rgba(255,255,255,0.04)', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(242,237,228,0.2)' }}>BACKING FISIK</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.5)' }}>{amount} kg salak</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(242,237,228,0.2)' }}>HARGA PETANI</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.5)' }}>Rp {(amount*3500).toLocaleString('id-ID')}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '0.5px solid rgba(255,255,255,0.03)' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(242,237,228,0.2)' }}>NILAI EKSPOR</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.5)' }}>Rp {(amount*45000).toLocaleString('id-ID')}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '20px', marginBottom: '32px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', color: 'rgba(242,237,228,0.3)' }}>Total</div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '40px', color: '#D4956A' }}>Rp {(amount*15000).toLocaleString('id-ID')}</div>
            </div>
          </div>

          <div>
            {(walletStep === 'idle' || walletStep === 'selecting' || walletStep === 'connecting') && (
              <>
                <button 
                  onClick={() => setShowModal(true)}
                  style={{
                    width: '100%', padding: '18px', background: 'rgba(184,115,51,0.85)', border: 'none', color: '#080806', borderRadius: '3px',
                    fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', cursor: 'pointer', marginBottom: '10px', transition: '0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#B87333'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(184,115,51,0.85)'}
                >
                  Hubungkan Wallet
                </button>
                <button style={{
                  width: '100%', padding: '14px', background: 'transparent', border: 'none', borderTop: '0.5px solid rgba(255,255,255,0.04)', color: 'rgba(242,237,228,0.2)',
                  fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer'
                }}>
                  Transfer Bank (IDR)
                </button>
              </>
            )}

            {walletStep === 'connected' && (
              <>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '10px 14px',
                  background: 'rgba(34,197,94,0.06)', border: '0.5px solid rgba(34,197,94,0.15)', borderRadius: '3px'
                }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e' }} />
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: 'rgba(34,197,94,0.6)' }}>0x1a2b...9f3e &middot; Connected</div>
                </div>
                <button 
                  onClick={() => setWalletStep('success')}
                  style={{
                    width: '100%', padding: '18px', background: 'linear-gradient(135deg, #B87333 0%, #C8844A 50%, #D4956A 100%)', border: 'none', borderRadius: '3px',
                    color: '#080806', fontFamily: 'var(--font-jetbrains)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', cursor: 'pointer'
                  }}
                >
                  Beli {amount} $SALAK
                </button>
              </>
            )}

            {walletStep === 'success' && (
              <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '56px', color: 'rgba(34,197,94,0.7)', lineHeight: 1, marginBottom: '8px' }}>
                  {amount} $SALAK
                </div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: 'rgba(242,237,228,0.3)', marginBottom: '24px' }}>
                  Berhasil dibeli &middot; Menunggu konfirmasi
                </div>
                <button style={{
                  width: '100%', padding: '14px', background: 'transparent', border: '0.5px solid rgba(34,197,94,0.15)', color: 'rgba(34,197,94,0.4)',
                  fontFamily: 'var(--font-jetbrains)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', borderRadius: '3px', cursor: 'pointer'
                }}>
                  Lihat di Explorer &nearr;
                </button>
              </div>
            )}

            <div style={{
              fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(242,237,228,0.08)', letterSpacing: '0.05em', textAlign: 'center', lineHeight: 1.8, marginTop: '20px'
            }}>
              Demo UI &middot; Transaksi belum aktif<br/>Smart contract dalam pengembangan aktif
            </div>
          </div>
        </div>
      </div>

      {/* MODAL WALLET */}
      {showModal && (
        <div style={{ zIndex: 9999 }}>
          <div 
            onClick={() => setShowModal(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(8,8,6,0.9)', backdropFilter: 'blur(12px)' }} 
          />
          
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'fixed', zIndex: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '380px', background: '#0d0b09', border: '0.5px solid rgba(184,115,51,0.15)', borderRadius: '12px', padding: '36px 32px',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(184,115,51,0.5)', marginBottom: '6px' }}>HUBUNGKAN WALLET</div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '28px', color: '#F2EDE4' }}>Pilih wallet kamu</div>
              </div>
              <button onClick={() => setShowModal(false)} style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '16px', color: 'rgba(242,237,228,0.2)', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}>×</button>
            </div>

            {walletStep !== 'connecting' ? (
              <div>
                {[
                  { nama: 'MetaMask', sub: 'Browser · Extension', bg: 'rgba(246,133,27,0.1)', dot: '#F6851B' },
                  { nama: 'WalletConnect', sub: 'Mobile · QR Code', bg: 'rgba(59,153,252,0.1)', dot: '#3B99FC' },
                  { nama: 'Coinbase Wallet', sub: 'Coinbase Wallet', bg: 'rgba(0,82,255,0.1)', dot: '#0052FF' }
                ].map(w => (
                  <div 
                    key={w.nama}
                    onClick={() => {
                      setSelectedWallet(w.nama)
                      setWalletStep('connecting')
                      setTimeout(() => {
                        setWalletStep('connected')
                        setShowModal(false)
                      }, 1600)
                    }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 8px', borderBottom: '0.5px solid rgba(255,255,255,0.04)',
                      cursor: 'pointer', transition: '0.15s', borderRadius: '4px', margin: '0 -8px'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: w.bg }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: w.dot }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '15px', fontWeight: 500, color: 'rgba(242,237,228,0.7)', marginBottom: '3px' }}>{w.nama}</div>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.15)' }}>{w.sub}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: 'rgba(242,237,228,0.15)', marginLeft: 'auto' }}>&rarr;</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px 0 8px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid rgba(184,115,51,0.1)', borderTop: '1.5px solid #B87333', animation: 'spin 1s linear infinite' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '15px', color: 'rgba(242,237,228,0.5)' }}>Menghubungkan {selectedWallet}...</div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(242,237,228,0.15)', marginTop: '6px' }}>KONFIRMASI DI WALLET KAMU</div>
                </div>
              </div>
            )}

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '0.5px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-jetbrains)', fontSize: '8px', color: 'rgba(242,237,228,0.1)', letterSpacing: '0.08em', textAlign: 'center' }}>
              Aman &middot; Terenkripsi &middot; Non-custodial
            </div>
          </div>
        </div>
      )}
    </>
  )
}
