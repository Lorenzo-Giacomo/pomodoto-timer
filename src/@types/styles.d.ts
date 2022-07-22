import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// toda vez q for importado o styled-components puxará a tipagem qu está dentro. Pegar oq já tem e sobrescrever.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
