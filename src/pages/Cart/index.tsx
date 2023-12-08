import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import {
  Container,
  AddressHeader,
  InfoContainer,
  AddressContainer,
  AddressForm,
  FormPay,
  FormPayHeader,
  FormPayContainer,
  CartTotal,
  Fragment,
  Coffe,
  CoffeeInfo,
  ContentActionCoffe,
  CartTotalInfo,
  CheckoutButton,
} from './styles'
import { CoffeCounter } from '../../components/CoffeeCounter'

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
              <input type="text" id="cep" placeholder="CEP" />
              <input type="text" id="street" placeholder="Rua" />
              <input type="text" id="number" placeholder="Número" />
              <input type="text" id="fullAndress" placeholder="Complemento" />
              <input type="text" id="neighborhood" placeholder="Bairro" />
              <input type="text" id="city" placeholder="Cidade" />
              <input type="text" id="state" placeholder="UF" />
            </AddressForm>
          </AddressContainer>
          <FormPay>
            <FormPayHeader>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormPayHeader>
            <FormPayContainer>
              <input type="radio" id="button1" name="button" />
              <label htmlFor="button1" className="radio-button-label">
                <CreditCard size={16} />
                CARTÃO DE CRÉITO
              </label>

              <input type="radio" id="button2" name="button" />
              <label htmlFor="button2" className="radio-button-label">
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </label>

              <input type="radio" id="button3" name="button" />
              <label htmlFor="button3" className="radio-button-label">
                <Money size={16} />
                DINHEIRO
              </label>
            </FormPayContainer>
          </FormPay>
        </form>
      </InfoContainer>
      <InfoContainer>
        <h1>Cafés selecionados</h1>
        <CartTotal>
          <Fragment>
            <Coffe>
              <div>
                <img src="/images/coffees/expresso.png" alt="" />
                <ContentActionCoffe>
                  <span>Expresso Tradicional</span>
                  <CoffeeInfo>
                    <CoffeCounter />
                    <button>
                      <Trash></Trash>
                      <span>REMOVER</span>
                    </button>
                  </CoffeeInfo>
                </ContentActionCoffe>
              </div>
              <aside>R$ 9,90</aside>
            </Coffe>
            <span />
          </Fragment>
          <Fragment>
            <Coffe>
              <div>
                <img src="/images/coffees/expresso-cremoso.png" alt="" />
                <ContentActionCoffe>
                  <span>Expresso Cremoso</span>
                  <CoffeeInfo>
                    <CoffeCounter />
                    <button>
                      <Trash></Trash>
                      <span>REMOVER</span>
                    </button>
                  </CoffeeInfo>
                </ContentActionCoffe>
              </div>
              <aside>R$ 9,90</aside>
            </Coffe>
            <span />
          </Fragment>
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>10</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>10</span>
            </div>

            <div>
              <span>Total</span>
              <span>10</span>
            </div>
          </CartTotalInfo>
          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
