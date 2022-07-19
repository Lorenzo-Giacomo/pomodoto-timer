import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Button } from "./components/Button"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* we send as proprerties the colors we want */}
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
    </ThemeProvider>

  )
}

