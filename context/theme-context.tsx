"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ThemeContextType = {
  currentPrimaryColor: string
  currentNeutralColor: string
  currentRadius: string
  currentTheme: string
  setPrimaryColor: (color: string) => void
  setNeutralColor: (color: string) => void
  setRadius: (radius: string) => void
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  currentPrimaryColor: "red",
  currentNeutralColor: "gray",
  currentRadius: "0.25",
  currentTheme: "light",
  setPrimaryColor: () => {},
  setNeutralColor: () => {},
  setRadius: () => {},
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {


  console.log("ThemeProvider component rendered")

  const [currentPrimaryColor, setCurrentPrimaryColor] = useState("red")
  const [currentNeutralColor, setCurrentNeutralColor] = useState("gray")
  const [currentRadius, setCurrentRadius] = useState("0.25")
  const [currentTheme, setCurrentTheme] = useState("light")

  // Load theme preferences from localStorage on component mount
  useEffect(() => {

    console.log("Loading theme preferences from localStorage...")

    const storedPrimaryColor = localStorage.getItem("primaryColor")
    const storedNeutralColor = localStorage.getItem("neutralColor")
    const storedRadius = localStorage.getItem("radius")
    const storedTheme = localStorage.getItem("theme")

    if (storedPrimaryColor) setCurrentPrimaryColor(storedPrimaryColor)
    if (storedNeutralColor) setCurrentNeutralColor(storedNeutralColor)
    if (storedRadius) setCurrentRadius(storedRadius)
    if (storedTheme) setCurrentTheme(storedTheme)
  }, [])

  // Apply theme changes to document
  useEffect(() => {
    // Apply theme mode (light/dark)
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else if (currentTheme === "light") {
      document.documentElement.classList.remove("dark")
    } else if (currentTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    document.documentElement.style.setProperty("--border-radius", `${currentRadius}rem`)
    document.documentElement.style.setProperty("--neutral-color", currentNeutralColor)

  }, [currentTheme, currentRadius, currentPrimaryColor, currentNeutralColor])

  const setPrimaryColor = (color: string) => {
    setCurrentPrimaryColor(color)
    localStorage.setItem("primaryColor", color)
  }

  const setNeutralColor = (color: string) => {
    setCurrentNeutralColor(color)
    localStorage.setItem("neutralColor", color)
  }

  const setRadius = (radius: string) => {
    setCurrentRadius(radius)
    localStorage.setItem("radius", radius)
  }

  const setTheme = (theme: string) => {
    setCurrentTheme(theme)
    localStorage.setItem("theme", theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        currentPrimaryColor,
        currentNeutralColor,
        currentRadius,
        currentTheme,
        setPrimaryColor,
        setNeutralColor,
        setRadius,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
