import React from 'react'
import { DollarSign, User, BarChart3 } from 'lucide-react'

export default function TraditionalTraining() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Sección header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h3 mb-4">Sabemos que la formación tradicional es:</h2>
          </div>

          {/* Contenido en 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Columna 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-200">
                <DollarSign className="w-10 h-10" />
              </div>
              <h3 className="h3 mb-2">Costosa</h3>
              <p className="text-lg text-gray-400">
                por la limitación de recursos y tiempo de dedicación
              </p>
            </div>
            
            {/* Columna 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-200">
                <User className="w-10 h-10" />
              </div>
              <h3 className="h3 mb-2">Poco personalizada</h3>
              <p className="text-lg text-gray-400">
                por la limitación de recursos y tiempo de dedicación
              </p>
            </div>
            
            {/* Columna 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-200">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="h3 mb-2">Difícil de medir</h3>
              <p className="text-lg text-gray-400">
                por la limitación de recursos y tiempo de dedicación
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
} 