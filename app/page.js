import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import AboutSection from '@/components/homepage/AboutSection'
import CategoriesSection from '@/components/homepage/CategoriesSection'
import PartnerSitesSection from '@/components/homepage/PartnerSitesSection'
import AuthorizedBrandsSection from '@/components/homepage/AuthorizedBrandsSection'
import CTASection from '@/components/homepage/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <PartnerSitesSection />
        <AuthorizedBrandsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
