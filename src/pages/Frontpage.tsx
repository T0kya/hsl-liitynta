import styled from '@emotion/styled'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { useDispatch } from 'react-redux'
import { getFacilities } from '../services/facilityService'
import { useSelector } from '../ducks'
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion'
import { NotFound } from './NotFound'

const pageVariants = {
  initial: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
  in: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
  out: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
}

const MapContainer = styled.div `
  width: 100%;
  height: 90vh;
`

export function Frontpage(){
  const dispatch = useDispatch()
  const { facilities, isLoading, isError } = useSelector((state) => state.facilities)
  

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'FETCH_FACILITIES' })

      const response = await getFacilities()

      if (response.success) {
        dispatch({
          type: 'FETCH_FACILITIES_SUCCESS',
          payload: { response: response.value }
        })
        
        
      } else {
        dispatch({ type: 'FETCH_FACILITIES_FAILURE' })
      }
    }
    if(facilities.length === 0) {
      fetchData()
    }
    
    
  }, [dispatch])

  
  return (
    <>
      <Header>
        <h2>Liityntäpysäköintiparkkipaikat</h2>
      </Header>
      <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
        {isLoading && <Skeleton width="100%" height={700} />}
        {isError && <NotFound />}
        {!isLoading && !isError && (
          <MapContainer>
            <Map markers={facilities} />
          </MapContainer>
        )}
      </motion.div>
    </>
  )
}

