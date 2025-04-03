'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Definición del tipo para un curso/programa
type CourseItem = {
  id: number
  title: string
  type: 'CURSO' | 'DIPLOMADO'
  description: string
  image: string
}

// Datos de los cursos/programas que se mostrarán en el carrusel
const courseData: CourseItem[] = [
  {
    id: 1,
    title: 'Presentaciones online',
    type: 'CURSO',
    description: 'Aprende el arte de cautivar a través de presentaciones virtuales efectivas que destacan entre la multitud, adaptándote al nuevo panorama digital de comunicación personal y empresarial.',
    image: '/images/carrusel6.png'
  },
  {
    id: 2,
    title: 'Design Thinking',
    type: 'CURSO',
    description: 'Transforma ideas en historias que resuenan y perduran. Descubre cómo el storytelling efectivo no solo informa, sino que conecta y persuade, dejando una huella inolvidable en tu audiencia.',
    image: '/images/carrusel1.png'
  },
  {
    id: 3,
    title: 'Análisis de Datos',
    type: 'CURSO',
    description: 'Transforma datos en historias que resuenan y perduran. Descubre cómo el storytelling efectivo no solo informa, sino que conecta y persuade, dejando una huella inolvidable en tu audiencia.',
    image: '/images/carrusel2.png'
  },
  {
    id: 4,
    title: 'Dirección y Gestión de Proyectos',
    type: 'DIPLOMADO',
    description: 'Transforma ideas en historias que resuenan y perduran. Descubre cómo el storytelling efectivo no solo informa, sino que conecta y persuade, dejando una huella inolvidable en tu audiencia.',
    image: '/images/carrusel3.png'
  },
  {
    id: 5,
    title: 'Inteligencia Artificial Aplicada a los Negocios',
    type: 'CURSO',
    description: 'Adquiere conceptos y habilidades para implementar soluciones de analítica usando herramientas y técnicas de IA que transforman los datos críticos para la optimización de procesos organizacional y la toma de decisiones.',
    image: '/images/carrusel4.png'
  },
  {
    id: 6,
    title: 'Economía Circular',
    type: 'CURSO',
    description: 'Aprende todo sobre los nuevos modelos económicos circulares que combinan crecimiento económico con sustentabilidad ambiental y equidad social.',
    image: '/images/carrusel5.png'
  },
  {
    id: 7,
    title: 'Big Data para Negocios',
    type: 'DIPLOMADO',
    description: 'Domina las técnicas y herramientas más avanzadas de análisis de datos para transformar la información en decisiones estratégicas que impulsen el crecimiento y la innovación en tu organización.',
    image: '/images/carrusel7.png'
  }
]

export default function CourseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % courseData.length)
  }

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + courseData.length) % courseData.length)
  }

  // Auto rotación del carrusel (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center ">Algunos de nuestros Cursos y programas</h2>
        
        {/* Contenedor principal del carrusel horizontal */}
        <div className="relative h-[800px] w-full flex justify-center items-center">
          <div className="absolute w-full max-w-[1500px] h-[700px] flex justify-center items-center overflow-hidden">
            {/* Muestra las tarjetas superpuestas horizontalmente */}
            {courseData.map((course, index) => {
              // Calcular la posición relativa al índice activo
              const position = (index - activeIndex + courseData.length) % courseData.length
              
              // Determinar si es la tarjeta visible o cercana
              const isVisible = position === 0 || position === 1 || position === 2 || 
                                position === courseData.length - 1 || position === courseData.length - 2
              
              // Configurar transformaciones basadas en la posición
              const getStyles = () => {
                // Tarjeta central (activa)
                if (position === 0) {
                  return {
                    zIndex: 30,
                    opacity: 1,
                    transform: 'translateX(0%)',
                    left: '50%',
                    marginLeft: '-200px',
                  }
                }
                // Tarjetas a la derecha (siguientes)
                else if (position === 1) {
                  return {
                    zIndex: 20,
                    opacity: 0.8,
                    transform: 'translateX(70%) scale(0.9)',
                    left: '50%',
                    marginLeft: '-200px',
                  }
                }
                else if (position === 2) {
                  return {
                    zIndex: 10,
                    opacity: 0.6,
                    transform: 'translateX(130%) scale(0.8)',
                    left: '50%', 
                    marginLeft: '-200px',
                  }
                }
                // Tarjetas a la izquierda (anteriores)
                else if (position === courseData.length - 1) {
                  return {
                    zIndex: 20,
                    opacity: 0.8,
                    transform: 'translateX(-70%) scale(0.9)',
                    left: '50%',
                    marginLeft: '-200px',
                  }
                }
                else if (position === courseData.length - 2) {
                  return {
                    zIndex: 10,
                    opacity: 0.6,
                    transform: 'translateX(-130%) scale(0.8)',
                    left: '50%',
                    marginLeft: '-200px',
                  }
                }
                // Ocultar el resto
                else {
                  return {
                    zIndex: 0,
                    opacity: 0,
                    transform: 'translateX(0) scale(0.7)',
                    left: '50%',
                    marginLeft: '-200px',
                    pointerEvents: 'none'
                  }
                }
              }
              
              const styles = getStyles()
              
              return isVisible ? (
                <div 
                  key={course.id}
                  className="absolute transition-all duration-500 cursor-pointer"
                  style={{
                    width: '400px',
                    height: '711px', // Aspect ratio 9:16
                    zIndex: styles.zIndex,
                    opacity: styles.opacity as number,
                    transform: styles.transform as string,
                    left: styles.left as string,
                    marginLeft: styles.marginLeft as string,
                    pointerEvents: (styles.pointerEvents || 'auto') as React.CSSProperties['pointerEvents'],
                  }}
                  onClick={() => {
                    if (position === 0) {
                      // No hacer nada si hacen clic en la tarjeta actual
                    } else if (position === 1 || position === 2) {
                      nextSlide()
                    } else if (position === courseData.length - 1 || position === courseData.length - 2) {
                      prevSlide()
                    }
                  }}
                >
                  {/* Contenedor de la tarjeta con relación de aspecto 9:16 */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                    {/* Imagen de fondo vertical */}
                    <div className="absolute inset-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : null
            })}
          </div>
          
          {/* Botones de navegación */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 z-40 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
            aria-label="Anterior curso"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-4 z-40 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
            aria-label="Siguiente curso"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Indicadores de posición */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
            {courseData.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-600 w-5' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al curso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 