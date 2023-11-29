import { ShoppingCart } from 'phosphor-react'
import { CoffeImage, Container } from './style'

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
      <div>
        <CoffeImage src={coffee.image} alt="" />
        <span>tradicional</span>
      </div>
      <div>
        <h2>{coffee.title}</h2>
        <span>{coffee.description}</span>
      </div>
      <div>
        <span>{coffee.price}</span>
        <button>
          <ShoppingCart size={22} weight="fill"></ShoppingCart>
        </button>
      </div>
    </Container>
  )
}
