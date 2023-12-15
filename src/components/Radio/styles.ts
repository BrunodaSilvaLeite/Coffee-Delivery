import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.325rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
