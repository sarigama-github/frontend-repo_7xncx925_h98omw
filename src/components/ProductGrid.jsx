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
    <section id="shop" className="bg-gradient-to-b from-yellow-100 to-yellow-200 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-red-900">Our Collection</h3>
          <div className="flex gap-3">
            <select value={size} onChange={e=>setSize(e.target.value)} className="bg-yellow-50/80 border border-red-600/20 text-red-900 rounded px-3 py-2">
              <option value="">All Sizes</option>
              {["5","6","7","8","9","10","11"].map(s=> <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={ptype} onChange={e=>setPtype(e.target.value)} className="bg-yellow-50/80 border border-red-600/20 text-red-900 rounded px-3 py-2">
              <option value="">All Types</option>
              {['Bridal','Festive','Casual'].map(t=> <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={applyFilters} className="px-4 py-2 rounded bg-gradient-to-r from-red-600 to-red-700 text-yellow-100 font-semibold">Filter</button>
          </div>
        </div>

        {loading && <p className="text-red-800 animate-pulse">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id || p._id} className="group bg-yellow-50 border border-red-600/20 rounded-2xl overflow-hidden shadow transition hover:shadow-lg">
              <div className="relative">
                <img src={p.image_url} alt={p.name} className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-red-700/30 to-transparent" />
              </div>
              <div className="p-4 text-red-900">
                <h4 className="font-bold text-red-800">{p.name}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-red-700 font-bold">${p.price.toFixed(2)}</span>
                  <button onClick={() => onAddToCart({ id: p.id || p._id, name: p.name, price: p.price, size: p.sizes?.[0] || '6', qty: 1, product_id: p.id || p._id })} className="px-3 py-1 rounded bg-red-600 text-yellow-100 font-semibold hover:bg-red-700 transition">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
