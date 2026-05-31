import Image from 'next/image'

const PARTNERS = [
  {
    logo: '/images/specializedWebsites/aris.png',
    url: 'pohony-aris.cz',
    tag: 'Výhradné zastúpenie pre SR',
    desc: 'Kompletná ponuka servopohonov nemeckého výrobcu ARIS — jedno- a viacotáčkové vyhotovenia vrátane EEx pre výbušné prostredia.',
  },
  {
    logo: '/images/specializedWebsites/agromatic.png',
    url: 'pohony-agromatic.cz',
    tag: 'Zastúpenie pre SR',
    desc: 'Servopohony a riadiace komponenty výrobcu AGROMATIC pre priemyselné armatúry a automatizáciu prevádzok.',
  },
  {
    logo: '/images/specializedWebsites/plynomery.png',
    url: 'plynomery.cz',
    tag: 'Honeywell · Authorized distributor',
    desc: 'Najširšia ponuka plynomerov — predaj, technické informácie a kompletný servis. Zastúpenie ELSTER (Honeywell) pre SR.',
  },
  {
    logo: '/images/specializedWebsites/hongas.png',
    url: 'hongas.cz',
    tag: 'Honeywell · Authorized distributor',
    desc: 'Najširšia ponuka regulátorov tlaku plynu — stabilizátory, domové a priemyselné regulátory popredných výrobcov.',
  },
  {
    logo: '/images/specializedWebsites/bapky.png',
    url: 'bapky.cz',
    tag: 'Špecializovaný web',
    desc: 'Bezpečnostné uzávery plynu — membránové uzávery BAP a VAP, priamo ovládané uzávery BPV od výrobcu ARMAGAS.',
  },
  {
    logo: '/images/specializedWebsites/schneider.png',
    url: 'as-schneider.com',
    tag: 'Obchodné zastúpenie pre SR',
    desc: 'Ventilové súpravy, prístrojové armatúry, Block & Bleed a Double Block & Bleed ventily nemeckého výrobcu.',
  },
]

export default function SpecializedSitesSection() {
  return (
    <section className="bg-bg py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-brand">
              Partnerské stránky
            </div>
            <h2 className="mt-4 text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[36px]">
              Špecializované weby pre<br className="hidden sm:block" /> vybrané sortimenty.
            </h2>
          </div>
          <div className="text-[14px] leading-[1.6] text-ink-400 sm:max-w-[240px] sm:text-right">
            Pre vybrané sortimenty prevádzkujeme samostatné weby s detailnejšou ponukou.
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner) => (
            <a
              key={partner.url}
              href={`https://${partner.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden border border-line bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_12px_32px_rgba(14,27,46,0.1)]"
            >
              {/* Logo area */}
              <div className="flex h-[100px] items-center border-b border-line px-6">
                <Image
                  src={partner.logo}
                  alt={partner.url}
                  width={200}
                  height={60}
                  className="max-h-[52px] w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="text-[13px] leading-[1.6] text-ink-500">
                  {partner.desc}
                </div>

                {/* Footer row */}
                <div className="mt-auto flex items-center justify-end gap-3 border-t border-line pt-4">
                  {/* <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.07em] text-ink-400">
                    {partner.tag}
                  </span> */}
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium text-brand transition-all group-hover:translate-x-0.5">
                    {partner.url} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}