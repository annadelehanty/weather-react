import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [iconUrl, setIconUrl] = useState("");
  let [iconAlt, setIconAlt] = useState("");
  let apiKey = "4288f539432426do920341baabbb0tad";
  function createDataset(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWindSpeed(response.data.wind.speed);
    setIconUrl(response.data.condition.icon_url);
    setIconAlt(response.data.condition.icon);
  }
  function getData(event) {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(createDataset);
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (temperature) {
    return (
      <div>
        <form onSubmit={getData}>
          <input
            type="search"
            placeholder="enter a city..."
            onChange={updateCity}
          />
          <input type="submit" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {windSpeed}km/h</li>
          <li>
            <img src={iconUrl} alt={iconAlt} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={getData}>
        <input
          type="search"
          placeholder="enter a city..."
          onChange={updateCity}
        />
        <input type="submit" />
      </form>
    );
  }
}
