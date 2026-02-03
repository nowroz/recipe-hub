"use client"

import useCartItemsContext from "@/app/hooks/useCartItemsContext"

const AddToCartButton = ({ recipe }) => {
  const { cartItems, addToCart } = useCartItemsContext()

  const handleAddToCart = (recipe) => {
    addToCart(recipe)
  }

  return (
    <button onClick={() => handleAddToCart(recipe)} disabled={cartItems.find(item => item.id === recipe.id)} className={`cursor-pointer hover:underline disabled:text-gray-300 disabled:no-underline disabled:cursor-not-allowed`}>Add to Cart</button>
  )
}

export default AddToCartButton
