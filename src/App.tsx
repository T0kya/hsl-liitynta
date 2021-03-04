import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Map } from './components/Map'
import styled from '@emotion/styled'
import { DetailedFacility, Facility } from './utils/interfaces'

const AppContainer = styled.div `
  display: block;
  width: 100%;
  height: 100%;
`

interface ApiResults {
  hasMore: boolean;
  results: Facility[]
}

function App() {

  const [carParkPoints, setCarParkPoints] = useState<Facility[] | null>(null)
  const [detailedPoints, setDetailedPoints] = useState<any[] | []>([])
 

  useEffect(() => {
    axios.get<ApiResults>('https://p.hsl.fi/api/v1/facilities.json').then((response) => {
    // handle success
      setCarParkPoints(response.data.results.filter(item => item.type === 'CAR'))
      const promises = carParkPoints ? carParkPoints.map(point => { return axios.get<any>(`https://p.hsl.fi/api/v1/facilities/${point.id}.json`).then(res => res.data)}) : null
    
      promises && 
      Promise.all(promises).then(data => {
        setDetailedPoints(data)
        console.log(data)
      })
    }).catch(function (error) {
      // handle error
      console.log(error)
    })
      .then(function () {
        // always executed
      })
    
    
  }, [setDetailedPoints, carParkPoints])


  return (
    <AppContainer>
      {carParkPoints &&
      <Map markers={carParkPoints} detailedInfo={detailedPoints}/> }
    </AppContainer>
  )
}

export default App
