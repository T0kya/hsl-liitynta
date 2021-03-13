import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { isSaturday, isSunday } from 'date-fns'
import  React, { useCallback, useEffect, useState } from 'react'
import { FeatureGroup,  MapContainer, Rectangle, TileLayer } from 'react-leaflet'
import { isTemplateExpression } from 'typescript'
import { DetailedFacility, Facility, FilterTypes, Utilization, OpeningHours } from '../utils/interfaces'
import { Checkbox } from './Filters/Checkbox'
import { MapMarker } from './MapMarker'



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


const Filters = styled.div `
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255,255,255,0.7);
  padding: ${props => props.theme.spacing.large}px;
  z-index: 999;
`
const FilterGroup = styled.div `
  display:flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-top: ${props => props.theme.spacing.medium}px;
  }
`

interface Props {
  markers: Facility[]
}

type CheckedState = {
  [key in FilterTypes]: boolean
}
export function Map ({markers}: Props) {
  const [detailedPoints, setDetailedPoints] = useState<DetailedFacility[] | null>(null)
  const [isOpenFilter, setIsOpenFilter] = useState(false)

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

  const handleChangeOpen = () => {
    setIsOpenFilter(!isOpenFilter)
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
  
  const purpleOptions = { color: 'purple' }

  return (
    <Container>   
      <Filters>
        <h3>Maksuton:</h3>
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
        <FilterGroup>
          <label>
            <Checkbox
              name="open"
              checked={isOpenFilter}
              onChange={handleChangeOpen}><span>Auki nyt</span></Checkbox>
          </label>
        </FilterGroup>
      </Filters> 
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
                {isOpenFilter ? 
                  details && details.openingHours.openNow && 
                  <MapMarker details={details} marker={marker} />
                  :  details && <MapMarker details={details} marker={marker} />
                }
                <Rectangle key={marker.id} bounds={[
                  [marker.location.bbox[1], marker.location.bbox[0]],
                  [marker.location.bbox[3], marker.location.bbox[2]],
                ]} />
            
              </div>
            )}
         
          )}
        </FeatureGroup>
      </StyledMap>
      
    </Container>
  )
}
