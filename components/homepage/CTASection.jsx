import Link from 'next/link'

const CONTACT_ROWS = [
  { label: 'Adresa', value: 'Pluhová 2, 831 03 Bratislava' },
  { label: 'Telefón', value: '+421 2 4488 1234' },
  { label: 'E-mail', value: 'info@gastrade.sk', isEmail: true },
  { label: 'IČO · DIČ', value: '35 763 421 · 2020241234' },
]

export default function CTASection() {
  return (
    <section id="contact" className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">

          {/* Left — copy */}
          <div>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[42px]">
              Potrebujete poradiť s výberom alebo dimenzovaním?
            </h2>
            <p className="mt-5 max-w-[480px] text-[16px] leading-[1.7] text-white/45">
              Pošlite dopyt alebo nás kontaktujte priamo. Pripravíme cenovú ponuku
              a technické riešenie na mieru pre vašu aplikáciu.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex h-[46px] items-center gap-2 rounded-[4px] bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2"
              >
                Poslať dopyt →
              </Link>
              <Link
                href="#"
                className="inline-flex h-[46px] items-center gap-2 rounded-[4px] border border-white/[0.14] px-6 text-[14px] font-medium text-white/60 transition-all hover:border-white/25 hover:text-white"
              >
                Stiahnuť katalóg (PDF)
              </Link>
            </div>
          </div>

          {/* Right — contact block */}
          <div className="overflow-hidden rounded-[6px] border border-white/[0.08]">
            {CONTACT_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={[
                  'flex flex-col gap-1.5 px-7 py-5',
                  i < CONTACT_ROWS.length - 1 ? 'border-b border-white/[0.07]' : '',
                ].join(' ')}
              >
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-white/28">
                  {row.label}
                </span>
                {row.isEmail ? (
                  <a
                    href={`mailto:${row.value}`}
                    className="text-[15px] font-medium text-white/75 transition-colors hover:text-white"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-white/75">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}