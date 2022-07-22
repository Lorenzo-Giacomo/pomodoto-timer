import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
// import { Button } from './components/Button'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* we send as proprerties the colors we want */}
      {/*
       não serão mais utilizados
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
