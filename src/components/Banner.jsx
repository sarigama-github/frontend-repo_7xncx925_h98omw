import React from 'react'

export default function Banner() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-950" />
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(234,179,8,0.4), transparent 40%), radial-gradient(circle at 80% 30%, rgba(234,179,8,0.35), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,215,0,0.3), transparent 40%)'}} />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-yellow-300 font-semibold uppercase tracking-widest">Kuse Royale</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-yellow-100 leading-tight drop-shadow">Handcrafted Pakistani Khussa</h2>
          <p className="mt-4 text-yellow-100/85">Experience timeless elegance with intricate gold embroidery and premium leather. Perfect for weddings, festivals, and everyday comfort.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shop" className="px-5 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-red-900 font-bold shadow hover:shadow-lg transition">Shop Collection</a>
            <a href="#about" className="px-5 py-3 rounded-full border border-yellow-400/60 text-yellow-200 hover:bg-yellow-400/10 transition">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-yellow-500/30 to-transparent blur-2xl" />
          <img src="https://images.unsplash.com/photo-1620799139507-eco22652?auto=format&fit=crop&w=900&q=80" alt="Khussa" className="relative w-full rounded-3xl border border-yellow-500/30 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
