import React from 'react'

export default function Header({ cartCount, onCartToggle }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-red-900/70 border-b border-yellow-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_25px_rgba(234,179,8,0.5)]"></span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-yellow-300 drop-shadow">Kuse Royale</h1>
            <p className="text-xs text-yellow-100/80">Traditional Pakistani Khussa</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-yellow-100">
          <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          <a href="#shop" className="hover:text-yellow-300 transition">Shop</a>
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          <a href="#reviews" className="hover:text-yellow-300 transition">Reviews</a>
        </nav>
        <button onClick={onCartToggle} className="relative rounded-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-semibold shadow hover:shadow-lg transition">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-yellow-100 rounded-full w-6 h-6 grid place-items-center border border-yellow-300">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  )
}
