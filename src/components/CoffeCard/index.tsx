import { ShoppingCart } from 'phosphor-react'
import {
  CoffeImage,
  Container,
  Control,
  Description,
  Price,
  Tags,
  Tiltle,
} from './style'
import { CoffeCounter } from '../CoffeeCounter'

interface coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface props {
  coffee: coffee
}
export function CoffeCard({ coffee }: props) {
  return (
    <Container>
      <CoffeImage src={coffee.image} alt="" />
      <Tags>tradicional</Tags>
      <Tiltle>{coffee.title}</Tiltle>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span id="price-value">{coffee.price.toFixed(2)}</span>
        </Price>
        <CoffeCounter />
        <button id="button_car">
          <ShoppingCart size={22} weight="fill"></ShoppingCart>
        </button>
      </Control>
    </Container>
  )
}
