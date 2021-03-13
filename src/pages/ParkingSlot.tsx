import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DetailedFacility } from '../utils/interfaces'


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

  console.log(info)
  return (<div>
    <Link to="/">Takaisin</Link>
    <h2>{info && info.name.fi}</h2>
  </div>)
}