import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      grey: string
      white: string
      border: string
    },
    spacing: {
        small: number
        medium: number
        large: number
    }
  }
}