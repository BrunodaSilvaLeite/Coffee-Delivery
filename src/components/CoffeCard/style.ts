import styled from 'styled-components'

export const Container = styled.div`
  width: 16rem;
  height: 19.3rem;
  flex-shrink: 0;
  border-radius: 0.75rem 0%.25rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;
`
export const CoffeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`
