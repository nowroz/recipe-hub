"use client"

import useCartItemsContext from "@/app/hooks/useCartItemsContext"

const CartItems = () => {
  const { cartItems } = useCartItemsContext()

  return (
    <div className="border border-slate-400 min-h-1/12 p-4">
      <h3 className="text-4xl font-bold mb-4">Cart Items</h3>
      <hr className="border-slate-600 mb-4" />
      <div className="flex flex-col gap-1">
        {
          cartItems.map(item => (
            <p key={item.id}>{item.title}</p>
          ))
        }
      </div>
    </div>
  )
}

export default CartItems
