import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { StatsSection } from '@/components/sections/Stats'
import { ImportantLinksSection } from '@/components/sections/Important-link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ImportantLinksSection />
    </div>
  )
}