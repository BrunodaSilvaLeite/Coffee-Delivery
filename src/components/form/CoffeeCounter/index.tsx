import { Minus, Plus } from 'phosphor-react'
import { ContentCoffeeCounter } from './style'

interface props {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function CoffeCounter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: props) {
  return (
    <ContentCoffeeCounter>
      <button onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </ContentCoffeeCounter>
  )
}
