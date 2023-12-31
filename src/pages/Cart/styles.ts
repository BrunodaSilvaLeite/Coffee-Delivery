import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  max-width: 1160px;
  padding: 3rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  gap: 0.75rem;
  h1 {
    ${mixins.fonts.textL}
    font-weight: 700;
  }
  @media (max-width: 470px) {
    h1 {
      text-align: center;
    }
  }
`
export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  div {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-text']};
  }
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const AddressContainer = styled.div`
  width: 100%;
  min-width: 640px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};

  @media (max-width: 650px) {
    min-width: 0px;
  }
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';

  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
  @media (max-width: 470px) {
    grid-template-areas:
      'cep . .'
      'street street street'
      'number number number'
      'fullAddress fullAddress fullAddress'
      'city city city '
      'neighborhood neighborhood state';
  }
`
export const FormPay = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  margin-top: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
export const FormPayHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  div {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
export const FormPayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
  @media (max-width: 500px) {
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  min-width: 448px;

  @media (max-width: 1140px) {
    min-width: 640px;
  }
  @media (max-width: 650px) {
    min-width: 450px;
  }
  @media (max-width: 470px) {
    min-width: 0px;
  }
`
export const Fragment = styled.div`
  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 1.5rem 0;
  }
`
export const Coffe = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    > img {
      width: 64px;
      height: 64px;
    }
    display: flex;
    gap: 1.25rem;
  }
  > aside {
    font-weight: bold;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0rem 0.5rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    line-height: 0;
    border-radius: 6px;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
export const ContentActionCoffe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textLRoboto}
      font-weight: bold;
    }
  }
`
export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  border-radius: 6px;
`
export const NoCoffeContainer = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};

  > div {
    margin: 0 auto;
    width: 600px;
    text-align: center;
    > h1 {
      ${mixins.fonts.titleL}
      margin-bottom: 0.5rem;
    }
    > span {
      ${mixins.fonts.textLRoboto}
    }
    a {
      text-decoration: none;
    }
    a:hover {
      opacity: 0.8;
    }
  }
  img {
    width: 492px;
    height: 293px;
    margin-top: 3rem;
  }
  @media (max-width: 860px) {
    border: none;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 350px;
      height: 293px;
      margin-top: 3rem;
    }
  }
  @media (max-width: 460px) {
    img {
      width: 250px;
      height: 293px;
      margin-top: 3rem;
    }
  }
`
