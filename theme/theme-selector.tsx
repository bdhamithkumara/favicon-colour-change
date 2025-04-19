"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "@/context/theme-context"
import { Sun, Moon, Monitor } from "lucide-react"

type ThemeSelectorProps = {
  onClose: () => void
}

export default function ThemeSelector({ onClose }: ThemeSelectorProps) {
  const {
    currentPrimaryColor,
    currentNeutralColor,
    currentRadius,
    currentTheme,
    setPrimaryColor,
    setNeutralColor,
    setRadius,
    setTheme,
  } = useTheme()

  const selectorRef = useRef<HTMLDivElement>(null)

  // Close the selector when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const primaryColors = [
    { name: "Black", value: "black" },
    { name: "Red", value: "red" },
    { name: "Orange", value: "orange" },
    { name: "Amber", value: "amber" },
    { name: "Yellow", value: "yellow" },
    { name: "Lime", value: "lime" },
    { name: "Green", value: "green" },
    { name: "Emerald", value: "emerald" },
    { name: "Teal", value: "teal" },
    { name: "Cyan", value: "cyan" },
    { name: "Sky", value: "sky" },
    { name: "Blue", value: "blue" },
    { name: "Indigo", value: "indigo" },
    { name: "Violet", value: "violet" },
    { name: "Purple", value: "purple" },
    { name: "Fuchsia", value: "fuchsia" },
    { name: "Pink", value: "pink" },
    { name: "Rose", value: "rose" },
  ]

  const neutralColors = [
    { name: "Slate", value: "slate" },
    { name: "Gray", value: "gray" },
    { name: "Zinc", value: "zinc" },
    { name: "Neutral", value: "neutral" },
    { name: "Stone", value: "stone" },
  ]

  const radiusOptions = ["0", "0.125", "0.25", "0.375", "0.5"]

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      black: "bg-black",
      red: "bg-red-500",
      orange: "bg-orange-500",
      amber: "bg-amber-500",
      yellow: "bg-yellow-500",
      lime: "bg-lime-500",
      green: "bg-green-500",
      emerald: "bg-emerald-500",
      teal: "bg-teal-500",
      cyan: "bg-cyan-500",
      sky: "bg-sky-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      violet: "bg-violet-500",
      purple: "bg-purple-500",
      fuchsia: "bg-fuchsia-500",
      pink: "bg-pink-500",
      rose: "bg-rose-500",
      slate: "bg-slate-500",
      gray: "bg-gray-500",
      zinc: "bg-zinc-500",
      neutral: "bg-neutral-500",
      stone: "bg-stone-500",
    }

    return colorMap[color] || "bg-gray-500"
  }

  return (
    <div
      ref={selectorRef}
      className="theme-selector bg-white rounded-lg shadow-lg p-6 w-[350px] border border-gray-200"
    >
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Primary</h3>
        <div className="grid grid-cols-3 gap-2">
          {primaryColors.map((color) => (
            <button
              key={color.name}
              className={`flex items-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors ${
                currentPrimaryColor === color.value ? "bg-gray-100 border-gray-300" : ""
              }`}
              onClick={() =>{ 
                setPrimaryColor(color.value) 
                console.log("setPrimaryColor",color.value )} }
            >
              <span className={`w-3 h-3 rounded-full mr-2 ${getColorClass(color.value)}`}></span>
              <span className="text-sm">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Neutral</h3>
        <div className="grid grid-cols-3 gap-2">
          {neutralColors.map((color) => (
            <button
              key={color.name}
              className={`flex items-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors ${
                currentNeutralColor === color.value ? "bg-gray-100 border-gray-300" : ""
              }`}
              onClick={() => setNeutralColor(color.value)}
            >
              <span className={`w-3 h-3 rounded-full mr-2 ${getColorClass(color.value)}`}></span>
              <span className="text-sm">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Radius</h3>
        <div className="grid grid-cols-5 gap-2">
          {radiusOptions.map((radius) => (
            <button
              key={radius}
              className={`px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-center ${
                currentRadius === radius ? "bg-gray-100 border-gray-300" : ""
              }`}
              onClick={() => setRadius(radius)}
            >
              {radius}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Theme</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`flex items-center justify-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors ${
              currentTheme === "light" ? "bg-gray-100 border-gray-300" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <Sun className="w-4 h-4 mr-2" />
            <span className="text-sm">Light</span>
          </button>
          <button
            className={`flex items-center justify-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors ${
              currentTheme === "dark" ? "bg-gray-100 border-gray-300" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <Moon className="w-4 h-4 mr-2" />
            <span className="text-sm">Dark</span>
          </button>
          <button
            className={`flex items-center justify-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors ${
              currentTheme === "system" ? "bg-gray-100 border-gray-300" : ""
            }`}
            onClick={() => setTheme("system")}
          >
            <Monitor className="w-4 h-4 mr-2" />
            <span className="text-sm">System</span>
          </button>
        </div>
      </div>
    </div>
  )
}
