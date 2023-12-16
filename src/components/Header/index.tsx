import { Aside, Container } from './styles'
import LogoCoffeDelivery from '../../assets/LogoCoffeDelivery.svg'
import { MapPin, ShoppingCart, GithubLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src={LogoCoffeDelivery} alt="logo" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>
        <a
          href="https://github.com/BrunodaSilvaLeite/Coffe-Deliver"
          id="linkGithub"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <GithubLogo size={22} weight="fill" />
            <span>Repositório Github</span>
          </div>
        </a>
        <Link to="/cart">
          <ShoppingCart size={22} weight="fill"></ShoppingCart>
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
