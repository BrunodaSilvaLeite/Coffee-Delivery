import { createContext, ReactNode, useReducer } from 'react'
import { cartReducer, Item } from '../reducer/cart/reducer'
import { addItemAction } from '../reducer/cart/actions'
interface CartContextProviderProps {
  children: ReactNode
}

export interface CartContextProps {
  addItem: (item: Item) => void
  cart: Item[]
}
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const { cart } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }
  return (
    <CartContext.Provider value={{ addItem, cart }}>
      {children}
    </CartContext.Provider>
  )
}
