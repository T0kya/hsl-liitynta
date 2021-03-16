import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector as originalUseSelector } from 'react-redux'

import { facilitiesReducer, FacilitiesAction } from './facilities'

type FacilitiesState = ReturnType<typeof facilitiesReducer>

export type State = {
  facilities: FacilitiesState
}

export type Action = FacilitiesAction 

export const rootReducer = combineReducers({
  facilities: facilitiesReducer,
})

export const useSelector: TypedUseSelectorHook<State> = originalUseSelector
