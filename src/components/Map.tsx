import styled from '@emotion/styled'
import L from 'leaflet'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { DetailedFacility, Facility } from '../utils/interfaces'



const Container = styled.div `
    width: 100vw;
    height: 100vh;
`

const StyledMap = styled(MapContainer) `
    width: 100%;
    height: 100vh;
    .leaflet-div-icon {
        background-color: transparent;
        background: transparent;
        border: 0;
    }

`


interface Props {
    markers: Facility[]
    detailedInfo: DetailedFacility[] | null
}

const Icon = styled.div<{color: string}> `
   position: relative;
  margin-left: -115px;
  
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

export function Map ({markers, detailedInfo}: Props) {
  const greenIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color="green"/>)    
  })

  const redIcon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<Icon color="red"/>)    
  })


  return (
    <Container>
      <StyledMap center={[60.402778, 25.029167]} zoom={11} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker => {
          const details = detailedInfo?.find(id => id.id === marker.id)

          return (
            <Marker key={marker.id} position={[marker.location.bbox[1], marker.location.bbox[0]]} icon={!details?.openingHours.openNow ? redIcon : greenIcon}>
              <Popup>
                {marker.name.fi}
                {details?.builtCapacity.CAR}
              </Popup>
            </Marker>
          )}
        
        )}
      </StyledMap>
    </Container>
  )
}
