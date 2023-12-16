import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, ContainerNoCoffee, HeaderInfo, Info } from './style'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'
import Illustration from '../../assets/Illustration.png'
import undrawNoData from '../../assets/undrawNoData.svg'

export function Success() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return (
      <ContainerNoCoffee>
        <div>
          <HeaderInfo>
            <h1>Ops..! Seu pedido não foi encontrado</h1>
            <span>Tente enviar seu pedido novamente!</span>
          </HeaderInfo>

          <img
            id="noOrderImg"
            src={undrawNoData}
            alt="Nenhum Pedido Encontrado"
          />
        </div>
      </ContainerNoCoffee>
    )
  }

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
              Entrega na Rua {orderInfo.street}, {orderInfo.number} <br />
              <strong>
                {orderInfo.city} - {orderInfo.neighborhood}, {orderInfo.state}
              </strong>
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
              <br /> <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
            </span>
          </div>
        </Info>
      </div>
      <img src={Illustration} alt="Pedido concluído" />
    </Container>
  )
}
