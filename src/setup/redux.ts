import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from '../ducks'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))


