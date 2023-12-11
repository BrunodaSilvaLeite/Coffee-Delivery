import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
export const Container = styled.div`
  width: 16rem;
  height: 19.3rem;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
export const CoffeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
`

export const Tags = styled.span`
  display: flex;
  gap: 0.25rem;
  > span {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const Tiltle = styled.h2`
  ${mixins.fonts.titleS}
  color: ${({ theme }) => theme.colors['base-subtitle']}
`
export const Description = styled.span`
  padding: 0 1.25rem 0 1.25rem;
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  gap: 1rem;

  > button {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['purple-dark']};

    svg {
      color: ${({ theme }) => theme.colors['base-card']};
    }
  }
  > button:hover {
    opacity: 0.8;
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }
  > span:nth-child(2) {
    color: ${({ theme }) => theme.colors['base-text']};
    ${mixins.fonts.titleM};
  }
`
