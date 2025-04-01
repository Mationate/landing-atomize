import React from 'react'
import Image from 'next/image'

export default function AnimatedBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full">
        {/* GIF a pantalla completa */}
        <div className="relative w-full" style={{ height: 'auto' }}>
          <Image
            src="/images/atomizegif.gif"
            alt="Atomize Animated Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
            unoptimized // Importante para GIFs
          />
        </div>
      </div>
    </section>
  )
} 