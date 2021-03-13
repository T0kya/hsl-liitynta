
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
          font-size: 16px;
          h1,h2,h3, h4 {  
            font-family: 'Raleway', sans-serif;
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.6rem;
          }
          h3 {
            font-size: 1.4rem;
          }
          h4 {
            font-size: 1.2rem;
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