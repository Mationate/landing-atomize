"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresElement = document.getElementById('features');
      if (featuresElement) {
        const { top } = featuresElement.getBoundingClientRect();
        setShowEnterButton(top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-30 bg-black bg-opacity-5 backdrop-blur-md shadow-md transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-center h-20 mt-4">
          {/* Logo siempre visible y centrado */}
          <Link href="/" aria-label="Cruip">
            <Image
              src="/images/logo-dark.svg"
              alt="Logo"
              width={64}
              height={64}
              className="w-28 h-28"
            />
          </Link>

          {/* Botón Entrar visible al llegar a Features */}
          {showEnterButton && (
            <div className="absolute right-0 fade-in-animation">
              <a
                className="btn text-white bg-color3bs hover:bg-color3bsdarker"
                href="https://academia.3bslab.com"
              >
                Entrar
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-animation {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </header>
  );
}
