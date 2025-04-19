"use client"

import { useState } from "react"
import Link from "next/link"
import ThemeSelector from "@/theme/theme-selector"
import { useTheme } from "@/context/theme-context"
import { SwatchBook } from 'lucide-react';

export default function Navbar() {
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false)
  const { currentTheme } = useTheme()

  const toggleThemeSelector = () => {
    setIsThemeSelectorOpen(!isThemeSelectorOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              
              <span className="ml-2 text-xl font-bold">Mylogo</span>
            </Link>
            
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={toggleThemeSelector}
                className="cursor-pointer"
                 >
                <SwatchBook />
              </button>
              {isThemeSelectorOpen && (
                <div className="absolute right-0 mt-2 z-50">
                  <ThemeSelector onClose={() => setIsThemeSelectorOpen(false)} />
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  )
}
