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

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Pricing />
      <FAQ/>
      <Newsletter />
    </>
  )
}
