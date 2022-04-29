import React, { useEffect, useState } from 'react'
import Covi from '../components/Covi';
import { data } from '../utils/data';

export default function Main() {

  const [dataOfCovi, setDataOfCovi] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [sort, setSort] = useState([])
  const [sortMethod, setSortMethod] = useState('risk')


  useEffect(() => {
    console.log('data :>> ', data);
    setDataOfCovi(data)
    setIsLoading(false)

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

function handleChange(e) {
  console.log(e);
  // console.log(e.target.value)
  const targetFromUser = e.target.value
  setSortMethod(targetFromUser)
  // setSortMethod(e.target.value)
  // const sortedArray = dataOfCovi.map((data) => {
  //   console.log("🚀 ~ file: Main.jsx ~ line 47 ~ sortedArray ~ data.Infection_Risk", data.Infection_Risk)
  //   return data.Infection_Risk
  // })
  // console.log('sortedArray :>> ', sortedArray);
  // const sortMeth = dataOfCovi
  // const sortMeth = dataOfCovi.sort((a, b) => a.TotalDeaths - b.TotalDeaths)
  // const sortMeth = dataOfCovi.sort((a, b) => a : targetFromUser - b.targetFromUser)
  const sortMeth = dataOfCovi.sort(function(a, b) {
    return (

        b[targetFromUser] -  a[targetFromUser]
      )
  });
  console.log('sortMeth :>> ', sortMeth);

}


  return (

    <section>
    {
    isLoading ? (<h3>Hey We are Loading Your Covi Data Set</h3>) : 
    <div>

          <h1>Welcome to the page</h1>
          <label>Sort By </label>
          <select value={sortMethod} onChange={handleChange} name="covi">
            <option value="Infection_Risk">Infection Risk</option>
            <option value="TotalCases">Case Count</option>
            <option value="TotalDeaths">Death Count</option>
            <option value="TotalRecovered">Recovery</option>
          </select>
      { dataOfCovi.map((data, i) => (
        <Covi key={`${data}+${i}`} {...data} />
        )) }
        </div>
    }
      </section>
  )
}
