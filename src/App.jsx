import { useEffect, useState } from 'react';
import axios from "axios";
import WeatherCard from './component/WeatherCard';
import "./App.css"

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const success = info => {
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const API_KEY = "3a2b305b59303385ac653fada1d80400";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;
      axios.get(url).then(res => setWeather(res.data)).catch(error => console.error(error));
    }
  }, [coords]);

  const toggleTemperatureUnit = (event) => {
    event.preventDefault(); // Esto evita que el formulario reinicie la página
    setIsFahrenheit(!isFahrenheit);
  };

  return (
    <><div class='container'>
      
      <div class="card">
      
        <h2>weather api</h2>
      
      <WeatherCard weather={weather} estate={isFahrenheit}></WeatherCard>
      <form onSubmit={toggleTemperatureUnit}>
        <button type="submit">
          {isFahrenheit ? <p>fahrenheit</p> : <p>celsius</p>}
        </button>
      </form>
      </div>
      </div>
    </>
  );
}

export default App;