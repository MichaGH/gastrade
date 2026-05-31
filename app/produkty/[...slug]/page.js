import Link from 'next/link'

const WORKING_LINKS = [
  {
    label: 'Membránové plynomery',
    href: '/produkty/plynomery/membranove',
    sub: 'Bytové · Komunálne',
  },
  {
    label: 'Plynomery — prehľad',
    href: '/produkty/plynomery',
    sub: 'Všetky typy plynomerov',
  },
  {
    label: 'Všetky kategórie',
    href: '/produkty',
    sub: 'Kompletný katalóg',
  },
]

export default function FallbackPage() {
  return (
    <div className="max-w-[580px]">

      <div className="mb-10 border-b border-line pb-10 relative">
        <h1 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[34px]">
          Táto sekcia ešte nie je hotová.
        </h1>
        <p className="mt-6 text-[15px] leading-[1.7] text-ink-500">
          Stránka je v príprave. Kompletný produktový katalóg bude dostupný čoskoro.
          Momentálne sú k dispozícii tieto sekcie:
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {WORKING_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between rounded-[4px] border border-line bg-white px-5 py-4 transition-all hover:border-brand/30 hover:bg-brand-tint hover:shadow-[0_4px_16px_rgba(14,27,46,0.08)]"
          >
            <div>
              <p className="text-[14px] font-semibold text-ink-900 transition-colors group-hover:text-brand">
                {link.label}
              </p>
              <p className="mt-1 text-[12px] text-ink-400">{link.sub}</p>
            </div>
            <span className="shrink-0 text-[14px] text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand">
              →
            </span>
          </Link>
        ))}
      </div>

    </div>
  )
}