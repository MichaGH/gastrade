import Link from 'next/link'

const CONTACT_ROWS = [
  { label: 'Adresa', value: 'Pluhová 2, 831 03 Bratislava' },
  { label: 'Telefón', value: '+421 2 4488 1234' },
  { label: 'E-mail', value: 'info@gastrade.sk', isEmail: true },
  { label: 'IČO · DIČ', value: '35 763 421 · 2020241234' },
]

const SUBJECTS = [
  'Cenová ponuka',
  'Technické poradenstvo',
  'Servis a overovanie',
  'Iné',
]

export default function CTASection() {
  return (
    <section id="contact" className="bg-bg py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-12 max-w-[640px]">
          <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-brand">
            Kontakt
          </div>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[38px] lg:text-[42px]">
            Potrebujete poradiť s výberom alebo dimenzovaním?
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-ink-500">
            Pošlite dopyt cez formulár alebo nás kontaktujte priamo. Pripravíme
            cenovú ponuku a technické riešenie na mieru pre vašu aplikáciu.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">

          {/* Left — form card */}
          <div className="rounded-[8px] border border-line bg-card p-6 shadow-[0_1px_3px_rgba(14,27,46,0.06)] sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Meno */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  Meno a priezvisko
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ján Novák"
                  className="h-12 rounded-[4px] border border-line bg-white px-4 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {/* Spoločnosť */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  Spoločnosť
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Názov firmy"
                  className="h-12 rounded-[4px] border border-line bg-white px-4 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jan.novak@firma.sk"
                  className="h-12 rounded-[4px] border border-line bg-white px-4 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {/* Telefón */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  Telefón
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+421 900 000 000"
                  className="h-12 rounded-[4px] border border-line bg-white px-4 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {/* Predmet — full width */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  Predmet dopytu
                </label>
                <select
                  id="subject"
                  defaultValue=""
                  className="h-12 rounded-[4px] border border-line bg-white px-4 text-[14px] text-ink-700 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                >
                  <option value="" disabled>
                    Vyberte predmet…
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Správa — full width */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-500"
                >
                  Správa
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Popíšte vašu požiadavku, aplikáciu alebo špecifikáciu…"
                  className="resize-none rounded-[4px] border border-line bg-white px-4 py-3 text-[14px] leading-[1.6] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
              </div>

              {/* GDPR + submit — full width */}
              <div className="flex flex-col gap-5 sm:col-span-2">
                <label htmlFor="gdpr" className="flex cursor-pointer items-start gap-3">
                  <input
                    id="gdpr"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border border-line accent-brand"
                  />
                  <span className="text-[12.5px] leading-[1.5] text-ink-500">
                    Súhlasím so spracovaním osobných údajov za účelom vybavenia
                    môjho dopytu.
                  </span>
                </label>

                <button
                  type="button"
                  className="group inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2 sm:w-auto sm:self-start"
                >
                  Odoslať dopyt
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right — contact info */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[8px] border border-line bg-card shadow-[0_1px_3px_rgba(14,27,46,0.06)]">
              {CONTACT_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={[
                    'flex flex-col gap-1.5 px-7 py-5',
                    i < CONTACT_ROWS.length - 1 ? 'border-b border-line' : '',
                  ].join(' ')}
                >
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-400">
                    {row.label}
                  </span>
                  {row.isEmail ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-[15px] font-medium text-ink-900 transition-colors hover:text-brand"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-medium text-ink-900">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Hours / note */}
            <div className="rounded-[8px] border border-line bg-brand-tint px-7 py-5">
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.09em] text-ink-400">
                Otváracie hodiny
              </span>
              <p className="mt-1.5 text-[15px] font-medium text-ink-900">
                Po–Pi · 8:00–16:30
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition-colors hover:text-brand-2"
              >
                Stiahnuť katalóg (PDF) →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}