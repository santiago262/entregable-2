import React, { useState } from 'react'
import TemperatureCentigrade from '../componet/TemperatureCentigrade'
import TemperatureFahrenheit from '../componet/TenperatureFahrenheit'

function WeatherCard({ weather, estate }) {
  console.log(weather)
  return (
    <section className="weather-info">
      <h3>{weather?.weather[0].description}</h3>
      <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
      <p>Country:<span>{weather?.sys?.country}</span></p>
      <p>City:<span>{weather?.name}</span></p>
      <p>Wind Speed:<span>{weather?.wind.speed}</span></p>
      <p>Atmospheric Pressure:<span>{weather?.main.pressure}</span></p>
      {estate ? (
        <TemperatureCentigrade weather={weather} />
      ) : (
        <TemperatureFahrenheit weather={weather} /> // Correct the component name here
      )}
</section>
  );
}

export default WeatherCard;
