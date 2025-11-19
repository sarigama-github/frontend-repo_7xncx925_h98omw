import React, { useMemo, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CartDrawer({ open, items, onClose, onRemove, onUpdateQty, onClear }) {
  const [placing, setPlacing] = useState(false)
  const total = useMemo(() => items.reduce((s,i)=> s + i.price * i.qty, 0), [items])

  const checkout = async () => {
    setPlacing(true)
    try {
      const order = {
        items: items.map(i => ({ product_id: i.product_id || i.id, name: i.name, size: i.size, qty: i.qty, price: i.price })),
        customer: { name: 'Guest', email: 'guest@example.com', phone: '000', address: 'N/A' },
        total: total
      }
      const res = await fetch(`${baseUrl}/orders`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(order) })
      const data = await res.json()
      alert('Order placed! #'+ data.id)
      onClear()
      onClose()
    } catch (e) {
      alert('Checkout failed')
    } finally {
      setPlacing(false)
    }
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'} `}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-red-950 border-l border-yellow-500/30 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between border-b border-yellow-500/30">
          <h3 className="text-yellow-200 font-bold text-lg">Your Cart</h3>
          <button onClick={onClose} className="text-yellow-300">Close</button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-11rem)]">
          {items.length === 0 && <p className="text-yellow-100">Your cart is empty.</p>}
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-red-900/60 border border-yellow-500/20 rounded-lg p-3">
              <div>
                <p className="text-yellow-100 font-semibold">{item.name}</p>
                <p className="text-yellow-200 text-sm">Size {item.size}</p>
                <p className="text-yellow-300 font-bold">${(item.price * item.qty).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={()=> onUpdateQty(idx, Math.max(1, item.qty-1))} className="px-2 rounded bg-yellow-500 text-red-900">-</button>
                <span className="text-yellow-100 w-6 text-center">{item.qty}</span>
                <button onClick={()=> onUpdateQty(idx, item.qty+1)} className="px-2 rounded bg-yellow-500 text-red-900">+</button>
                <button onClick={()=> onRemove(idx)} className="ml-2 text-red-200 hover:text-red-100">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-yellow-500/30">
          <div className="flex items-center justify-between text-yellow-100 mb-3">
            <span>Total</span>
            <span className="font-bold text-yellow-300">${total.toFixed(2)}</span>
          </div>
          <button disabled={placing || items.length===0} onClick={checkout} className="w-full py-3 rounded bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold disabled:opacity-60">
            {placing ? 'Placing Order...' : 'Checkout Securely'}
          </button>
        </div>
      </div>
    </div>
  )
}
