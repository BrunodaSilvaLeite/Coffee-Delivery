import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;
  align-items: flex-end;
  justify-content: space-between;

  > div {
    width: 526px;
  }
  img {
    margin-bottom: -13px;
  }
`
export const HeaderInfo = styled.div`
  > h1 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['yellow-dark']}
  }
  > span {
    ${mixins.fonts.textLRoboto}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
export const Info = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  padding: 1.5rem;
  align-items: flex-start;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  gap: 1.5rem;
  div {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    padding: 0.5rem;
    border-radius: 100%;
  }
`
