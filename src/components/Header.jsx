import React from 'react'

export default function Header({ cartCount, onCartToggle }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-yellow-200/70 border-b border-red-600/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-[0_0_25px_rgba(185,28,28,0.35)]"></span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-red-800 drop-shadow">Kuse Royale</h1>
            <p className="text-xs text-red-700/80">Traditional Pakistani Khussa</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-red-800">
          <a href="#home" className="hover:text-red-600 transition">Home</a>
          <a href="#shop" className="hover:text-red-600 transition">Shop</a>
          <a href="#about" className="hover:text-red-600 transition">About</a>
          <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          <a href="#reviews" className="hover:text-red-600 transition">Reviews</a>
        </nav>
        <button onClick={onCartToggle} className="relative rounded-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-yellow-100 font-semibold shadow hover:shadow-lg transition">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-yellow-300 text-red-900 rounded-full w-6 h-6 grid place-items-center border border-red-700">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  )
}
