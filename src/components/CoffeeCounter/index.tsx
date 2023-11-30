import { Minus, Plus } from 'phosphor-react'
import { ContentCoffeeCounter } from './style'

export function CoffeCounter() {
  return (
    <ContentCoffeeCounter>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>0</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ContentCoffeeCounter>
  )
}
