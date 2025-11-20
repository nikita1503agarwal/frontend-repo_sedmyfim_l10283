import React from 'react'
import { Gamepad2, GraduationCap, Sparkles, Wand2 } from 'lucide-react'

const features = [
  {
    title: 'Interactive 3D',
    icon: Gamepad2,
    desc: 'Move your mouse to rotate and explore the beaker in real-time.'
  },
  {
    title: 'Learn by Play',
    icon: GraduationCap,
    desc: 'Perfect for playful science intros, anime clubs, and classrooms.'
  },
  {
    title: 'Whimsical Aesthetic',
    icon: Sparkles,
    desc: 'Soft gradients, sparkly liquid, and cozy pastel tones throughout.'
  },
  {
    title: 'Creator Friendly',
    icon: Wand2,
    desc: 'Built with a modern stack so you can expand it into anything.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(236,72,153,0.15),transparent_50%),radial-gradient(circle_at_80%_110%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900">Made to Delight</h2>
          <p className="mt-3 text-indigo-700/80 max-w-2xl mx-auto">A tiny magical site you can grow into a community, game hub, or learning space.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 border bg-white/80 backdrop-blur-md border-indigo-200/40 hover:border-indigo-400/60 transition shadow-sm hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-indigo-950">{f.title}</h3>
              <p className="mt-2 text-indigo-800/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
