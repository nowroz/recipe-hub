import { useContext } from "react"
import CartItemsContext from "../contexts/CartItemsContext"

const useCartItemsContext = () => {
  const cart = useContext(CartItemsContext)

  return cart
}

export default useCartItemsContext
