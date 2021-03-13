import styled from '@emotion/styled'
import axios from 'axios'
import  React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { Facility } from '../utils/interfaces'

const Container = styled.div `
display: block;
width: 95%;
height: 100%;
margin: 0 auto;
`

const MapContainer = styled.div `
  width: 100%;
  height: 70vh;
`

interface ApiResults {
    hasMore: boolean;
    results: Facility[]
}
export function Frontpage(){
  const [carParkPoints, setCarParkPoints] = useState<Facility[] | null>(null)
 

  useEffect(() => {
    axios.get<ApiResults>('https://p.hsl.fi/api/v1/facilities.json').then((response) => {
      // handle success
      setCarParkPoints(response.data.results.filter(item => item.type === 'CAR'))
       
    }).catch(function (error) {
      // handle error
      console.log(error)
    })
      .then(function () {
        // always executed
      })
      
      
  },  [])
  return (
    <>
      <Header>
        <h2>Liityntäpysäköintiparkkipaikat</h2>
      </Header>
      {carParkPoints &&
          <MapContainer>
            <Map markers={carParkPoints} /> 
          </MapContainer>
      }
    </>
  )
}