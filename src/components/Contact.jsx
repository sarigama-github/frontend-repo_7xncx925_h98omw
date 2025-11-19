import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-yellow-300 to-yellow-200 py-14">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-extrabold text-red-900">We're here to help</h3>
          <p className="mt-2 text-red-800/90">Questions about fit, sizes, or bulk orders? Reach out and our team will assist you.</p>
          <div className="mt-6 space-y-2 text-red-800/90">
            <p>Email: support@kuseroyale.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>
        </div>
        <div className="bg-yellow-100 border border-red-600/20 rounded-2xl p-6">
          <form onSubmit={(e)=> e.preventDefault()} className="space-y-3">
            <input className="w-full px-4 py-3 rounded bg-yellow-50 border border-red-600/20 text-red-900 placeholder-red-800/40" placeholder="Your name" />
            <input className="w-full px-4 py-3 rounded bg-yellow-50 border border-red-600/20 text-red-900 placeholder-red-800/40" placeholder="Email" />
            <textarea rows="4" className="w-full px-4 py-3 rounded bg-yellow-50 border border-red-600/20 text-red-900 placeholder-red-800/40" placeholder="Message" />
            <button className="px-5 py-3 rounded bg-gradient-to-r from-red-600 to-red-700 text-yellow-100 font-bold">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
