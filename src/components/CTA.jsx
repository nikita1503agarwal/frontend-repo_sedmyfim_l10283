import React from 'react'

function CTA() {
  return (
    <section id="signup" className="relative py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,0.15),transparent_50%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900">Join the Beta</h2>
        <p className="mt-3 text-indigo-800/80">Get early access, share feedback, and help shape the world.</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@anime.club" className="w-full sm:w-96 px-4 py-3 rounded-xl border border-indigo-200 bg-white/80 backdrop-blur placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button className="px-6 py-3 rounded-xl bg-indigo-700 text-white shadow-lg shadow-indigo-700/30 hover:shadow-indigo-700/50 transition">Sign up</button>
        </form>
        <p className="mt-3 text-xs text-indigo-600/70">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default CTA
