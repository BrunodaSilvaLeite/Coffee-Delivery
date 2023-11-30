import { Aside, Container } from './styles'
import LogoCoffeDelivery from '../../assets/LogoCoffeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <img src={LogoCoffeDelivery} alt="logo" />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>
        <Link to="/cart">
          <ShoppingCart size={22} weight="fill"></ShoppingCart>
        </Link>
      </Aside>
    </Container>
  )
}
