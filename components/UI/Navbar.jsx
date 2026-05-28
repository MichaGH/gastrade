'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Domov', href: '/', active: true },
  { label: 'Produkty', href: '/produkty', hasMegaMenu: true },
  { label: 'O spoločnosti', href: '/o-spolocnosti' },
  { label: 'Partnerské stránky', href: '/partnerske-stranky' },
  { label: 'Na stiahnutie', href: '/na-stiahnutie' },
  { label: 'Kontakt', href: '/kontakt' },
]

const CATEGORIES = [
  { name: 'Plynomery',                  href: '/produkty/plynomery' },
  { name: 'Regulátory tlaku plynu',     href: '/produkty/regulatory-tlaku-plynu' },
  { name: 'Bezpečnostné armatúry',      href: '/produkty/bezpecnostne-armatury' },
  { name: 'Tlakomery',                  href: '/produkty/tlakomery' },
  { name: 'Teplomery',                  href: '/produkty/teplomery' },
  { name: 'Plynové filtre',             href: '/produkty/plynove-filtre' },
  { name: 'Vodomery',                   href: '/produkty/vodomery' },
  { name: 'Monitorovacie zariadenia',   href: '/produkty/monitorovacie-zariadenia' },
  { name: 'Predohrev plynu',            href: '/produkty/predohrev-plynu' },
  { name: 'Armatúry',                   href: '/produkty/armatury' },
  { name: 'Servopohony',                href: '/produkty/servopohony' },
  { name: 'Pneupohony',                 href: '/produkty/pneupohony' },
  { name: 'Elektromagnetické ventily',  href: '/produkty/elektromagneticke-ventily' },
  { name: 'Plynomerové skrinky',        href: '/produkty/plynomerove-skrinky' },
  { name: 'Pulzné a obehové čerpadlá',  href: '/produkty/pulzne-a-obehove-cerpadla' },
  { name: 'Detektory plynu a plameňa',  href: '/produkty/detektory-plynu-a-plamena' },
]

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const closeTimer = useRef(null)

  const handleMegaEnter = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 80)
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-brand text-[13px] text-white">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between px-16">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <svg className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" />
              </svg>
              Pluhová 2, 831 03 Bratislava
            </span>
            <span>Po–Pi · 8:00–16:30</span>
          </div>
          <div className="flex items-center gap-5 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] tracking-[0.02em]">
            <span>+421 2 4488 1234</span>
            <span>info@gastrade.sk</span>
          </div>
        </div>
      </div>

      {/* Header — dark */}
      <header className="sticky top-0 z-50 bg-ink-900 border-b border-white/[0.07]">
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-16">

          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="GAS Trade"
              className="h-[42px] w-auto object-contain lg:h-[62px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 py-8 text-[14px] font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <svg
                        className={['h-3.5 w-3.5 transition-transform duration-200', megaOpen ? 'rotate-180' : ''].join(' ')}
                        viewBox="0 0 20 20" fill="none"
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative py-8 text-[14px] font-medium transition-colors',
                    link.active
                      ? 'text-white after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-0.5 after:bg-brand after:content-[""]'
                      : 'text-white/70 hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
            className="hidden h-10 items-center gap-2 rounded-[4px] border border-white/20 px-5 text-[14px] font-medium text-white/90 transition-colors hover:border-white/40 hover:text-white lg:inline-flex"
          >
            Cenová ponuka
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Zatvoriť menu' : 'Otvoriť menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/15 lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <span className={['absolute left-0 top-[3px] h-[2px] w-5 bg-white transition-all duration-300', mobileOpen ? 'top-[9px] rotate-45' : ''].join(' ')} />
              <span className={['absolute left-0 top-[9px] h-[2px] w-5 bg-white transition-all duration-300', mobileOpen ? 'opacity-0' : 'opacity-100'].join(' ')} />
              <span className={['absolute left-0 top-[15px] h-[2px] w-5 bg-white transition-all duration-300', mobileOpen ? 'top-[9px] -rotate-45' : ''].join(' ')} />
            </span>
          </button>
        </div>

        {/* ── Desktop mega menu — biely, kontrastuje s tmavým headerom ── */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-full hidden border-b border-line bg-white shadow-[0_24px_60px_-8px_rgba(14,27,46,0.18)] lg:block"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <div className="mx-auto flex max-w-[1280px] px-16">
                {/* Left panel */}
                <div className="flex w-[220px] shrink-0 flex-col justify-between border-r border-line py-8 pr-8">
                  <div>
                    <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.14em] text-brand">
                      16 kategórií
                    </span>
                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900">
                      Meranie a regulácia plynu.
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.6] text-ink-500">
                      Kompletný sortiment pre plynárenstvo, energetiku a priemysel.
                    </p>
                  </div>
                  <Link
                    href="/produkty"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-[4px] bg-brand px-4 text-[13px] font-semibold text-white transition-colors hover:bg-brand-2"
                  >
                    Všetky produkty →
                  </Link>
                </div>

                {/* Categories — 4 equal columns */}
                <div className="flex flex-1">
                  {[0, 1, 2, 3].map((col) => (
                    <div key={col} className={['flex flex-1 flex-col', col < 3 ? 'border-r border-line' : ''].join(' ')}>
                      {CATEGORIES.slice(col * 4, col * 4 + 4).map((cat, row) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className={[
                            'group flex items-center justify-between px-5 py-[15px] transition-colors hover:bg-brand-tint',
                            row < 3 ? 'border-b border-line' : '',
                          ].join(' ')}
                        >
                          <span className="text-[13.5px] font-medium leading-snug text-ink-800 transition-colors group-hover:text-brand">
                            {cat.name}
                          </span>
                          <span className="ml-2 shrink-0 text-[11px] text-ink-300 transition-colors group-hover:text-brand">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-[75px] z-40 h-[calc(100dvh-75px)] w-full overflow-y-auto bg-[#0E1B2E] lg:hidden"
          >
            <div className="px-5 py-5 sm:px-8">
              {/* Contact info block */}
              <div className="rounded-[6px] border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[13px] leading-[1.55] text-white/50">
                  Pluhová 2, 831 03 Bratislava<br />
                  Po–Pi · 8:00–16:30
                </p>
                <div className="mt-3 flex flex-col gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] text-white/70">
                  <span>+421 2 4488 1234</span>
                  <span>info@gastrade.sk</span>
                </div>
              </div>

              <nav className="mt-5 flex flex-col border-t border-white/10">
                {NAV_LINKS.map((link) => {
                  if (link.hasMegaMenu) {
                    return (
                      <div key={link.href} className="border-b border-white/10">
                        <button
                          type="button"
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-white"
                        >
                          {link.label}
                          <svg
                            className={['h-4 w-4 transition-transform text-white/50', mobileProductsOpen ? 'rotate-180' : ''].join(' ')}
                            viewBox="0 0 20 20" fill="none"
                          >
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.24, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-2 pb-4">
                                <Link
                                  href="/produkty"
                                  onClick={closeMobile}
                                  className="rounded-[5px] bg-brand px-4 py-3 text-[14px] font-semibold text-white"
                                >
                                  Všetky produkty
                                </Link>
                                {CATEGORIES.map((cat) => (
                                  <Link
                                    key={cat.href}
                                    href={cat.href}
                                    onClick={closeMobile}
                                    className="rounded-[5px] border border-white/10 bg-white/[0.05] px-4 py-3 text-[14px] font-semibold text-white/80 transition-colors hover:bg-white/10"
                                  >
                                    {cat.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={[
                        'border-b border-white/10 py-4 text-[17px] font-semibold transition-colors',
                        link.active ? 'text-brand' : 'text-white/80 hover:text-white',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <Link
                href="/kontakt"
                onClick={closeMobile}
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[4px] bg-brand px-5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2"
              >
                Cenová ponuka
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}