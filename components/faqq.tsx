'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { CheckCircle } from 'lucide-react'

// Definición del tipo para los elementos FAQ
type FAQItem = {
  id: number
  question: string
  answer: string
  hasCheckIcon?: boolean
}

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-purple-600 text-2xl font-bold mr-2">?</span>
          <span className="text-xl font-medium">{item.question}</span>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4  text-lg pl-8"
          >
            <div className="flex">
              {item.hasCheckIcon && (
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              )}
              <div>{item.answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  // Datos de FAQ estáticos basados en la imagen
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: '¿Cómo sé si esta plataforma es para mi Organización?',
      answer: 'Si buscas una solución personalizada, escalable, con reportes detallados y contenido desarrollado por la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile esta es la mejor opción.',
      hasCheckIcon: true
    },
    {
      id: 2,
      question: '¿Cómo se personaliza la plataforma?',
      answer: 'Se adapta con tu imagen corporativa, acceso exclusivo y selección de contenidos alineados con tu estrategia de capacitación. Tenemos contenidos que sabemos que te servirán, pero si quieres crear otros, los podemos diseñar e implementar.',
      hasCheckIcon: true
    },
    {
      id: 3,
      question: '¿Puedo integrar mi contenido propio?',
      answer: 'Sí, puedes combinar nuestros cursos con los tuyos para una experiencia 100% personalizada. Esto te permitirá tener todo el contenido en un mismo lugar. Y si haces cursos con terceros, puedes ingresar la data de esos cursos para mantener la trazabilidad del aprendizaje.',
      hasCheckIcon: true
    },
    {
      id: 4,
      question: '¿Cómo se mide el avance de los colaboradores?',
      answer: 'Mapeamos toda la Organización, replicando la estructura jerárquica que tienes, lo que te permitirá obtener reportes detallados por persona, unidad, Departamento, Gerencia o toda la Organización.',
      hasCheckIcon: true
    }
  ]

  return (
    <section className="">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-2">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
