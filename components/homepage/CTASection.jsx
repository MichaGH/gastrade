import Link from 'next/link'

const CONTACT_ROWS = [
  { label: 'Adresa', value: 'Pluhová 2, 831 03 Bratislava' },
  { label: 'Telefón', value: '+421 2 4488 1234' },
  { label: 'E-mail', value: 'info@gastrade.sk', isEmail: true },
  { label: 'IČO · DIČ', value: '35 763 421 · 2020241234' },
]

export default function CTASection() {
  return (
    <section id="contact" className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="bg-bg-tint border border-line rounded-[6px] px-[72px] py-16 grid grid-cols-[1.4fr_1fr] gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium tracking-[0.08em] uppercase text-brand">
              Kontakt
            </div>
            <h2 className="text-[36px] leading-[1.15] tracking-[-0.02em] font-semibold mt-3">
              Potrebujete poradiť s&nbsp;výberom alebo dimenzovaním?
            </h2>
            <p className="text-[16px] text-ink-500 mt-4 max-w-[480px]">
              Pošlite dopyt alebo nás kontaktujte priamo. Pripravíme cenovú ponuku a technické riešenie
              na mieru pre vašu aplikáciu.
            </p>
            <div className="flex gap-3 items-center mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-[4px] text-[14px] font-medium bg-brand text-white hover:bg-brand-2 transition-colors group"
              >
                Poslať dopyt
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-[4px] text-[14px] font-medium border border-line text-ink-900 hover:border-ink-300 transition-colors"
              >
                Stiahnuť katalóg (PDF)
              </Link>
            </div>
          </div>

          {/* Right — contact block */}
          <div className="bg-white border border-line rounded-[4px] px-7 py-0">
            {CONTACT_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={[
                  'flex flex-col gap-1 py-3.5',
                  i < CONTACT_ROWS.length - 1 ? 'border-b border-line-2' : '',
                  i === 0 ? 'pt-7' : '',
                  i === CONTACT_ROWS.length - 1 ? 'pb-7' : '',
                ].join(' ')}
              >
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] tracking-[0.06em] uppercase text-ink-500">
                  {row.label}
                </span>
                {row.isEmail ? (
                  <a
                    href={`mailto:${row.value}`}
                    className="text-[15px] font-medium text-ink-900 hover:text-brand transition-colors"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-ink-900">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
