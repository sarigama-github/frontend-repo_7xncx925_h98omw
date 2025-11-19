import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ name: '', rating: 5, comment: '', product_id: '' })

  useEffect(() => { load() }, [])

  const load = async () => {
    try {
      const res = await fetch(`${baseUrl}/reviews`)
      const data = await res.json()
      setReviews(data)
    } catch (e) { /* ignore */ }
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${baseUrl}/reviews`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      if (res.ok) {
        setForm({ name:'', rating:5, comment:'', product_id:'' })
        load()
      }
    } catch (e) {}
  }

  return (
    <section id="reviews" className="bg-gradient-to-b from-red-900 to-red-950 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-extrabold text-yellow-200">What our customers say</h3>
          <div className="mt-6 space-y-4">
            {reviews.map((r, idx) => (
              <div key={idx} className="bg-red-900/60 border border-yellow-500/30 rounded-xl p-4 text-yellow-100">
                <p className="font-semibold text-yellow-200">{r.name} • {r.rating}/5</p>
                <p className="opacity-90">{r.comment}</p>
              </div>
            ))}
            {reviews.length === 0 && <p className="text-yellow-100">No reviews yet. Be the first!</p>}
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-yellow-200">Leave a review</h4>
          <form onSubmit={submit} className="mt-4 space-y-3 bg-red-900/60 border border-yellow-500/30 rounded-2xl p-6">
            <input value={form.name} onChange={e=> setForm({...form, name:e.target.value})} className="w-full px-4 py-3 rounded bg-red-950/60 border border-yellow-500/30 text-yellow-100 placeholder-yellow-200/60" placeholder="Your name" required />
            <select value={form.rating} onChange={e=> setForm({...form, rating:Number(e.target.value)})} className="w-full px-4 py-3 rounded bg-red-950/60 border border-yellow-500/30 text-yellow-100">
              {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
            </select>
            <textarea value={form.comment} onChange={e=> setForm({...form, comment:e.target.value})} rows="4" className="w-full px-4 py-3 rounded bg-red-950/60 border border-yellow-500/30 text-yellow-100 placeholder-yellow-200/60" placeholder="Your feedback" required />
            <input value={form.product_id} onChange={e=> setForm({...form, product_id:e.target.value})} className="w-full px-4 py-3 rounded bg-red-950/60 border border-yellow-500/30 text-yellow-100 placeholder-yellow-200/60" placeholder="Product ID (optional)" />
            <button className="px-5 py-3 rounded bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold">Submit Review</button>
          </form>
        </div>
      </div>
    </section>
  )
}
