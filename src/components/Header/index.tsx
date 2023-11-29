import { Aside, Container } from './styles'
import LogoCoffeDelivery from '../../assets/LogoCoffeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={LogoCoffeDelivery} alt="logo" />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>
        <a href="#">
          <ShoppingCart size={22} weight="fill"></ShoppingCart>
        </a>
      </Aside>
    </Container>
  )
}
