import Link from 'next/link'

const KEY_POINTS = [
  {
    title: 'Výhradné zastúpenia',
    body: 'ELSTER (Honeywell), ARIS, ARMAGAS, PREMATLAK, SENSUS a ďalší výrobcovia pre\u00a0Slovenskú republiku.',
  },
  {
    title: 'Materská spoločnosť',
    body: 'Súčasť skupiny G.A.S. a.s. — výhradného zástupcu pre plynomery Elster (Honeywell) pre\u00a0SR.',
  },
  {
    title: 'Technické poradenstvo',
    body: 'Návrh, dimenzovanie a výber komponentov pre konkrétnu aplikáciu. Konzultácie pre projektantov.',
  },
  {
    title: 'Servis a overovanie',
    body: 'Spolupráca s autorizovanými metrologickými pracoviskami pre overovanie plynomerov a tlakomerov.',
  },
]

export default function AboutSection() {
  return (
    <section className="border-y border-line bg-white py-10 sm:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Top: title + body */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-24 lg:items-start">
          {/* Left col — label + title */}
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-brand">
              O spoločnosti
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
              Slovenský dodávateľ meracej a regulačnej techniky.
            </h2>
          </div>

          {/* Right col — body */}
          <div className="text-[15px] leading-[1.65] text-ink-700 sm:text-[17px]">
            <div className="space-y-[18px]">
              <p>
                Naša spoločnosť,{' '}
                <strong className="font-semibold text-ink-900">GAS Trade, s.r.o.</strong>, vznikla
                v roku 2000 ako obchodná spoločnosť zaoberajúca sa dovozom a predajom meracej a
                regulačnej techniky, so zameraním na oblasť plynárenstva.
              </p>
              <p>
                Postupom času sme rozšírili oblasť pôsobenia na všetky oblasti priemyslu na území
                Slovenskej republiky. Našou hlavnou činnosťou je predaj plynomerov, tlakomerov a
                teplomerov, bezpečnostných armatúr, vodomerov, regulátorov tlaku plynu, plynových
                filtrov, priemyselných armatúr, servopohonov a elektromagnetických ventilov.
              </p>
            </div>
          </div>
        </div>

      

      </div>
    </section>
  )
}