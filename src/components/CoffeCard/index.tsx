import { ShoppingCart, CheckCircle } from 'phosphor-react'
import {
  CoffeImage,
  Container,
  Control,
  Description,
  Price,
  Tags,
  Tiltle,
} from './style'
import { CoffeCounter } from '../form/CoffeeCounter'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'

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
  const [quantityCoffe, setQuantityCoffe] = useState(1)
  const [isItemAdd, setIsItemAdd] = useState(false)
  const { addItem } = useCart()
  const theme = useTheme()

  function incrementQuantity() {
    setQuantityCoffe(quantityCoffe + 1)
  }

  function decrementQuantity() {
    if (quantityCoffe > 1) setQuantityCoffe(quantityCoffe - 1)
  }

  function handleAddNewItem() {
    addItem({ id: coffee.id, quantityCoffe })
    setIsItemAdd(true)
    setQuantityCoffe(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdd) {
      timeout = setTimeout(() => {
        setIsItemAdd(false)
      }, 1000)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdd])
  return (
    <Container>
      <CoffeImage src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Tiltle>{coffee.title}</Tiltle>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <CoffeCounter
          quantity={quantityCoffe}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <button onClick={handleAddNewItem}>
          {isItemAdd ? (
            <CheckCircle
              size={22}
              weight="fill"
              color={theme.colors['base-card']}
            />
          ) : (
            <ShoppingCart size={22} weight="fill"></ShoppingCart>
          )}
        </button>
      </Control>
    </Container>
  )
}
