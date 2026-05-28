import Link from 'next/link'

const PRODUCTS = [
  'Plynomery',
  'Regulátory tlaku',
  'Bezpečnostné armatúry',
  'Vodomery',
  'Detektory plynu',
]

const COMPANY = ['O nás', 'Certifikáty', 'Referencie', 'Kariéra']

const PARTNER_SITES = [
  'pohony-aris.cz',
  'pohony-agromatic.cz',
  'plynomery.cz',
  'hongas.cz',
  'bapky.cz',
]

export default function Footer() {
  return (
    <footer className="bg-[#0C1828] text-[#B7C2D4] pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Grid */}
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand col */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand text-white grid place-items-center font-bold text-[18px] tracking-tight rounded-[3px]">
                G
              </div>
              <div className="font-bold text-[19px] tracking-tight leading-none text-white">
                GAS Trade
                <small className="block text-[11px] font-medium tracking-[0.08em] text-[#6F7F99] uppercase mt-0.5">
                  s.r.o.
                </small>
              </div>
            </Link>
            <p className="text-[13px] leading-[1.6] mt-5 max-w-[280px] text-[#8B9AB2]">
              Dovoz, predaj a zastúpenie meracej a regulačnej techniky pre plynárenstvo, energetiku a
              priemysel. Slovenský dodávateľ od roku 2000.
            </p>
          </div>

          {/* Products */}
          <div>
            <h5 className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] tracking-[0.1em] uppercase text-[#6F7F99] font-medium mb-5">
              Produkty
            </h5>
            <ul className="flex flex-col gap-2.5">
              {PRODUCTS.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] text-[#B7C2D4] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-[14px] text-[#B7C2D4] hover:text-white transition-colors">
                  Kompletný katalóg →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] tracking-[0.1em] uppercase text-[#6F7F99] font-medium mb-5">
              Spoločnosť
            </h5>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] text-[#B7C2D4] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner sites */}
          <div>
            <h5 className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] tracking-[0.1em] uppercase text-[#6F7F99] font-medium mb-5">
              Partnerské stránky
            </h5>
            <ul className="flex flex-col gap-2.5">
              {PARTNER_SITES.map((site) => (
                <li key={site}>
                  <a
                    href={`https://${site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#B7C2D4] hover:text-white transition-colors"
                  >
                    {site}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] tracking-[0.1em] uppercase text-[#6F7F99] font-medium mb-5">
              Kontakt
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li className="text-[14px] text-[#B7C2D4] leading-relaxed">
                Pluhová 2
                <br />
                831 03 Bratislava
              </li>
              <li className="text-[14px] text-[#B7C2D4]">+421 2 4488 1234</li>
              <li className="text-[14px] text-[#B7C2D4]">info@gastrade.sk</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between pt-7 text-[12px] text-[#6F7F99] font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.02em]">
          <span>© 2025 GAS Trade, s.r.o. · IČO 35 763 421</span>
          <span>Ochrana osobných údajov · Cookies · Obchodné podmienky</span>
        </div>
      </div>
    </footer>
  )
}
