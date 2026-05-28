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
    <section className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="grid grid-cols-[380px_1fr] gap-24 items-start">
          {/* Left col — label + title */}
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium tracking-[0.08em] uppercase text-brand">
              O spoločnosti
            </div>
            <h2 className="text-[40px] leading-[1.1] tracking-[-0.025em] font-semibold mt-4">
              Slovenský dodávateľ meracej a regulačnej techniky.
            </h2>
          </div>

          {/* Right col — body */}
          <div>
            <div className="text-[17px] leading-[1.65] text-ink-700 space-y-[18px]">
              <p>
                Naša spoločnosť, <strong className="font-semibold text-ink-900">GAS Trade, s.r.o.</strong>, vznikla
                v roku 2000 ako obchodná spoločnosť zaoberajúca sa dovozom a predajom meracej a
                regulačnej techniky, so zameraním na oblasť plynárenstva.
              </p>
              <p>
                Postupom času sme rozšírili oblasť pôsobenia na všetky oblasti priemyslu na území
                Slovenskej republiky. Našou hlavnou činnosťou je predaj plynomerov, tlakomerov a
                teplomerov, bezpečnostných armatúr, vodomerov, regulátorov tlaku plynu, plynových
                filtrov, priemyselných armatúr, servopohonov a elektromagnetických ventilov.
              </p>
              <p>
                <Link
                  href="/o-spolocnosti"
                  className="text-brand font-medium border-b border-brand-soft hover:border-brand transition-colors"
                >
                  Viac o spoločnosti →
                </Link>
              </p>
            </div>

            {/* Key points grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-12 pt-9 border-t border-line">
              {KEY_POINTS.map((point) => (
                <div key={point.title}>
                  <h4 className="text-[15px] font-semibold mb-2 text-ink-900">{point.title}</h4>
                  <p className="text-[14px] text-ink-500 leading-[1.55]">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
