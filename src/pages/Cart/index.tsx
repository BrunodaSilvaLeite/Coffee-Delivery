import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
  NoCoffeContainer,
} from './styles'
import { CoffeCounter } from '../../components/form/CoffeeCounter'
import { useCart } from '../../hooks/useCart'
import { coffees } from '../../../data.json'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextInput } from '../../components/form/TextInput'
import { Radio } from '../../components/form/Radio'
import undrawNoData from '../../assets/undrawNoData.svg'
import { Link } from 'react-router-dom'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const { cart, removeItem, decrementItem, IncrementItem, checkout } = useCart()
  const deliveryPrice = 3.5

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantityCoffe,
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
    defaultValues: {
      paymentMethod: 'credit', // valor inicial
    },
  })

  const totalItemPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(ItemId: string) {
    IncrementItem(ItemId)
  }

  function handleItemDecrement(ItemId: string) {
    decrementItem(ItemId)
  }

  function handleRemovItem(ItemId: string) {
    removeItem(ItemId)
  }
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  if (cart.length === 0) {
    return (
      <NoCoffeContainer>
        <div>
          <h1>Seu carrinho do Coffee Delivery está vazio</h1>
          <span>
            Veja as ofertas do dia <Link to="/">aqui!</Link>
          </span>

          <img
            id="noOrderImg"
            src={undrawNoData}
            alt="Nenhum Pedido Encontrado"
          />
        </div>
      </NoCoffeContainer>
    )
  }
  return (
    <Container>
      <InfoContainer>
        <h1>Complete seu pedido</h1>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressContainer>
            <AddressHeader>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
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
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
            </FormPayContainer>
          </FormPay>
        </form>
      </InfoContainer>
      <InfoContainer>
        <h1>Cafés selecionados</h1>
        <CartTotal>
          <div>
            {coffeesInCart.map((coffe) => (
              <Fragment key={coffe.id}>
                <Coffe>
                  <div>
                    <img src={coffe.image} alt="" />
                    <ContentActionCoffe>
                      <span>{coffe.title}</span>
                      <CoffeeInfo>
                        <CoffeCounter
                          quantity={coffe.quantity}
                          incrementQuantity={() =>
                            handleItemIncrement(coffe.id)
                          }
                          decrementQuantity={() =>
                            handleItemDecrement(coffe.id)
                          }
                        />
                        <button onClick={() => handleRemovItem(coffe.id)}>
                          <Trash></Trash>
                          <span>REMOVER</span>
                        </button>
                      </CoffeeInfo>
                    </ContentActionCoffe>
                  </div>
                  <aside>{coffe.price.toFixed(2)}</aside>
                </Coffe>
                <span />
              </Fragment>
            ))}
          </div>
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(deliveryPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>

              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(deliveryPrice + totalItemPrice)}
              </span>
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
