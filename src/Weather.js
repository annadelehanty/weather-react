import React, { useState } from "react";
import axios from "axios";
import WeatherStats from "./WeatherStats.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "4288f539432426do920341baabbb0tad";
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      iconUrl: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
      ready: true,
    });
  }
  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    return null;
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container-fluid weather-app">
        <h1 className="d-none">interactive weather application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="row">
          <WeatherStats data={weatherData} />
          <Forecast data={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return <h2 className="loading">loading...</h2>;
  }
}
