'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { productNavigation } from '@/lib/productNavigation'

export default function ProductsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden relative z-10 w-[210px] shrink-0 lg:block xl:w-[230px]">
      <div className="sticky top-[100px]">

        <p className="mb-4 px-3 font-[family-name:var(--font-ibm-plex-mono)] text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-700">
          Kategórie
        </p>

        <nav className="flex flex-col">
          {productNavigation.map((cat) => {
            const isActive = pathname === cat.href || pathname.startsWith(cat.href + '/')

            return (
              <div key={cat.href} className="group/cat relative">

                {/* Category row */}
                <Link
                  href={cat.href}
                  className={[
                    'flex items-center justify-between px-3 py-2.5 text-[14px] font-medium transition-colors',
                    isActive
                      ? 'bg-brand-tint text-brand'
                      : 'text-ink-700 hover:bg-brand-tint hover:text-brand',
                  ].join(' ')}
                >
                  {cat.name}
                  {cat.children?.length > 0 && !isActive && (
                    <svg
                      className="h-3 w-3 shrink-0 text-ink-300 group-hover/cat:text-brand"
                      viewBox="0 0 20 20" fill="none"
                    >
                      <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* ACTIVE — inline expanded, no hover flyout */}
                {isActive && cat.children?.length > 0 && (
                  <div className="mb-1 border-l-2 border-brand ml-3">
                    {cat.children.map((child, i) => {
                      const childActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={[
                            'block py-2.5 pl-3 text-[14px] transition-colors',
                            i < cat.children.length - 1 ? 'border-b border-line' : '',
                            childActive
                              ? 'font-semibold text-brand'
                              : 'text-ink-600 hover:text-brand',
                          ].join(' ')}
                        >
                          {child.name}
                        </Link>
                      )
                    })}
                  </div>
                )}

                {/* NOT ACTIVE — flyout to the right */}
                {!isActive && cat.children?.length > 0 && (
                  <div className="pointer-events-none absolute left-full top-0 z-50 pl-1.5 opacity-0 transition-opacity duration-150 group-hover/cat:pointer-events-auto group-hover/cat:opacity-100">
                    <div className="w-[210px] border border-line bg-white shadow-[0_8px_28px_rgba(14,27,46,0.13)]">
                      {cat.children.map((child, i) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={[
                            'block px-4 py-2.5 text-[14px] font-medium text-ink-700 transition-colors hover:bg-brand-tint hover:text-brand',
                            i < cat.children.length - 1 ? 'border-b border-line' : '',
                          ].join(' ')}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}