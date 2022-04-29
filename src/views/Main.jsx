import React, { useEffect, useState } from 'react'
import { data } from '../utils/data';

export default function Main() {

  const [dataOfCovi, setDataOfCovi] = useState([])

  
  useEffect(() => {
    console.log('data :>> ', data);
    setDataOfCovi(data)

}, [])


// returns an array of object
// useEffect( async () => {
//   async function getCoviData() {
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
//         'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
//       }
//     };
    
//     const fetchData = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica', options)
//     const json = await fetchData.json()
//     console.log(json);
//   }

//   getCoviData()

// }, [])


  return (
    <section>

    <h1>Welcome to the page</h1>

    </section>
  )
}
