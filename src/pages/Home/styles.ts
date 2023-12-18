import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
  }

  img#coffe-img {
    width: 29.75rem;
    height: 22.5rem;
  }
  @media (max-width: 1109px) {
    img#coffe-img {
      width: 24.75rem;
      height: 19.5rem;
    }
  }
  @media (max-width: 860px) {
    img#coffe-img {
      display: none;
    }
  }
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.1rem;
  }

  @media (max-width: 860px) {
    > div {
      align-items: center;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
  @media (max-width: 860px) {
    align-items: center;
    text-align: center;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }
`
export const ContainerCoffe = styled.div`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
  @media (max-width: 1153px) {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 40px;
      grid-column-gap: 32px;
      margin: auto;
    }
  }
  @media (max-width: 860px) {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 40px;
      grid-column-gap: 32px;
      margin: auto;
    }
  }
  @media (max-width: 570px) {
    > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      grid-column-gap: 32px;
      margin: auto;
    }
  }
`
