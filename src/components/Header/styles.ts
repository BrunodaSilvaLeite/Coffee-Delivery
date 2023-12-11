import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
export const Container = styled.header`
  max-width: 1160px;
  margin: auto;
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  align-items: center;
`
export const Aside = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    padding: 0.56rem 0.5rem;
    justify-content: center;
    border-radius: 6px;
    align-items: center;
    gap: 0.25rem;
    background-color: ${({ theme }) => theme.colors['purple-light']};
    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
    font-size: 0.9rem;
  }
  a {
    display: flex;
    position: relative;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['yellow-light']};

    svg {
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    span {
      display: flex;
      width: 20px;
      height: 20px;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      bottom: 1.7rem;
      left: 1.6rem;
      border-radius: 50%;
      ${mixins.fonts.textXS}
      color: white;
    }
  }
  a:hover {
    opacity: 0.8;
  }
`
