const PARTNERS = [
  {
    logo: 'Aris',
    name: 'Pohony Aris',
    url: 'pohony-aris.cz',
    tag: 'Výhradné zastúpenie pre SR',
    desc: 'Kompletná ponuka servopohonov nemeckého výrobcu ARIS — jedno- a viacotáčkové vyhotovenia vrátane EEx pre výbušné prostredia.',
  },
  {
    logo: 'Agromatic',
    name: 'Pohony Agromatic',
    url: 'pohony-agromatic.cz',
    tag: 'Zastúpenie pre SR',
    desc: 'Servopohony a riadiace komponenty výrobcu AGROMATIC pre priemyselné armatúry a automatizáciu prevádzok.',
  },
  {
    logo: 'Plynomery',
    name: 'Plynomery.cz',
    url: 'plynomery.cz',
    tag: 'Honeywell · Authorized distributor',
    desc: 'Najširšia ponuka plynomerov — predaj, technické informácie a kompletný servis. Zastúpenie ELSTER (Honeywell) pre SR.',
  },
  {
    logo: 'Hongas',
    name: 'Hongas.cz',
    url: 'hongas.cz',
    tag: 'Honeywell · Authorized distributor',
    desc: 'Najširšia ponuka regulátorov tlaku plynu — stabilizátory, domové a priemyselné regulátory popredných výrobcov.',
  },
  {
    logo: 'Bapky',
    name: 'Bapky.cz',
    url: 'bapky.cz',
    tag: 'Špecializovaný web',
    desc: 'Bezpečnostné uzávery plynu — membránové uzávery BAP a VAP, priamo ovládané uzávery BPV od výrobcu ARMAGAS.',
  },
  {
    logo: 'AS·S',
    name: 'AS-Schneider',
    url: 'as-schneider.com',
    tag: 'Obchodné zastúpenie pre SR',
    desc: 'Ventilové súpravy, prístrojové armatúry, Block & Bleed a Double Block & Bleed ventily nemeckého výrobcu.',
  },
]

export default function SpecializedSitesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[36px]">
            Sesterské weby pre konkrétne
            <br className="hidden sm:block" /> produktové oblasti.
          </h2>
          <p className="text-[14px] leading-[1.55] text-ink-400 sm:max-w-[260px] sm:text-right">
            Pre vybrané sortimenty prevádzkujeme samostatné špecializované weby
            s detailnejšou ponukou.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner) => (
            <a
              key={partner.url}
              href={`https://${partner.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 rounded-[6px] border border-line p-6 transition-all hover:border-brand/25 hover:shadow-[0_6px_24px_rgba(13,59,120,0.08)]"
            >
              {/* Logo placeholder */}
              <div className="flex h-[52px] items-center rounded-[4px] bg-bg px-4">
                <span className="text-[17px] font-bold tracking-[-0.02em] text-ink-700">
                  {partner.logo}
                </span>
              </div>

              {/* Name + URL */}
              <div>
                <h4 className="text-[15px] font-semibold text-ink-900">{partner.name}</h4>
                <span className="mt-0.5 block font-[family-name:var(--font-ibm-plex-mono)] text-[12px] text-brand">
                  {partner.url}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-[14px] leading-[1.6] text-ink-500">{partner.desc}</p>

              {/* Tag + arrow */}
              <div className="flex items-center justify-between">
                <span className="rounded-[3px] border border-line px-2 py-0.5 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.08em] text-ink-400">
                  {partner.tag}
                </span>
                <span className="text-[13px] text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}