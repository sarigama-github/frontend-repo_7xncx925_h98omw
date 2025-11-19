import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function StaticSections() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(new URL('/reviews', BACKEND)).then(r=>r.json()).then(setReviews).catch(()=>{})
  }, [])

  return (
    <>
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-extrabold text-yellow-300 mb-3">About Kuse Shoes</h3>
        <p className="text-yellow-100/90 leading-relaxed">
          Khussa shoes, also known as Kuse, are a timeless symbol of South Asian craftsmanship. Each pair is meticulously hand-stitched by artisans in Pakistan using traditional techniques passed down through generations. We work closely with small workshops to bring you authentic designs with modern comfort.
        </p>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-extrabold text-yellow-300 mb-3">Contact</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-red-900/50 border border-yellow-600/30 rounded-xl p-6">
            <p className="text-yellow-100">Customer Support</p>
            <p className="text-yellow-200 mt-2">Email: support@kuseroyale.pk</p>
            <p className="text-yellow-200">Phone: +92 300 1234567</p>
          </div>
          <div className="bg-red-900/50 border border-yellow-600/30 rounded-xl p-6">
            <p className="text-yellow-100">Business Hours</p>
            <p className="text-yellow-200 mt-2">Mon - Sat: 10:00 - 18:00 PKT</p>
            <p className="text-yellow-200">Sun: Closed</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-extrabold text-yellow-300 mb-6">Customer Reviews</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length === 0 ? (
            <p className="text-yellow-100/80">No reviews yet — be the first to share your experience!</p>
          ) : reviews.map(r => (
            <div key={r._id} className="bg-red-900/50 border border-yellow-600/30 rounded-xl p-4">
              <p className="text-yellow-200 font-semibold">{r.name}</p>
              <p className="text-yellow-300">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</p>
              <p className="text-yellow-100/90 mt-2">{r.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
