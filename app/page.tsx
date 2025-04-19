"use client"
import { useTheme } from "@/context/theme-context"

export default function Home() {

  const { currentPrimaryColor, currentTheme } = useTheme()

  

    const getPrimaryColorClass = (color: string) => {
      const colorMap: Record<string, string> = {
        black: "text-black",
        red: "text-red-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-500",
        lime: "text-lime-500",
        green: "text-green-500",
        emerald: "text-emerald-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        violet: "text-violet-500",
        purple: "text-purple-500",
        fuchsia: "text-fuchsia-500",
        pink: "text-pink-500",
        rose: "text-rose-500",
      }
  
      return colorMap[color] || "text-gray-500"
    }
  
    const getPrimaryBgClass = (color: string) => {
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
      }
  
      return colorMap[color] || "bg-gray-500"
    }
  

    const primaryTextClass = getPrimaryColorClass(currentPrimaryColor)
    const primaryBgClass = getPrimaryBgClass(currentPrimaryColor)


  return (
<div className="min-h-screen flex items-center justify-center ">
  <div className={`pt-24 w-full ${currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block">The Intuitive</span>
          <span className={`block ${primaryTextClass}`}>UI Library</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create beautiful, responsive & accessible web apps quickly with our customizable components built with Tailwind CSS.
        </p>
        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
          <div className={`custom-border-radius shadow`}>
            <a
              href="#"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium custom-border-radius text-white hover:text-black ${primaryBgClass} hover:opacity-90 md:py-4 md:text-lg md:px-10`}
            >
              Get started
            </a>
          </div>
          <div className={`mt-3 custom-border-radius shadow sm:mt-0 sm:ml-3`}>
            <a
              href="#"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium custom-border-radius ${currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"} hover:bg-gray-50 md:py-4 md:text-lg md:px-10 hover:text-black`}
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
