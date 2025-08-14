'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-card/25 border border-border/20 backdrop-blur-sm opacity-50">
        <Sun className="w-5 h-5 mx-auto text-primary" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative w-10 h-10 rounded-full bg-card/25 border border-border/20 backdrop-blur-sm 
                 hover:scale-110 transition-all duration-300 ease-out
                 shadow-lg hover:shadow-xl
                 flex items-center justify-center"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 
                     ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 
                     ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} 
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
    </button>
  )
}
