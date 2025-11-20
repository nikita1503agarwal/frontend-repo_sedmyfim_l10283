import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-sm text-indigo-600/70">Made with sparkles ✨</footer>
    </div>
  )
}

export default App
