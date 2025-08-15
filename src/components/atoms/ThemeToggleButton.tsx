'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Toggle between light and dark, this will override system preference
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/80 via-primary/40 to-primary/10 border border-primary/30 backdrop-blur-sm opacity-50 shadow-md">
        <Sun className="w-5 h-5 mx-auto text-primary" />
      </button>
    )
  }

  // Debug: Log current theme state
  console.log('Theme Debug:', { theme, resolvedTheme, systemTheme })

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-10 h-10 rounded-full 
                 bg-gradient-radial from-background via-primary/20 to-primary/60
                 border border-primary/40 backdrop-blur-sm 
                 hover:scale-110 transition-all duration-300 ease-out
                 shadow-lg hover:shadow-xl 
                 hover:from-background hover:via-primary/30 hover:to-primary/80
                 flex items-center justify-center"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 
                     ${resolvedTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 
                     ${resolvedTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
    </button>
  )
}
