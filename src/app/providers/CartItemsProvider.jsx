"use client"

import { useState } from "react"
import CartItemsContext from "../contexts/CartItemsContext"

const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const cart = {
    cartItems,
    addToCart
  }

  return (
    <CartItemsContext value={cart}>
      {children}
    </CartItemsContext>
  )
}

export default CartItemsProvider
