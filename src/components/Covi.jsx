import React from 'react'

export default function Covi({ Country, Infection_Risk, TotalCases, TotalDeaths, TotalRecovered }) {
  return (
    <div>
      <h2>Country: {Country}</h2>
      <p>Infection Risk: {Infection_Risk}%</p>
      <p>Total Amount Of Cases: {TotalCases}</p>
      <p>Total Amount Of Deaths: {TotalDeaths}</p>
      <p>Total Amount Of People Recovered: {TotalRecovered}</p>
    </div>
  )
}
