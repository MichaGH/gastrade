import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Domov', href: '/' },
  { label: 'Produkty', href: '/produkty' },
  { label: 'O spoločnosti', href: '/o-spolocnosti' },
  { label: 'Partnerské stránky', href: '/partnerske-stranky' },
  { label: 'Na stiahnutie', href: '/na-stiahnutie' },
  { label: 'Kontakt', href: '/kontakt' },
]

const PARTNER_SITES = [
  'pohony-aris.cz',
  'pohony-agromatic.cz',
  'plynomery.cz',
  'hongas.cz',
  'bapky.cz',
  'as-schneider.com',
]

export default function Footer() {
  return (
    <footer className="bg-[#0C1828] pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.08] pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="GAS Trade"
                className="h-[44px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-[260px] text-[13px] leading-[1.65] text-[#8B9AB2]">
              Dovoz, predaj a zastúpenie meracej a regulačnej techniky pre plynárenstvo, energetiku a priemysel. Slovenský dodávateľ od roku 2000.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h5 className="mb-5 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.1em] text-[#6F7F99]">
              Navigácia
            </h5>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#B7C2D4] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner sites */}
          <div>
            <h5 className="mb-5 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.1em] text-[#6F7F99]">
              Partnerské stránky
            </h5>
            <ul className="flex flex-col gap-2.5">
              {PARTNER_SITES.map((site) => (
                <li key={site}>
                  <a
                    href={`https://${site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#B7C2D4] transition-colors hover:text-white"
                  >
                    {site}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-5 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.1em] text-[#6F7F99]">
              Kontakt
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li className="text-[14px] leading-relaxed text-[#B7C2D4]">
                Pluhová 2<br />831 03 Bratislava
              </li>
              <li>
                <a href="tel:+421244881234" className="text-[14px] text-[#B7C2D4] transition-colors hover:text-white">
                  +421 2 4488 1234
                </a>
              </li>
              <li>
                <a href="mailto:info@gastrade.sk" className="text-[14px] text-[#B7C2D4] transition-colors hover:text-white">
                  info@gastrade.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] tracking-[0.02em] text-[#6F7F99]">
            © 2025 GAS Trade, s.r.o. · IČO 35 763 421
          </span>
          <div className="flex gap-5 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] tracking-[0.02em] text-[#6F7F99]">
            <Link href="#" className="transition-colors hover:text-white">Ochrana osobných údajov</Link>
            <Link href="#" className="transition-colors hover:text-white">Cookies</Link>
            <Link href="#" className="transition-colors hover:text-white">Obchodné podmienky</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}