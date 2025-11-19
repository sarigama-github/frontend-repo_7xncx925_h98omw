import React from 'react'

export default function Banner() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-300" />
      <div className="absolute inset-0 opacity-60" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(185,28,28,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(185,28,28,0.25), transparent 45%), radial-gradient(circle at 50% 80%, rgba(220,38,38,0.2), transparent 40%)'}} />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-red-700 font-semibold uppercase tracking-widest">Kuse Royale</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-red-900 leading-tight drop-shadow">Handcrafted Pakistani Khussa</h2>
          <p className="mt-4 text-red-800/90">Experience timeless elegance with intricate gold-inspired details and premium leather. Perfect for weddings, festivals, and everyday comfort.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shop" className="px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-yellow-100 font-bold shadow hover:shadow-lg transition">Shop Collection</a>
            <a href="#about" className="px-5 py-3 rounded-full border border-red-600/40 text-red-800 hover:bg-red-600/10 transition">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-red-600/25 to-transparent blur-2xl animate-pulse" />
          <img src="https://images.unsplash.com/photo-1620799139507-eco22652?auto=format&fit=crop&w=900&q=80" alt="Khussa" className="relative w-full rounded-3xl border border-red-600/30 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
