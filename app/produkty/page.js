import Link from 'next/link'
import Image from 'next/image'
import { productNavigation } from '@/lib/productNavigation'

const CATEGORY_IMAGES = {
  '/produkty/plynomery': '/images/categories/plynomery0.jpg',
  '/produkty/regulatory-tlaku-plynu': '/images/categories/regulatory_tlaku_plynu0.jpg',
  '/produkty/bezpecnostne-armatury': '/images/categories/bezpecnostne_armatury0.jpg',
  '/produkty/tlakomery': '/images/categories/tlakomery0.jpg',
  '/produkty/teplomery': '/images/categories/teplomery0.jpg',
  '/produkty/plynove-filtre': '/images/categories/filtre_plynove0.jpg',
  '/produkty/vodomery': '/images/categories/vodomery0.jpg',
  '/produkty/monitorovacie-zariadenia': '/images/categories/monitorovacie_zariadenia0.jpg',
  '/produkty/predohrev-plynu': '/images/categories/predohrev_plynu0.jpg',
  '/produkty/armatury': '/images/categories/armatury0.jpg',
  '/produkty/servopohony': '/images/categories/servopohony0.jpg',
  '/produkty/pneupohony': '/images/categories/pneupohony0.jpg',
  '/produkty/elektromagneticke-ventily': '/images/categories/elektromagneticke_ventily0.webp',
  '/produkty/plynomerove-skrinky': '/images/categories/plynomerove_skrinky0.jpg',
  '/produkty/pulzne-a-obehove-cerpadla': '/images/categories/pulzne_a_obehove_cerpadla0.jpg',
  '/produkty/detektory-plynu-a-plamena': '/images/categories/detektory_plynu_a_plamena0.jpg',
}

export const metadata = {
  title: 'Produkty — GAS Trade',
}

export default function ProdukyPage() {
  return (
    <div>
      <div className="mb-8 border-b border-line pb-8">
        <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[40px]">
          Všetky produkty
        </h1>
        <p className="mt-3 max-w-[560px] text-[15px] leading-[1.65] text-ink-500">
          Kompletný sortiment meracej a regulačnej techniky pre plynárenstvo,
          vodárenstvo a priemysel.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
        {productNavigation.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex flex-col overflow-hidden rounded-[6px] border border-line bg-card shadow-[0_1px_3px_rgba(14,27,46,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_rgba(14,27,46,0.12)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-bg">
              {CATEGORY_IMAGES[cat.href] && (
                <Image
                  src={CATEGORY_IMAGES[cat.href]}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              )}
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
              <span className="text-[13px] font-semibold text-ink-900 transition-colors group-hover:text-brand">
                {cat.name}
              </span>
              <span className="shrink-0 text-[13px] text-ink-300 opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}