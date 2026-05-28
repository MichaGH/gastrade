const PARTNERS = [
  {
    logo: 'aris',
    name: 'Pohony Aris',
    url: 'pohony-aris.cz',
    tag: 'Výhradné zastúpenie pre SR',
    desc: 'Kompletná ponuka servopohonov nemeckého výrobcu ARIS — jedno- a viacotáčkové vyhotovenia vrátane EEx pre výbušné prostredia.',
  },
  {
    logo: 'AGROMATIC',
    name: 'Pohony Agromatic',
    url: 'pohony-agromatic.cz',
    tag: 'Zastúpenie pre SR',
    desc: 'Servopohony a riadiace komponenty výrobcu AGROMATIC pre priemyselné armatúry a\u00a0automatizáciu prevádzok.',
  },
  {
    logo: 'plynomery',
    name: 'Plynomery.cz',
    url: 'plynomery.cz',
    tag: 'Honeywell · authorized distributor',
    desc: 'Najširšia ponuka plynomerov — predaj, technické informácie a kompletný servis. Zastúpenie ELSTER (Honeywell) pre\u00a0SR.',
  },
  {
    logo: 'HONGAS',
    name: 'Hongas.cz',
    url: 'hongas.cz',
    tag: 'Honeywell · authorized distributor',
    desc: 'Najširšia ponuka regulátorov tlaku plynu — stabilizátory, domové a priemyselné regulátory popredných výrobcov.',
  },
  {
    logo: 'bapky',
    name: 'Bapky.cz',
    url: 'bapky.cz',
    tag: 'Špecializovaný web',
    desc: 'Bezpečnostné uzávery plynu — membránové uzávery typu BAP a VAP, priamo ovládané uzávery BPV od výrobcu ARMAGAS.',
  },
  {
    logo: 'AS·S',
    name: 'AS-Schneider',
    url: 'as-schneider.com',
    tag: 'Obchodné zastúpenie pre SR',
    desc: 'Ventilové súpravy, prístrojové armatúry, Block & Bleed a Double Block & Bleed ventily nemeckého výrobcu.',
  },
]

export default function PartnerSitesSection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium tracking-[0.08em] uppercase text-brand">
              Špecializované stránky
            </div>
            <h2 className="text-[40px] leading-[1.1] tracking-[-0.025em] font-semibold mt-3 max-w-[600px]">
              Sesterské stránky pre konkrétne produktové oblasti.
            </h2>
          </div>
          <p className="text-[14px] text-ink-500 max-w-[320px] text-right">
            Pre vybrané sortimenty prevádzkujeme samostatné špecializované weby s detailnejšou ponukou a&nbsp;technickou dokumentáciou.
          </p>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-3 gap-4">
          {PARTNERS.map((partner) => (
            <a
              key={partner.url}
              href={`https://${partner.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line rounded-[4px] p-7 flex flex-col gap-4 transition-colors hover:border-brand group"
            >
              {/* Logo placeholder */}
              <div className="h-16 bg-bg-tint rounded-[3px] flex items-center justify-center font-bold text-[20px] tracking-[-0.02em] text-ink-900">
                {partner.logo}
              </div>

              {/* Name + URL */}
              <div>
                <h4 className="text-[16px] font-semibold text-ink-900">{partner.name}</h4>
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] text-brand mt-0.5">
                  {partner.url}
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-ink-500 leading-[1.55] flex-1">{partner.desc}</p>

              {/* Tag */}
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.1em] uppercase text-ink-500 px-2 py-1 border border-line rounded-[2px] self-start">
                {partner.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
