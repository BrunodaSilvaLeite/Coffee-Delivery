import { MapPin } from 'phosphor-react'
import {
  Container,
  AddressHeader,
  InfoContainer,
  AddressContainer,
  AddressForm,
} from './styles'

export function Cart() {
  return (
    <Container>
      <InfoContainer>
        <h1>Complete seu pedido</h1>
        <form action="">
          <AddressContainer>
            <AddressHeader>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>
            <AddressForm>
              <input type="text" id="cep" />
              <input type="text" id="street" />
              <input type="text" id="number" />
              <input type="text" id="fullAndress" />
              <input type="text" id="neighborhood" />
              <input type="text" id="city" />
              <input type="text" id="state" />
            </AddressForm>
          </AddressContainer>
        </form>
      </InfoContainer>
      <InfoContainer></InfoContainer>
    </Container>
  )
}
