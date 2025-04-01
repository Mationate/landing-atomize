"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Necesario para evitar error de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9"></div> // Placeholder para evitar saltos en el layout
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-700/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800 dark:text-white" />
      )}
    </button>
  )
} 