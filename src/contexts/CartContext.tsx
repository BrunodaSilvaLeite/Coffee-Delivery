import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { cartReducer, Item, Order } from '../reducer/cart/reducer'
import {
  addItemAction,
  removeItemAction,
  decrementItemAction,
  incrementItemAction,
  checkoutCartAction,
} from '../reducer/cart/actions'
import { OrderInfo } from '../pages/Cart'
import { useNavigate } from 'react-router-dom'
interface CartContextProviderProps {
  children: ReactNode
}

export interface CartContextProps {
  addItem: (item: Item) => void
  cart: Item[]
  orders: Order[]
  removeItem: (itemId: Item['id']) => void
  decrementItem: (itemId: Item['id']) => void
  IncrementItem: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
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
  const navigate = useNavigate()
  const { cart } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }
  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function decrementItem(itemId: Item['id']) {
    dispatch(decrementItemAction(itemId))
  }

  function IncrementItem(itemId: Item['id']) {
    dispatch(incrementItemAction(itemId))
  }
  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }
  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])
  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        removeItem,
        decrementItem,
        IncrementItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
