import { DetailedFacility, Facility, OpeningHours, Utilization } from '../utils/interfaces'
import  {Marker, Popup  } from 'react-leaflet'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import L from 'leaflet'
import ReactDOMServer from 'react-dom/server'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import axios from 'axios'
import { isSaturday, isSunday } from 'date-fns'

interface Props {
    marker: Facility
    details: DetailedFacility
}


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

export function MapMarker({marker, details } : Props) {
  const theme = useTheme()

  const [utilization, setUtilization] = useState<Utilization[]>([])
  const [currentOpeningHours, setOpeningHours] = useState<OpeningHours>()

  function getUtilization(id:number){
    axios.get<Utilization[]>(`https://p.hsl.fi/api/v1/facilities/${id}/utilization.json`).then((response) => {
       
      setUtilization(response.data)
    }).catch((error) => {
      console.log(error)
    }).then(() => {
    
      //execute
    })
  }

  function getOpeningHours(details: {SUNDAY: OpeningHours, SATURDAY: OpeningHours, BUSINESS_DAY: OpeningHours}) {
    if(isSaturday(new Date())) {
      setOpeningHours(details.SATURDAY)
    } else if (isSunday(new Date())) {
      setOpeningHours(details.SUNDAY) 
    } 
    setOpeningHours(details.BUSINESS_DAY)
  }
    
  const greenIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color={theme.color.primary}/>)    
  })
    
  const redIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color={theme.color.grey}/>)    
  })
  const openingHours = currentOpeningHours
  return  <Marker 
    position={[marker.location.bbox[1], marker.location.bbox[0]]} 
    icon={details?.openingHours.openNow ? greenIcon : redIcon}
    eventHandlers={{
      click: () => {
        setUtilization([])
        getUtilization(marker.id)
        setOpeningHours(undefined)
        details && getOpeningHours(details.openingHours.byDayType)
      },
    }}>
    <Popup
      closeOnClick={false}>
      <h4>{marker.name.fi}</h4>
      {openingHours && <span>Avoinna tänään: {openingHours?.from} - {openingHours?.until}</span>}<br />
      Paikkoja yhteensä: {details?.builtCapacity.CAR}
      {utilization.length !== 0 && <><br /><span>Paikkoja vapaana: {utilization[0].spacesAvailable}</span> </>}
      <Link to={`/asema/${marker.id}`}>Katso lisätiedot</Link>
    </Popup>
  </Marker> 
}