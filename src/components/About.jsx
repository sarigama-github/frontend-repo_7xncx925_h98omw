import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-yellow-200 to-yellow-300 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-extrabold text-red-900">Crafted With Heritage</h3>
          <p className="mt-4 text-red-800/90 leading-relaxed">Kuse shoes, known locally as Khussa, are a symbol of Pakistani craftsmanship. Each pair is hand-stitched by artisans using premium leather and embellished with rich patterns. Our collection honors centuries-old techniques while ensuring modern comfort.</p>
          <ul className="mt-6 space-y-2 text-red-800/90">
            <li>• Genuine leather and eco-friendly materials</li>
            <li>• Intricate detailing and beadwork</li>
            <li>• Comfort-focused soles for all-day wear</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-600/20 to-transparent blur-2xl animate-pulse" />
          <img src="https://images.unsplash.com/photo-1568288796918-03e7d93306bd?auto=format&fit=crop&w=1600&q=80" alt="Craftsmanship" className="relative w-full rounded-3xl border border-red-600/30 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
