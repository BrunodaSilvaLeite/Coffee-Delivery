import { createContext, ReactNode } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}
export interface Item {
  id: string
  quantityCoffe: number
}
export interface CartContextProps {
  addItem: (item: Item) => void
}
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  function addItem(item: Item) {
    console.log(item)
  }
  return (
    <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
  )
}
