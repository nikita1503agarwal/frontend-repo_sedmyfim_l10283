import React from 'react'
import { Sparkles, Beaker, Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-pink-200/40 border border-white/30">
                <Beaker className="w-5 h-5 text-pink-600" />
              </div>
              <span className="text-white font-semibold tracking-tight">Anime Lab</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#world" className="hover:text-white transition">World</a>
              <a href="#signup" className="hover:text-white transition">Sign up</a>
            </nav>

            <button className="md:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
