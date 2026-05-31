import ProductsSidebar from '@/components/products/ProductsSidebar'
import ProductsBreadcrumbs from '@/components/products/ProductsBreadcrumbs'

export default function ProdukyLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg">
      <ProductsBreadcrumbs />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-16 py-10 lg:py-14">
        <div className="flex items-start gap-8 lg:gap-12">
          <ProductsSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}