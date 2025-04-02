export const metadata = {
  title: 'Atomize - Educación personalizada',
  description: 'Plataforma de aprendizaje y experiencia',
};

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import FAQ from '@/components/faqq'
import TraditionalTraining from '@/components/traditional-training'
import PlatformBenefits from '@/components/platform-benefits'
import AnimatedBanner from '@/components/animated-banner'
import CourseCarousel from '@/components/course-carousel'

export default function Home() {
  return (
    <>
      <Hero />
      <TraditionalTraining />
      <Features />
      <PlatformBenefits />
      <CourseCarousel />
      <AnimatedBanner />
      <FAQ/>
      <Newsletter />
    </>
  )
}
