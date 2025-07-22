"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="animated-gradient py-20 text-white">
      {/* Background Layers */}
      {/* <div className="animated-gradient py-20 text-white" /> */}

      <div
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-bounce" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-md animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Profile Image Section */}
        <div className="mb-16 md:mb-20">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse"></div>

            {/* Middle ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-white/10 rounded-full"></div>

            {/* Profile image */}
            <div className="relative rounded-full overflow-hidden border-4">
              <Image
                src="/images/CAPS_IMG_4642.jpg"
                alt="Blanca's portrait"
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  objectPosition: "60% center",
                }}
                priority
                className="rounded-full scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-700" />
            <div className="absolute top-1/2 -left-4 w-3 h-3 bg-white rounded-full animate-pulse" />
            <div className="absolute top-1/4 -right-4 w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-500" />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Blanca
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"></div>
              <p className="text-xl md:text-2xl text-gray-300 font-light">Software Developer</p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"></div>
            </div>
          </div>

          <div className="py-6 md:py-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Versatile developer bridging innovative solutions with reliable technical excellence.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-8 md:space-y-12 pt-8 md:pt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/cv.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-center min-w-[160px]"
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://www.linkedin.com/in/blanca-sf/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-purple-900 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 text-center min-w-[160px]"
              >
                My LinkedIn
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/70 text-sm">Scroll down</span>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
