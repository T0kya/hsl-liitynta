import axios from 'axios'

import { Try, success, failure } from '../utils/types'
import { Facility } from '../utils/interfaces'

export interface FacilityResponse {
    hasMore: boolean;
    results: Facility[]
  }

export async function getFacilities(): Promise<Try<FacilityResponse>> {
  try {
    const response = await axios.get<FacilityResponse>('https://p.hsl.fi/api/v1/facilities.json')
  
    return success(response.data)
  } catch (e) {
    return failure(e)
  }
}

