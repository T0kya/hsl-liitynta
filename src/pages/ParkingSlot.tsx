import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Translate } from 'react-translated'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { Arrow } from '../components/Arrow'
import { Card } from '../components/Card/Card'
import { Header } from '../components/Header'
import { StyledLink } from '../components/StyledLink'
import { DetailedFacility } from '../utils/interfaces'


const Name = styled.h3 `
  margin: 0 auto;
  padding: 0 10px;
`

const Content = styled.div `
  width: 90%;
  margin: 1rem auto;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spacing.large}px;

  @media(max-width: 485px) {
    grid-template-columns: 1fr;
  }
`

export function ParkingSlot() {
  const [info, setInfo] = useState<DetailedFacility | null>()
  let { id } = useParams()
  useEffect(() => {
    axios.get<DetailedFacility>(`https://p.hsl.fi/api/v1/facilities/${id}.json`).then((response) => {
    // handle success
      setInfo(response.data)
     
    }).catch(function (error) {
      // handle error
      console.log(error)
    })
      .then(function () {
        // always executed
      })
    
    
  },  [])

  const theme = useTheme()


  return (
    <div>
      <Header>
        <StyledLink color={theme.color.white} to="/"><Arrow color={theme.color.white}/>Takaisin</StyledLink>
        <Name>{info ? info.name.fi : <Skeleton />}</Name>
      </Header>
      <Content>
        <Card title="Aukioloajat">
          {info ? 
            <>
              {info.openingHours.byDayType.BUSINESS_DAY && <p><strong>Arkipäivät:</strong> {info.openingHours.byDayType.BUSINESS_DAY.from} - {info.openingHours.byDayType.BUSINESS_DAY.until}</p>}
              {info.openingHours.byDayType.SATURDAY && <p><strong>Lauantai:</strong> {info.openingHours.byDayType.SATURDAY.from} - {info.openingHours.byDayType.SATURDAY.until}</p>}
              {info.openingHours.byDayType.SUNDAY && <p><strong>Sunnuntai:</strong> {info.openingHours.byDayType.SUNDAY.from} - {info.openingHours.byDayType.SUNDAY.until}</p>}
            </>
            : <Skeleton />
          }
        </Card>
        {info?.services.length !== 0 &&
        <>
          {info ? 
            <Card title="Palvelut">
              <ul>
                {info.services.map(service => {
                  return <li key={service}><Translate text={service} /></li>
                })}
              </ul>
            </Card> : <Skeleton />
          }
        </> }
        {info?.pricingMethod === 'CUSTOM' &&
          <Card title="Pysäköintihinnasto">
            {info.pricing.map(price => {
              return <p key={price.capacityType}> <Translate text={price.capacityType} />: {price.price.fi}</p>
            }
            )}
            <p><strong> Maksutavat: </strong></p><ul>{info.paymentInfo.paymentMethods.map(payment => <li key={payment}><Translate text={payment} /></li>)}</ul>
          </Card>
        }
      </Content>
    </div>
  )
}