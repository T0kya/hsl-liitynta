import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      green: string
      red: string
    },
    spacing: {
        small: number
        medium: number
    },
    backgroundColor: string
  }
}