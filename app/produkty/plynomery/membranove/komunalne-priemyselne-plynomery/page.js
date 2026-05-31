import Image from 'next/image'
import Link from 'next/link'

const TABLE = [
  { typ: 'BK G10 V2',  js: '5/4"', dl: 250, pn: 0.5, qnom: 10, qmin: 0.06, qmax: 16 },
  { typ: 'BK G16 V2',  js: '5/4"', dl: 250, pn: 0.5, qnom: 16, qmin: 0.10, qmax: 25 },
  { typ: 'BK G25 V2',  js: '5/4"', dl: 250, pn: 0.5, qnom: 25, qmin: 0.16, qmax: 40 },
]

const CATALOGS = [
  { label: 'Katalógový list BK G10–G25', href: '#' },
  { label: 'Návod BK G10 až G25', href: '#' },
]

export const metadata = {
  title: 'Komunálne (priemyselné) plynomery — GAS Trade',
}

export default function KomunalnePlynomeryPage() {
  return (
    <div className="max-w-[860px]">

      {/* Header */}
      <div className="mb-10 border-b border-line pb-10">
        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.08em] text-brand">
          Plynomery / Membránové
        </div>
        <h1 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[36px]">
          Komunálne (priemyselné) plynomery
        </h1>
      </div>

      {/* Image + description */}
      <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-[280px_1fr]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[6px] border border-line bg-bg">
          <Image
            src="/images/categories/plynomery0.jpg"
            alt="Komunálne plynomery"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[15px] leading-[1.75] text-ink-700">
            Komunálne a priemyselné membránové plynomery sú určené pre vyšší odber plynu
            v komunálnej sfére, priemysle a distribúcii. Vhodné pre zemný plyn, propán,
            bután a ďalšie technické plyny. Plynomery sú dodávané v robustnom prevedení
            so zvýšenou odolnosťou voči nečistotám v plyne. Možnosť montáže snímača NF
            na diaľkový prenos údajov. Na požiadanie je možné dodať protokol o meraní/certifikát.
          </p>
          <Link
            href="/kontakt"
            className="group mt-7 inline-flex h-11 items-center gap-2 rounded-[4px] bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-2"
          >
            Opýtať sa na produkt
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="mb-10">
        <h3 className="mb-3 text-[15px] font-semibold text-ink-900">
          Technické parametre
        </h3>
        <div className="overflow-hidden rounded-[6px] border border-line">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="border-b border-line bg-bg">
                  {['Typ', 'JS (DN)', 'Stav. dĺžka (mm)', 'PN (bar)', 'Qnom m³/h', 'Qmin m³/h', 'Qmax m³/h'].map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap px-4 py-3 text-left font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium uppercase tracking-[0.07em] text-ink-500"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.typ} className={i % 2 === 0 ? 'bg-white' : 'bg-bg/50'}>
                    <td className="px-4 py-3 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium text-ink-900">{row.typ}</td>
                    <td className="px-4 py-3 text-ink-700">{row.js}</td>
                    <td className="px-4 py-3 text-ink-700">{row.dl}</td>
                    <td className="px-4 py-3 text-ink-700">{row.pn}</td>
                    <td className="px-4 py-3 text-ink-700">{row.qnom}</td>
                    <td className="px-4 py-3 text-ink-700">{row.qmin}</td>
                    <td className="px-4 py-3 text-ink-700">{row.qmax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Catalogs */}
      <div>
        <h3 className="mb-4 text-[15px] font-semibold text-ink-900">
          Katalógy a dokumenty
        </h3>
        <div className="flex flex-col gap-2">
          {CATALOGS.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="group inline-flex items-center gap-3 rounded-[4px] border border-line bg-white px-4 py-3 text-[14px] font-medium text-ink-700 transition-all hover:border-brand/30 hover:bg-brand-tint hover:text-brand"
            >
              <svg className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              {cat.label}
              <span className="ml-auto text-[12px] text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand">↓</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}