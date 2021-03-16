import produce from 'immer'

import { Action } from '.'
import { FacilityResponse } from '../services/facilityService'
import { Facility } from '../utils/interfaces'

interface State
  extends Readonly<{
    facilities: readonly Facility[]
    isLoading: boolean
    isError: boolean
  }> {}


const initialState: State = {
  facilities: [],
  isLoading: true,
  isError: false
}

export type FacilitiesAction =
  | FetchFacilitiesAction
  | FetchFacilitiesSuccessAction
  | FetchFacilitiesFailureAction

interface FetchFacilitiesAction {
  type: 'FETCH_FACILITIES'
}

interface FetchFacilitiesSuccessAction {
  type: 'FETCH_FACILITIES_SUCCESS'
  payload: {
    response: FacilityResponse
  }
}

interface FetchFacilitiesFailureAction {
  type: 'FETCH_FACILITIES_FAILURE'
}


export function facilitiesReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
  case 'FETCH_FACILITIES':
    return produce(state, (draftState) => {
      draftState.isLoading = true
    })

  case 'FETCH_FACILITIES_SUCCESS':
    return produce(state, (draftState) => {
      draftState.facilities = action.payload.response.results
      draftState.isLoading = false
      draftState.isError = false
    })

  case 'FETCH_FACILITIES_FAILURE':
    return produce(state, (draftState) => {
      draftState.isLoading = false
      draftState.isError = true
    })



  default:
    return state
  }
}
