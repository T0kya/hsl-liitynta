
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Root } from './Root'
import { Provider } from 'react-translated'
import translation from './translations/translation'

ReactDOM.render(
  <React.StrictMode>
    <Provider language="fi" translation={translation}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
