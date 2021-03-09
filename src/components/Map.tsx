import styled from '@emotion/styled'
import axios from 'axios'
import L from 'leaflet'
import  React, { useCallback, useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { FeatureGroup, LayerGroup,Circle, MapContainer, Marker, Popup, Rectangle, TileLayer } from 'react-leaflet'
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
  display: block;
  margin: 15px 0;
`
const FilterGroup = styled.div `
  display:flex;
  width: 100%;
  align-items: center;
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
    '12H': false,
    '247': false,
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
    console.log(activeFilters)
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

  const center = [51.505, -0.09]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  
  const fillBlueOptions = { fillColor: 'blue' }
  const fillRedOptions = { fillColor: 'red' }
  const greenOptions = { color: 'green', fillColor: 'green' }
  const purpleOptions = { color: 'purple' }

  return (
    <Container>    
      <StyledMap center={[60.402778, 25.029167]} zoom={11} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
         
        <FeatureGroup pathOptions={purpleOptions}>
          {currentList && currentList.map(marker => {
            const details = detailedPoints?.find(id => id.id === marker.id)
         
            return (
              <div key={marker.id}>
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
                <Rectangle key={marker.id} bounds={[
                  [marker.location.bbox[1], marker.location.bbox[0]],
                  [marker.location.bbox[3], marker.location.bbox[2]],
                ]} />
            
              </div>
            )}
         
          )}
        </FeatureGroup>
      </StyledMap>
      <Filters>
        
        <h3>Maksuton pysäköinti:</h3>
        <FilterGroup>
          <label>
            <Checkbox
              name="12H"
              checked={checked['12H']}
              onChange={toggleChecked}
            >12h</Checkbox>
           
          </label>
          <label>
            <Checkbox
              name="247"
              checked={checked['247']}
              onChange={toggleChecked}
            >24h</Checkbox>
           
          </label>
        </FilterGroup>
      </Filters>
    </Container>
  )
}
