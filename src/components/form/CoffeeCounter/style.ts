import styled from 'styled-components'

export const ContentCoffeeCounter = styled.div`
  display: flex;
  align-items: center;
  height: 38px;

  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.purple};
    padding: 8px;
  }

  button:nth-of-type(1):hover {
    border-radius: 8px 0px 0px 8px;
    transition: background-color 0.2s;
    background: ${({ theme }) => theme.colors['base-hover']};
  }
  button:nth-of-type(2):hover {
    border-radius: 0px 8px 8px 0px;
    transition: background-color 0.2s;
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
