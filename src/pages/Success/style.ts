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
  @media (max-width: 860px) {
    align-items: center;
    flex-direction: column;

    text-align: center;
    > div {
      width: 100%;
    }
    img {
      margin-top: 50px;
      width: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 300px;
    }
  }
`
export const HeaderInfo = styled.div`
  > h1 {
    ${mixins.fonts.titleL}
  }
  > span {
    ${mixins.fonts.textLRoboto}
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
  @media (max-width: 860px) {
    div {
      margin: auto;
    }
  }
`
export const ContainerNoCoffee = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;
  align-items: flex-end;

  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};

  > div {
    margin: 0 auto;
    width: 580px;
    text-align: center;
  }
  img {
    width: 492px;
    height: 293px;
    margin-top: 3rem;
  }
`
