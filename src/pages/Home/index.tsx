import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Background from '../../assets/Background.png'
import {
  ContainerCoffe,
  Heading,
  Hero,
  HeroContent,
  Info,
} from '../Home/styles'
import { useTheme } from 'styled-components'
import imgCoffe from '../../assets/imgCoffe.png'
import { coffees } from '../../../data.json'
import { CoffeCard } from '../../components/CoffeCard'

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>
            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>
          <img src={imgCoffe} id="coffe-img" alt="" />
        </HeroContent>
        <img src={Background} id="hero-bg" alt="" />
      </Hero>

      <ContainerCoffe>
        <div>
          {coffees.map((coffee) => (
            <CoffeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </ContainerCoffe>
    </div>
  )
}
