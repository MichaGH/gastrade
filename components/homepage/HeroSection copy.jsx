import Link from 'next/link'
import Image from 'next/image'

const GALLERY_TILES = [
  {
    label: 'Plynomery',
    sub: 'Membránové · Turbínové · Ultrazvukové',
    img: '/images/categories/plynomery0.jpg',
    href: '/produkty/plynomery',
    tall: true,
  },
  {
    label: 'Regulátory tlaku',
    sub: 'Nízkotlakové · Strednotlakové',
    img: '/images/categories/regulatory_tlaku_plynu0.jpg',
    href: '/produkty/regulatory-tlaku-plynu',
    tall: false,
  },
  {
    label: 'Servopohony & armatúry',
    sub: 'Elektrické · Pneumatické',
    img: '/images/categories/servopohony0.jpg',
    href: '/produkty/servopohony',
    tall: false,
  },
]

const STATS = [
  { key: 'Skupina', num: '25', suffix: '+', label: 'rokov na slovenskom trhu' },
  { key: 'Sortiment', num: '16', suffix: '', label: 'produktových kategórií' },
  { key: 'Zastúpenia', num: '30', suffix: '+', label: 'výrobcov a značiek' },
  { key: 'Webové stránky', num: '7', suffix: '', label: 'špecializovaných sesterskych stránok' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-0 md:pt-28">
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 85% 20%, #F5F7FE, transparent 70%), linear-gradient(to bottom, white 0%, white 70%, #F5F7FE 100%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(22,72,214,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,72,214,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 800px 600px at 80% 30%, black 30%, transparent 70%)',
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16">
        {/* Two-col grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-24">
          {/* Left — copy */}
          <div className="max-w-[760px]">
            <h1 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] text-ink-900 sm:text-[54px] lg:text-[62px] xl:text-[66px]">
              Meranie, regulácia a{' '}
              <em className="relative not-italic text-brand">
                bezpečnosť
                <span className="absolute left-0 right-0 bottom-1 -z-10 block h-2 bg-brand-soft sm:h-2.5" />
              </em>{' '}
              pre plynárenstvo a&nbsp;priemysel.
            </h1>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="#categories"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-brand px-5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2"
              >
                Prezrieť produkty
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-line bg-white px-5 text-[14px] font-semibold text-ink-900 transition-colors hover:border-ink-300 hover:bg-[#F8FAFF]"
              >
                Požiadať o cenovú ponuku
              </Link>
            </div>
          </div>

          {/* Right — product gallery */}
          <div className="relative pb-4 lg:self-end lg:pb-10">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-rows-[230px_145px]">
              {GALLERY_TILES.map((tile) => (
                <Link
                  href={tile.href}
                  key={tile.label}
                  className={[
                    'group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-lg transition-transform hover:scale-[1.015] sm:min-h-0',
                    tile.tall
                      ? 'sm:row-span-2 sm:min-h-[385px] lg:min-h-0'
                      : 'sm:min-h-[180px] lg:min-h-0',
                  ].join(' ')}
                >
                  {/* Product photo */}
                  <Image
                    src={tile.img}
                    alt={tile.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Bottom fade for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Text */}
                  <div className="relative z-10 p-5">
                    <span className="mb-1.5 block font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-widest text-white/70">
                      {tile.label}
                    </span>
                    <p className="text-[13px] font-semibold leading-snug text-white">
                      {tile.sub}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 right-3 z-20 flex items-center gap-2 rounded-md border border-line bg-white px-3.5 py-2.5 shadow-[0_4px_20px_rgba(14,27,46,0.12)] sm:-right-4">
              <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand" />
              <span className="whitespace-nowrap text-[12px] font-medium text-ink-900">
                16 produktových kategórií
              </span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 border-t border-line sm:mt-18 lg:mt-22 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.key}
              className={[
                'flex flex-col gap-2.5 border-line px-4 py-6 sm:px-6 lg:px-7 lg:py-8 lg:pb-10',
                i % 2 === 0 ? 'border-r lg:border-r' : '',
                i < 2 ? 'border-b lg:border-b-0' : '',
                i < STATS.length - 1 ? 'lg:border-r' : 'lg:border-r-0',
              ].join(' ')}
            >
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[10px] uppercase tracking-[0.08em] text-ink-500 sm:text-[11px]">
                {stat.key}
              </span>

              <span className="text-[38px] font-semibold leading-none tracking-[-0.03em] text-ink-900 sm:text-[46px] lg:text-[52px]">
                {stat.num}
                {stat.suffix && <em className="not-italic text-brand">{stat.suffix}</em>}
              </span>

              <span className="max-w-[200px] text-[12px] leading-[1.45] text-ink-500 sm:text-[13px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}