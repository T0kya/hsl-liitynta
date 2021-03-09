import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Map } from './components/Map'
import styled from '@emotion/styled'
import {Facility } from './utils/interfaces'

const AppContainer = styled.div `
  display: block;
  width: 95%;
  height: 100%;
  margin: 0 auto;
`

const Header = styled.div `
  margin: 20px auto;
  width: 90%;
  color: ${props => props.theme.color.primary};
`

const MapContainer = styled.div `
  width: 100%;
  height: 70vh;
`
interface ApiResults {
  hasMore: boolean;
  results: Facility[]
}


export function App() {

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
    <AppContainer>
      <Header>
        <h2>HSL liityntäpysäköintipaikat</h2>
      </Header>
      {console.log(carParkPoints)}
      {carParkPoints &&
     <MapContainer>
       <Map markers={carParkPoints} /> 
     </MapContainer>
     
      }
      
    </AppContainer>
  )
}

export default App
