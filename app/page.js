
import HeroSection from '@/components/homepage/HeroSection'
import AboutSection from '@/components/homepage/AboutSection'
import CategoriesSection from '@/components/homepage/CategoriesSection'
import SpecializedSitesSection from '@/components/homepage/SpecializedSitesSection'
import CTASection from '@/components/homepage/CTASection'
import BrandsSection from '@/components/homepage/BrandsSection'

export default function HomePage() {
  return (
    <>
      
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <CategoriesSection />
        <SpecializedSitesSection />
        <CTASection />
      </main>
      
    </>
  )
}
