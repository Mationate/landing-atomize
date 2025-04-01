"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

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
      className="fixed top-0 w-full z-30 bg-black/5 dark:bg-black/50 backdrop-blur-md shadow-md transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-20 mt-4">
          {/* Espacio vacío a la izquierda para mantener el logo centrado */}
          <div className="w-10"></div>

          {/* Logo centrado */}
          <Link href="/" aria-label="Cruip" className="flex-grow-0">
            <Image
              src="/images/ATOMIZE.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-20 h-20"
            />
          </Link>

          {/* Toggle de tema a la derecha */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
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
