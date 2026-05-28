import Link from 'next/link'
import Image from 'next/image'

const CATEGORIES = [
  { name: 'Plynomery',                  href: '/produkty/plynomery',                  img: '/images/categories/plynomery0.jpg' },
  { name: 'Regulátory tlaku plynu',     href: '/produkty/regulatory-tlaku-plynu',      img: '/images/categories/regulatory_tlaku_plynu0.jpg' },
  { name: 'Bezpečnostné armatúry',      href: '/produkty/bezpecnostne-armatury',       img: '/images/categories/bezpecnostne_armatury0.jpg' },
  { name: 'Tlakomery',                  href: '/produkty/tlakomery',                   img: '/images/categories/tlakomery0.jpg' },
  { name: 'Teplomery',                  href: '/produkty/teplomery',                   img: '/images/categories/teplomery0.jpg' },
  { name: 'Plynové filtre',             href: '/produkty/plynove-filtre',               img: '/images/categories/filtre_plynove0.jpg' },
  { name: 'Vodomery',                   href: '/produkty/vodomery',                    img: '/images/categories/vodomery0.jpg' },
  { name: 'Monitorovacie zariadenia',   href: '/produkty/monitorovacie-zariadenia',    img: '/images/categories/monitorovacie_zariadenia0.jpg' },
  { name: 'Predohrev plynu',            href: '/produkty/predohrev-plynu',             img: '/images/categories/predohrev_plynu0.jpg' },
  { name: 'Armatúry',                   href: '/produkty/armatury',                    img: '/images/categories/armatury0.jpg' },
  { name: 'Servopohony',                href: '/produkty/servopohony',                 img: '/images/categories/servopohony0.jpg' },
  { name: 'Pneupohony',                 href: '/produkty/pneupohony',                  img: '/images/categories/pneupohony0.jpg' },
  { name: 'Elektromagnetické ventily',  href: '/produkty/elektromagneticke-ventily',   img: '/images/categories/elektromagneticke_ventily0.webp' },
  { name: 'Plynomerové skrinky',        href: '/produkty/plynomerove-skrinky',         img: '/images/categories/plynomerove_skrinky0.jpg' },
  { name: 'Pulzné a obehové čerpadlá',  href: '/produkty/pulzne-a-obehove-cerpadla',   img: '/images/categories/pulzne_a_obehove_cerpadla0.jpg' },
  { name: 'Detektory plynu a plameňa',  href: '/produkty/detektory-plynu-a-plamena',   img: '/images/categories/detektory_plynu_a_plamena0.jpg' },
]

export default function CategoriesSection() {
  return (
    <section id="categories" className="border-t border-line bg-bg py-[100px] pb-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-brand">
              Produktové kategórie
            </div>
            <h2 className="mt-3 max-w-[600px] text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
              16 produktových skupín pre meranie, reguláciu a&nbsp;bezpečnosť.
            </h2>
          </div>
          <p className="text-[14px] text-ink-500 sm:max-w-[280px] sm:text-right">
            Kompletný katalóg pre plynárenstvo, vodárenstvo a&nbsp;priemysel.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group flex flex-col bg-white border border-line rounded-[6px] overflow-hidden shadow-[0_1px_4px_rgba(14,27,46,0.06)] hover:shadow-[0_4px_16px_rgba(14,27,46,0.10)] hover:border-brand/40 transition-all duration-200"
            >
              {/* Image area */}
              <div className="relative aspect-square bg-[#F4F6F9] flex items-center justify-center ">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3.5">
                <span className="text-[13.5px] font-semibold leading-snug text-ink-900 group-hover:text-brand transition-colors">
                  {cat.name}
                </span>
                <span className="shrink-0 text-[12px] text-ink-300 transition-all group-hover:text-brand group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}