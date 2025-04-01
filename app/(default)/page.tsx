export const metadata = {
  title: '3BSLab - Aprende, Aplica y Triunfa',
  description: 'Plataforma de aprendizaje y experiencia. Queremos que descubras, aprendas, apliques y triunfes en el mundo de la Barbería - Te ayudamos más allá del corte!!',
};

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Pricing from '@/components/pricing'
import FAQ from '@/components/faqq'
import TraditionalTraining from '@/components/traditional-training'
import PlatformBenefits from '@/components/platform-benefits'
import AnimatedBanner from '@/components/animated-banner'

export default function Home() {
  return (
    <>
      <Hero />
      <TraditionalTraining />
      <Features />
      <PlatformBenefits />
      <AnimatedBanner />
      <FAQ/>
      <Newsletter />
    </>
  )
}
