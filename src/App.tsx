import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/desfult'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
