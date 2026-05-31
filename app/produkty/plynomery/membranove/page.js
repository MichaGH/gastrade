import Link from 'next/link'
import Image from 'next/image'

const PRODUCTS = [
  {
    name: 'Bytové (domové) plynomery',
    href: '/produkty/plynomery/membranove/bytove-domove-plynomery',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Určené na fakturačné a podružné meranie bežných plynov v domácnostiach. Dodávané aj s teplotnou kompenzáciou pre vonkajšiu montáž.',
  },
  {
    name: 'Komunálne (priemyselné) plynomery',
    href: '/produkty/plynomery/membranove/komunalne-priemyselne-plynomery',
    img: '/images/categories/plynomery0.jpg',
    desc: 'Membránové plynomery pre komunálnu a priemyselnú sféru s vyšším nominálnym prietokom a rozšírenými možnosťami montáže.',
  },
]

export const metadata = {
  title: 'Membránové plynomery — GAS Trade',
}

export default function MembranoverPage() {
  return (
    <div>
      <div className="mb-10 border-b border-line pb-10">
        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-brand">
          Plynomery / Membránové
        </div>
        <h1 className="mt-3 text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[38px]">
          Membránové plynomery
        </h1>
        <p className="mt-5 max-w-[600px] text-[15px] leading-[1.7] text-ink-500">
          Membránové plynomery sú najrozšírenejším typom plynomérov pre domácnosti
          a menšie priemyselné odbery. Vyznačujú sa vysokou presnosťou, dlhou
          životnosťou a nenáročnou údržbou.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PRODUCTS.map((product) => (
          <Link
            key={product.href}
            href={product.href}
            className="group flex flex-col overflow-hidden rounded-[6px] border border-line bg-card shadow-[0_1px_3px_rgba(14,27,46,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_rgba(14,27,46,0.12)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-bg">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-[15px] font-semibold text-ink-900 transition-colors group-hover:text-brand">
                  {product.name}
                </h2>
                <span className="mt-0.5 shrink-0 text-[13px] text-ink-300 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100">
                  →
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.6] text-ink-500">{product.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}