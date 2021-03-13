import styled from '@emotion/styled'
import axios from 'axios'
import { motion } from 'framer-motion'
import   { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { Facility } from '../utils/interfaces'
import Image from './roadImage.jpg'

const MapContainer = styled.div `
  width: 100%;
  height: 90vh;
`
const TwoColumns = styled(motion.div) `
    width: 80%;
    margin: ${props => props.theme.spacing.large}px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.spacing.large}px;
    overflow: hidden;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
        }
    }

   
`

//animations

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { y: '100%' },
  show: { y: 0 }
}
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
      {/* <TwoColumns
        variants={container}
        initial="hidden"
        animate="show">
        <motion.div
          variants={item}>
          <img src={Image} alt="illustration of road"/>
        </motion.div>
        
        <motion.div
          variants={item}>
          <h3>Alla olevasta kartasta voit katsoa mihin pysäköit helpoiten autosi, kun vaihdat julkisen liikenteen kulkuvälineeseen</h3>
        </motion.div>
     </TwoColumns>*/}
      {carParkPoints &&
          <MapContainer>
            <Map markers={carParkPoints} /> 
          </MapContainer>
      }
    </>
  )
}