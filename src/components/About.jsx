import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-red-900 to-red-950 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-extrabold text-yellow-200">Crafted With Heritage</h3>
          <p className="mt-4 text-yellow-100/90 leading-relaxed">Kuse shoes, known locally as Khussa, are a symbol of Pakistani craftsmanship. Each pair is hand-stitched by artisans using premium leather and embellished with delicate gold thread work. Our collection honors centuries-old techniques while ensuring modern comfort.</p>
          <ul className="mt-6 space-y-2 text-yellow-100/90">
            <li>• Genuine leather and eco-friendly materials</li>
            <li>• Traditional gold embroidery and beadwork</li>
            <li>• Comfort-focused soles for all-day wear</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-yellow-500/20 to-transparent blur-2xl" />
          <img src="https://images.unsplash.com/photo-1512406134858-486ace1ff238?q=80&w=1400&auto=format&fit=crop" alt="Craftsmanship" className="relative w-full rounded-3xl border border-yellow-500/30 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
