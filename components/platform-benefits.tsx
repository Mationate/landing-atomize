import React from 'react'
import Image from 'next/image'

// Definición del tipo para los datos de las tarjetas
type BenefitCardProps = {
  title: string
  description: string
  image: string
  bgColor: string
}

// Componente de tarjeta individual con efecto hover
const BenefitCard = ({ title, description, image, bgColor }: BenefitCardProps) => {
  return (
    <div className="relative overflow-hidden group transition-all duration-300 cursor-pointer">
      {/* Tarjeta con borde inferior de color */}
      <div 
        className="relative overflow-hidden rounded-lg aspect-[4/5]"
        style={{ 
          boxShadow: `0 4px 0 ${bgColor}`
        }}
      >
        {/* Imagen de fondo que cubre toda la tarjeta */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Contenido principal - título y descripción */}
        <div className="relative h-full flex flex-col p-6 z-10">
          {/* Título (sube al hacer hover) */}
          <h3 
            className="
              text-2xl text-white font-bold mb-auto 
              transition-all duration-300 ease-in-out
              group-hover:mb-0 group-hover:mt-0
            "
          >
            {title}
          </h3>
          
          {/* Descripción (aparece al hacer hover) */}
          <div 
            className="
              opacity-0 max-h-0 mt-auto
              group-hover:opacity-100 group-hover:max-h-full
              transition-all duration-300 ease-in-out
              text-white text-base
            "
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
      
      {/* Etiqueta de texto vertical */}
      <div 
        className="absolute left-0 bottom-0 h-16 w-1.5 transition-all duration-300 transform origin-bottom group-hover:h-0"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  )
}

// Datos de ejemplo para las tarjetas
const benefitsData: BenefitCardProps[] = [
  {
    title: 'Patrocinios y publicidad',
    description: 'Conecta con marcas y crea colaboraciones publicitarias efectivas.',
    image: '/images/4.png',
    bgColor: '#FFE135', // Amarillo
  },
  {
    title: 'Marketing de afiliación',
    description: 'Genera ingresos recomendando productos y servicios a tu audiencia.',
    image: '/images/9.png',
    bgColor: '#E67E22', // Naranja
  },
  {
    title: 'Eventos en línea',
    description: 'Pagos por transmisiones en vivo, eventos virtuales o consultas personalizadas. Ejemplos: Zoom, YouTube, y Instagram Live.',
    image: '/images/16.png',
    bgColor: '#7CFC00', // Verde brillante
  },
  {
    title: 'Donaciones o propinas',
    description: 'Recibe el apoyo directo de tu comunidad a través de contribuciones voluntarias.',
    image: '/images/19.png',
    bgColor: '#FF69B4', // Rosa
  },
  {
    title: 'Suscripciones',
    description: 'Ofrece contenido premium mediante un modelo de suscripción recurrente.',
    image: '/images/5a.png',
    bgColor: '#4169E1', // Azul real
  },
  {
    title: 'Ventas de "Pago por ver"',
    description: 'Monetiza contenido exclusivo con acceso único mediante pago.',
    image: '/images/4.png',
    bgColor: '#FF4500', // Rojo-naranja
  },
  {
    title: 'Comisiones',
    description: 'Gana un porcentaje por cada venta que generes a través de tus recomendaciones.',
    image: '/images/16.png',
    bgColor: '#40E0D0', // Turquesa
  },
  {
    title: 'Ventas de productos propios',
    description: 'Comercializa tus propios productos físicos o digitales directamente a tu audiencia.',
    image: '/images/19.png',
    bgColor: '#FF6347', // Tomate
  }
]

export default function PlatformBenefits() {
  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Sección header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h3 mb-4">Nuestra plataforma te entrega estos beneficios:</h2>
          </div>

          {/* Grilla de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                image={benefit.image}
                bgColor={benefit.bgColor}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
} 