import Link from 'next/link'
import Image from 'next/image'

const SUBCATEGORIES = [
  {
    name: 'Membránové plynomery',
    href: '/produkty/plynomery/membranove',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Určené pre domácnosti a malé odbery. Presné meranie nízkych prietokov plynu.',
  },
  {
    name: 'Rotačné plynomery',
    href: '/produkty/plynomery/rotacne',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Pre stredné a vyššie prietoky. Robustná konštrukcia pre priemyselné aplikácie.',
  },
  {
    name: 'Kvantometre',
    href: '/produkty/plynomery/kvantometre',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Elektronické prepočítavače množstva plynu s teplotnou a tlakovou korekciou.',
  },
  {
    name: 'Turbínové plynomery',
    href: '/produkty/plynomery/turbinove',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Vysoké prietoky a presnosť. Vhodné pre distribučné stanice a veľkoodberateľov.',
  },
  {
    name: 'Príslušenstvo',
    href: '/produkty/plynomery/prislusenstvo',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Montážne sady, adaptéry, teleskopické nástavce a ďalšie doplnky k plynomerom.',
  },
]

export const metadata = {
  title: 'Plynomery — GAS Trade',
}

export default function PlynomeryPage() {
  return (
    <div>
      {/* Page hero */}
      <div className="mb-10 border-b border-line pb-10">
        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-brand">
          Plynomery
        </div>
        <h1 className="mt-3 text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[38px]">
          Plynomery — meranie spotreby plynu.
        </h1>
        <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-ink-500">
          Plynomer je merací prístroj určený na meranie objemu alebo množstva plynu pretekajúceho
          potrubím. Používa sa v domácnostiach, priemysle aj distribučných staniciach. Ponúkame
          membránové, rotačné, turbínové aj ultrazvukové typy od popredných výrobcov — predovšetkým
          <strong className="font-semibold text-ink-700"> Elster (Honeywell)</strong>, pre ktorých
          sme výhradným zastúpením pre Slovensko.
        </p>
      </div>

      {/* Subcategory cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SUBCATEGORIES.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="group flex flex-col z-0 overflow-hidden rounded-[6px] border border-line bg-card shadow-[0_1px_3px_rgba(14,27,46,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_rgba(14,27,46,0.12)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-bg">
              <Image
                src={sub.img}
                alt={sub.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-[14px] font-semibold text-ink-900 transition-colors group-hover:text-brand">
                  {sub.name}
                </h2>
                <span className="mt-0.5 shrink-0 text-[13px] text-ink-300 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100">
                  →
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.55] text-ink-500">{sub.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}