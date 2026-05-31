'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { productNavigation } from '@/lib/productNavigation'

function getLabel(segment) {
  for (const cat of productNavigation) {
    if (cat.href === `/produkty/${segment}`) return cat.name
    for (const child of cat.children ?? []) {
      if (child.href === `/produkty/${segment}` || child.href.endsWith(`/${segment}`)) return child.name
    }
  }
  if (segment === 'produkty') return 'Produkty'
  return segment.charAt(0).toUpperCase() + segment.slice(1)
}

export default function ProductsBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((seg, i) => ({
    label: getLabel(seg),
    href: '/' + segments.slice(0, i + 1).join('/'),
  }))

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto flex h-11 max-w-[1280px] items-center gap-2 px-5 sm:px-8 lg:px-16">
        <Link href="/" className="text-[12px] text-ink-400 transition-colors hover:text-ink-900">
          Domov
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <span className="text-[12px] text-ink-300">/</span>
            {i === crumbs.length - 1 ? (
              <span className="text-[12px] font-medium text-ink-900">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="text-[12px] text-ink-400 transition-colors hover:text-ink-900">
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}