import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-indigo-200 to-sky-200" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-pink-400/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-indigo-400/40 blur-3xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center py-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white text-pink-700 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            Pastel anime vibes
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-indigo-900">
            Enter the Whimsical Lab
          </h1>
          <p className="mt-4 text-indigo-800/80 text-lg max-w-xl">
            A playful 3D world with a sparkly beaker that follows your cursor. Built for gaming, learning, and pure wonder.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#world" className="px-5 py-3 rounded-xl bg-indigo-700 text-white shadow-lg shadow-indigo-700/30 hover:shadow-indigo-700/50 transition">Explore the world</a>
            <a href="#signup" className="px-5 py-3 rounded-xl bg-white/70 text-indigo-900 border border-white hover:bg-white transition">Join beta</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden border border-white/50 shadow-2xl">
          <Spline scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Frosted top overlay for polish */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30" />
        </div>
      </div>
    </section>
  )
}

export default Hero
