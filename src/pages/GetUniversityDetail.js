import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DbData from '../components/DB';

function GetUniversityDetail() {
    const {russia,germany,kazakhstan,georgia,moldova,poland,serbia,nepal,italy,kyrgyzstan,uzbekistan,bangladesh,armenia} = DbData.countries
    const newData = russia.concat(germany,kazakhstan,georgia,moldova,poland,serbia,nepal,italy,kyrgyzstan,uzbekistan,bangladesh,armenia)
    
const params = useParams()
const [temp, settemp] = useState(0)
useEffect(()=>{
    const ff = newData.find((elem)=>{
        return elem.id === params.id
    })
    
    if (ff !== undefined){
settemp(ff)
    }
},[temp])



  return (
    <div style={{margin:"100px 0px"}}>
      <p>get data here {temp?.name}</p>
    </div>
  )
}

export default GetUniversityDetail
