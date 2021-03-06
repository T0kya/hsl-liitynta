import styled from '@emotion/styled'
import axios from 'axios'
import L from 'leaflet'
import  React, { useCallback, useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { DetailedFacility, Facility, FilterTypes, Utilization } from '../utils/interfaces'
import { Checkbox } from './Filters/Checkbox'



const Container = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
`

const StyledMap = styled(MapContainer) `
    width: 100%;
    height: 100%;
    .leaflet-div-icon {
        background-color: transparent;
        background: transparent;
        border: 0;
    }

`

const Icon = styled.div<{color: string}> `
  position: relative;
  
  border-radius: 50% 50% 50% 0;
  border: 4px solid ${props => props.color};
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  background-color: white;

  &::after {
    position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
  background-color: ${props => props.color};
  }
`

const Filters = styled.div `
  display:flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
const FilterGroup = styled.div `
  display: flex;
  flex-direction: column;
`

interface Props {
  markers: Facility[]
}

type CheckedState = {
  [key in FilterTypes]: boolean
}
export function Map ({markers}: Props) {

  const [detailedPoints, setDetailedPoints] = useState<DetailedFacility[] | null>(null)
  const [utilization, setUtilization] = useState<Utilization[]>([])

  const [checked, setChecked] = useState<CheckedState>({
    FREE: false,
    FREETWELWEHOURS: false,
    CUSTOM: false,
  })
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [currentList, setCurrentList] = useState<Facility[] | null>(markers)

  const handleUpdate = (filters: { [key in FilterTypes]: boolean }) => {
    const activeFilterNames = Object.keys(filters).filter(
      filterName => filters[filterName as FilterTypes]
    )

    setActiveFilters(activeFilterNames)
    setChecked(filters)
  }

  const toggleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      ...checked,
      [e.target.name]: !checked[e.target.name as FilterTypes]
    }


    handleUpdate(newValue)
  }

  const filterList = useCallback(() => {
    if (!markers) {
      return null
    }
    if (activeFilters.length === 0) {
      return markers
    }
    return markers.filter(item => activeFilters.some(activeFilterName => item.pricingMethod.includes(activeFilterName)))
    
   
  }, [activeFilters, detailedPoints])

  useEffect(() => {
    const promises = markers.map(point => { return axios.get<DetailedFacility>(`https://p.hsl.fi/api/v1/facilities/${point.id}.json`).then(res => res.data)})
    
    promises && 
      Promise.all(promises).then(data => {
        setDetailedPoints(data)
      })
    
  },  [])

  useEffect(() => {
    const filtered = filterList()
    setCurrentList(filtered)
  }, [activeFilters])

  const greenIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color="green"/>)    
  })

  const redIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color="red"/>)    
  })
  
  function getUtilization(id:number){
    axios.get<Utilization[]>(`https://p.hsl.fi/api/v1/facilities/${id}/utilization.json`).then((response) => {
   
      setUtilization(response.data)
    }).catch((error) => {
      console.log(error)
    }).then(() => {

      //execute
    })
  }



  return (
    <Container>    
      <StyledMap center={[60.402778, 25.029167]} zoom={11} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentList && currentList.map(marker => {
          const details = detailedPoints?.find(id => id.id === marker.id)

          return (
            <Marker 
              key={marker.id} 
              position={[marker.location.bbox[1], marker.location.bbox[0]]} 
              icon={details?.openingHours.openNow ? greenIcon : redIcon}
              eventHandlers={{
                click: () => {
                  setUtilization([])
                  getUtilization(marker.id)
                },
              }}>
              <Popup>
                {marker.name.fi}<br />
                Paikkoja yhteensä: {details?.builtCapacity.CAR}<br />
                {utilization.length !== 0 && <span>Paikkoja vapaana: {utilization[0].spacesAvailable}</span> }
              </Popup>
            </Marker>
          )}
        
        )}
      </StyledMap>
      <Filters>
        <FilterGroup>
          <h3>Maksuton pysäköinti:</h3>
          <label>
            <Checkbox
              name="FREE"
              checked={checked.FREE}
              onChange={toggleChecked}
            >Ilmainen</Checkbox>
           
          </label>
        </FilterGroup>
      </Filters>
    </Container>
  )
}
