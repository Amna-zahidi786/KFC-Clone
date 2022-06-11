import React, { useEffect, useState } from 'react'
import './Api.css'


const Api = () => {

    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=>setCountries(data))
        .catch((err)=>console.log(err))
    }, [])




  return (
    <div className='api-wrapper'>
        {
            countries.map((country)=>{
                return <div>
                    <h4>Name: {country.name.common}</h4>
                    <p>Area: {country.area}</p>
                    <h6>Official name: {country.name.official}</h6>
                    <img src={country.flags.png} alt=" "/>
            
                </div> 
            })
        }
    </div>
  )
}

export default Api




