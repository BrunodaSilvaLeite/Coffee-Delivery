import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, HeaderInfo, Info } from './style'

export function Success() {
  const theme = useTheme()
  return (
    <Container>
      <div>
        <HeaderInfo>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </HeaderInfo>
        <Info>
          <div>
            <MapPin
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.purple }}
              size={32}
              weight="fill"
            />
            <span>
              Entrega em Rua João Daniel Martinelli, 102 <br />
              <strong>Farrapos - Porto Alegre, RS</strong>
            </span>
          </div>
          <div>
            <Timer
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.yellow }}
              size={32}
              weight="fill"
            />
            <span>
              Previsão de entrega
              <br /> <strong>20 min - 30 min</strong>{' '}
            </span>
          </div>
          <div>
            <CurrencyDollar
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors['yellow-dark'] }}
              size={32}
              weight="fill"
            />
            <span>
              Pagamento na entrega
              <br /> <strong>Cartão de Crédito</strong>
            </span>
          </div>
        </Info>
      </div>
      <img src="src/assets/illustration.png" alt="Pedido concluído" />
    </Container>
  )
}
