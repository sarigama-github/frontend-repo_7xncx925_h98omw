import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.3),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(127,29,29,0.6),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black text-yellow-300 drop-shadow leading-tight">
            Handcrafted Kuse Shoes
          </h2>
          <p className="mt-4 text-yellow-100/90 text-lg">
            Celebrate the heritage of Pakistan with exquisitely embroidered Khussas — crafted with care, designed for comfort, and made to shine.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#shop" className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-red-900 font-bold shadow hover:shadow-xl transition">Shop Now</a>
            <a href="#about" className="px-6 py-3 rounded-lg border border-yellow-400/70 text-yellow-200 hover:bg-yellow-400/10 transition">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-full" />
          <img
            className="relative rounded-2xl ring-2 ring-yellow-500/40 shadow-2xl"
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            alt="Kuse Shoes"
          />
        </div>
      </div>
    </section>
  )
}
