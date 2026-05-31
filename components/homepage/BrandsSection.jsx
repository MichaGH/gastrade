import Image from 'next/image'

const BRANDS = [
  { name: 'Elster (Honeywell)', logo: '/images/brands/elster_honeywell.webp' },
  { name: 'Honeywell',          logo: '/images/brands/honeywell.webp' },
  { name: 'WIKA',               logo: '/images/brands/wika.webp' },
  { name: 'VAG',                logo: '/images/brands/vag.webp' },
  { name: 'ARMAGAS',            logo: '/images/brands/armagas.webp' },
  { name: 'Prematlak',          logo: '/images/brands/prematlak.webp' },
  { name: 'Francel',            logo: '/images/brands/francel.webp' },
  { name: 'Peveko',             logo: '/images/brands/peveko.webp' },
  { name: 'Exatherm',           logo: '/images/brands/exatherm.webp' },
  { name: 'Alfa in',            logo: '/images/brands/alfain.webp' },
  { name: 'Elektrogas Delta',   logo: '/images/brands/elektrogas_delta.webp' },
  { name: 'REOS',               logo: '/images/brands/reos.webp' },
  { name: 'Stiko',              logo: '/images/brands/stiko.webp' },
  { name: 'Techko',             logo: '/images/brands/techko.webp' },
]

function LogoTrack({ ariaHidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {BRANDS.map((brand) => (
        <li
          key={brand.name}
          className="flex h-12 w-[140px] shrink-0 items-center justify-center px-7 sm:h-14 sm:w-[180px]"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={56}
            className="max-h-12 w-auto object-contain sm:max-h-14"
          />
        </li>
      ))}
    </ul>
  )
}

export default function BrandsSection() {
  return (
    <section className="bg-white pt-10 pb-10">


      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  )
}