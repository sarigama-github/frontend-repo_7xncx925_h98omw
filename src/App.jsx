import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import CartDrawer from './components/CartDrawer'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Seed products on first load if needed
    fetch(`${baseUrl}/products`).then(async (r)=>{
      const data = await r.json()
      if (!Array.isArray(data) || data.length === 0) {
        await fetch(`${baseUrl}/seed`, { method:'POST' })
      }
    }).catch(()=>{})
  }, [])

  const addToCart = (item) => {
    setCart(prev => [...prev, item])
    setCartOpen(true)
  }

  const removeFromCart = (idx) => setCart(prev => prev.filter((_,i)=> i!==idx))
  const updateQty = (idx, qty) => setCart(prev => prev.map((it,i)=> i===idx ? {...it, qty} : it))
  const clearCart = () => setCart([])

  return (
    <div className="min-h-screen bg-black">
      <Header cartCount={cart.length} onCartToggle={() => setCartOpen(!cartOpen)} />
      <main>
        <Banner />
        <ProductGrid onAddToCart={addToCart} />
        <About />
        <Contact />
        <Reviews />
      </main>
      <CartDrawer open={cartOpen} items={cart} onClose={()=> setCartOpen(false)} onRemove={removeFromCart} onUpdateQty={updateQty} onClear={clearCart} />
      <footer className="bg-red-950 border-t border-yellow-500/30 py-6 text-center text-yellow-200">© {new Date().getFullYear()} Kuse Royale. All rights reserved.</footer>
    </div>
  )
}

export default App
