
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Root } from './Root'
import { Provider as TranslateProvider } from 'react-translated'
import { Provider } from 'react-redux'
import translation from './translations/translation'
import {store} from './setup/redux'

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <TranslateProvider language="fi" translation={translation}>
        <Root />
      </TranslateProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
