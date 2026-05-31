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
      {/* Top info bar — dark */}
      <div className="hidden border-b border-white/[0.06] bg-ink-900 lg:block">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-16">
          <div className="flex items-center gap-6 text-[12px] text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-3 w-3 fill-none stroke-current" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" />
              </svg>
              Pluhová 2, 831 03 Bratislava
            </span>
            <span>Po–Pi · 8:00–16:30</span>
          </div>
          <div className="flex items-center gap-5 font-[family-name:var(--font-ibm-plex-mono)] text-[11.5px] tracking-[0.02em] text-white/55">
            <span>+421 2 4488 1234</span>
            <a href="mailto:info@gastrade.sk" className="transition-colors hover:text-white">info@gastrade.sk</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-brand-2">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-16">

          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex items-center">
            <img
              src="/images/logo.png"
              alt="GAS Trade"
              className="h-[40px] w-auto object-contain lg:h-[60px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
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
                      className="group relative inline-flex items-center gap-1.5 py-8 text-[13.5px] font-medium text-white"
                    >
                      {link.label}
                      <svg
                        className={['h-3 w-3 transition-transform duration-200', megaOpen ? 'rotate-180' : ''].join(' ')}
                        viewBox="0 0 20 20" fill="none"
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {/* Underline — scales from right to left on hover */}
                      <span
                        className={[
                          'absolute bottom-5 left-0 right-0 h-[2px] origin-right scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100',
                          megaOpen ? 'origin-left scale-x-100' : '',
                        ].join(' ')}
                      />
                    </Link>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-8 text-[13.5px] font-medium text-white"
                >
                  {link.label}
                  {/* Underline — scales from right to left on hover */}
                  <span className="absolute bottom-7 left-0 right-0 h-[2px] origin-right scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
            className="hidden h-9 items-center gap-2 rounded-[4px] border border-white/30 px-5 text-[13px] font-medium text-white transition-all hover:border-white hover:bg-white/10 lg:inline-flex"
          >
            Cenová ponuka
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Zatvoriť menu' : 'Otvoriť menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.15] lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={['absolute left-0 top-0 h-[1.5px] w-5 bg-white transition-all duration-300', mobileOpen ? 'top-[7.5px] rotate-45' : ''].join(' ')} />
              <span className={['absolute left-0 top-[7.5px] h-[1.5px] w-5 bg-white transition-all duration-300', mobileOpen ? 'opacity-0' : 'opacity-100'].join(' ')} />
              <span className={['absolute left-0 top-[15px] h-[1.5px] w-5 bg-white transition-all duration-300', mobileOpen ? 'top-[7.5px] -rotate-45' : ''].join(' ')} />
            </span>
          </button>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-full hidden border-b border-line bg-white shadow-[0_20px_60px_-8px_rgba(10,22,40,0.16)] lg:block"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <div className="mx-auto flex max-w-[1280px] px-16">
                {/* Left panel */}
                <div className="flex w-[200px] shrink-0 flex-col justify-between border-r border-line py-7 pr-8">
                  <div>
                    
                    <h3 className="mt-3 text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink-900">
                      Meranie a regulácia plynu.
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-ink-500">
                      Kompletný sortiment pre plynárenstvo, energetiku a priemysel.
                    </p>
                  </div>
                  <Link
                    href="/produkty"
                    className="mt-6 inline-flex h-9 items-center justify-center rounded-[4px] bg-brand px-4 text-[13px] font-semibold text-white transition-colors hover:bg-brand-2"
                  >
                    Všetky produkty →
                  </Link>
                </div>

                {/* Categories — 4 columns */}
                <div className="flex flex-1">
                  {[0, 1, 2, 3].map((col) => (
                    <div
                      key={col}
                      className={['flex flex-1 flex-col', col < 3 ? 'border-r border-line' : ''].join(' ')}
                    >
                      {CATEGORIES.slice(col * 4, col * 4 + 4).map((cat, row) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className={[
                            'group flex items-center justify-between px-5 py-[14px] transition-colors hover:bg-brand-tint',
                            row < 3 ? 'border-b border-line' : '',
                          ].join(' ')}
                        >
                          <span className="text-[13px] font-medium leading-snug text-ink-700 transition-colors group-hover:text-brand">
                            {cat.name}
                          </span>
                          <span className="ml-2 shrink-0 text-[11px] text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand">
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-[73px] z-40 h-[calc(100dvh-73px)] w-full overflow-y-auto bg-brand lg:hidden"
          >
            <div className="px-5 py-5 sm:px-8">
              {/* Contact info */}
              <div className="rounded-[6px] border border-white/[0.08] bg-white/[0.04] p-4">
                <p className="text-[13px] leading-[1.55] text-white/60">
                  Pluhová 2, 831 03 Bratislava<br />Po–Pi · 8:00–16:30
                </p>
                <div className="mt-3 flex flex-col gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] text-white/70">
                  <span>+421 2 4488 1234</span>
                  <span>info@gastrade.sk</span>
                </div>
              </div>

              <nav className="mt-5 flex flex-col border-t border-white/[0.08]">
                {NAV_LINKS.map((link) => {
                  if (link.hasMegaMenu) {
                    return (
                      <div key={link.href} className="border-b border-white/[0.08]">
                        <button
                          type="button"
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-white"
                        >
                          {link.label}
                          <svg
                            className={['h-4 w-4 text-white/60 transition-transform', mobileProductsOpen ? 'rotate-180' : ''].join(' ')}
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
                              transition={{ duration: 0.22, ease: 'easeOut' }}
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
                                    className="rounded-[5px] border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[14px] font-medium text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
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
                      className="border-b border-white/[0.08] py-4 text-[17px] font-semibold text-white transition-colors"
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