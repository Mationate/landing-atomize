"use client";

import { Check, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const includedFeatures = [
  'Acceso a cursos completos',
  'Actualizaciones periódicas y nuevos cursos',
  'Acceso exclusivo a contenido como podcasts, entrevistas, demostraciones y más',
  'Soporte prioritario',
];

export default function Pricing() {
  // THIS FIX HYDRATION ERROR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
          >
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              ¡Black Week en 3BSLab!
            </h2>
            <p className="text-2xl text-gray-300">Desbloquea tu potencial tecnológico con un precio irresistible.</p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden lg:flex"
            >
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-3xl font-bold tracking-tight text-color3bs">Suscripción Mensual Premium</h3>
                <p className="mt-6 text-lg leading-7 text-gray-300">
                  Aprovecha esta oferta exclusiva de Black Week y transforma tu carrera con acceso ilimitado a nuestro contenido de élite.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-color3bs">Beneficios Exclusivos:</h4>
                  <div className="h-px flex-auto bg-gradient-to-r from-color3bs via-purple-500 to-pink-500" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-base leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-x-3 items-center"
                    >
                      <Check className="h-6 w-5 flex-none text-color3bs" aria-hidden="true" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-8 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-2xl bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
                >
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-300">Precio Black Week</p>
                    <motion.p
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      className="mt-6 flex items-baseline justify-center gap-x-2"
                    >
                      <span className="text-7xl font-extrabold tracking-tight text-color3bs">$19</span>
                      <span className="text-2xl font-semibold leading-6 tracking-wide text-gray-300">USD / mes</span>
                    </motion.p>
                    <p className="mt-3 text-sm text-gray-300">¡Para siempre!</p>
                    <p className="mt-6 text-xs leading-5 text-gray-400">
                      Facturación mensual. Cancela cuando quieras.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </section>
  );
}

