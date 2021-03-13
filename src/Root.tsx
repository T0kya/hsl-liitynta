
import { css, Global,ThemeProvider } from '@emotion/react'
import emotionReset from 'emotion-reset'


import { App } from './App'
import { theme } from './theme/theme'


export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
         ${emotionReset}

        body {
          font-family: 'Nunito', sans-serif;
          h1,h2,h3 {  
            font-family: 'Raleway', sans-serif;
          }
          p {
            font-family: 'Nunito', sans-serif;
          }
        }
      `}
      />

      <App />
  
    </ThemeProvider>

  )
}