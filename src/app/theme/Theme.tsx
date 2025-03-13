import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/700.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { components } from './components'


export const Theme = ({ children }: React.PropsWithChildren) => {
  const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    components,
    typography: {
      fontFamily: 'Fira Code',
    },
    shape: { borderRadius: 8 },
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )}
