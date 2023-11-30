import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
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
  gap: 0.75rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAndress fullAndress'
    'neighborhood city state';

  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
  input {
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    background: ${({ theme }) => theme.colors['base-input']};
  }
  #cep {
    grid-area: cep;
  }

  #street {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #fullAndress {
    grid-area: fullAndress;
  }

  #neighborhood {
    grid-area: neighborhood;
  }

  #city {
    grid-area: city;
  }

  #state {
    grid-area: state;
  }
`
