import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/desfult'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}
