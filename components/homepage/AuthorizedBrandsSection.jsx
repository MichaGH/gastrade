const BRANDS = [
  'Honeywell',
  'ELSTER',
  'WIKA',
  'Pietro Fiorentini',
  'Tartarini',
  'SENSUS',
  'ABO Valve',
  'VAG',
  'AS-Schneider',
  'Maxitrol',
  'PREMATLAK',
  'Delta Elettromeccanica',
  'BELIMO',
  'BUSCHJOST',
  'REGADA',
  'PEVEKO',
]

export default function AuthorizedBrandsSection() {
  return (
    <section
      id="auth"
      className="py-16 bg-bg border-t border-line border-b border-line"
    >
      <div className="max-w-[1280px] mx-auto px-16">
        <h3 className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-medium text-ink-500 text-center mb-8 tracking-[0.06em] uppercase">
          Autorizovaný distribútor a zástupca pre SR
        </h3>

        {/* Brand grid — 8 columns */}
        <div className="grid grid-cols-8">
          {BRANDS.map((brand, i) => {
            const isLastInRow = (i + 1) % 8 === 0
            const isInSecondRow = i >= 8
            return (
              <div
                key={brand}
                className={[
                  'h-[72px] flex items-center justify-center font-semibold text-[16px] text-ink-500 tracking-[-0.01em]',
                  !isLastInRow ? 'border-r border-line' : '',
                  isInSecondRow ? 'border-t border-line' : '',
                ].join(' ')}
              >
                {brand}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
