import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [size, setSize] = useState('')
  const [ptype, setPtype] = useState('')

  useEffect(() => { fetchProducts() }, [])

  const fetchProducts = async (filters = {}) => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filters.size) params.set('size', filters.size)
      if (filters.ptype) params.set('ptype', filters.ptype)
      const res = await fetch(`${baseUrl}/products?${params.toString()}`)
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    fetchProducts({ size, ptype })
  }

  return (
    <section id="shop" className="bg-gradient-to-b from-red-950 to-red-900 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-200">Our Collection</h3>
          <div className="flex gap-3">
            <select value={size} onChange={e=>setSize(e.target.value)} className="bg-red-800/70 border border-yellow-500/40 text-yellow-100 rounded px-3 py-2">
              <option value="">All Sizes</option>
              {["5","6","7","8","9","10","11"].map(s=> <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={ptype} onChange={e=>setPtype(e.target.value)} className="bg-red-800/70 border border-yellow-500/40 text-yellow-100 rounded px-3 py-2">
              <option value="">All Types</option>
              {['Bridal','Festive','Casual'].map(t=> <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={applyFilters} className="px-4 py-2 rounded bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-semibold">Filter</button>
          </div>
        </div>

        {loading && <p className="text-yellow-100">Loading...</p>}
        {error && <p className="text-red-300">{error}</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id || p._id} className="bg-red-800/50 border border-yellow-500/30 rounded-2xl overflow-hidden shadow">
              <img src={p.image_url} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-yellow-100">
                <h4 className="font-bold text-yellow-200">{p.name}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-yellow-300 font-bold">${p.price.toFixed(2)}</span>
                  <button onClick={() => onAddToCart({ id: p.id, name: p.name, price: p.price, size: p.sizes?.[0] || '6', qty: 1, product_id: p.id })} className="px-3 py-1 rounded bg-yellow-500 text-red-900 font-semibold">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
