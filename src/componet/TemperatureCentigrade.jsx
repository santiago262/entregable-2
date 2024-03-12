import React from 'react'

export default function TemperatureCentigrade({weather}) {
  return (
    <h2 ><p>{Math.trunc((weather?.main.temp-32)/1.8)}C°</p></h2>
  )
}
