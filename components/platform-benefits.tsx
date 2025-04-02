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
    description: 'Centraliza todos los recursos de aprendizaje en un solo lugar',
    image: '/images/1.png',
    bgColor: '#FFE135', // Amarillo
  },
  {
    title: 'Marketing de afiliación',
    description: 'Permite personalizar el aprendizaje, al definir rutas de aprendizaje  por colaborador, Areas o unidades.',
    image: '/images/2.png',
    bgColor: '#E67E22', // Naranja
  },
  {
    title: 'Eventos en línea',
    description: 'Permite crear y cargar contenidos propios y cargar data de fuentes externas para tener el control de toda la información de desarrollo formativo.',
    image: '/images/3.png',
    bgColor: '#7CFC00', // Verde brillante
  },
  {
    title: 'Donaciones o propinas',
    description: 'Proporciona información para tomar decisiones sobre las personas de la organización',
    image: '/images/4.png',
    bgColor: '#FF69B4', // Rosa
  },
  {
    title: 'Suscripciones',
    description: 'Puede utilizarse para dar feedback o brindar motivación para el desarrollo personal',
    image: '/images/5.png',
    bgColor: '#4169E1', // Azul real
  },
  {
    title: 'Ventas de "Pago por ver"',
    description: 'Crear nuevas funcionalidades de acuerdo a tus necesidades.',
    image: '/images/6.png',
    bgColor: '#FF4500', // Rojo-naranja
  },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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