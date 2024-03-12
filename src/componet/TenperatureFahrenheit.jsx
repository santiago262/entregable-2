import React from 'react'

export default function TenperatureFahrenheit ({weather}) {
  return (
    <h2><p>{weather?.main.temp}F°</p></h2>
  )
}
