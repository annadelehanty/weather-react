import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [submittedCity, setSubmittedCity] = useState("");
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
    setCity(response.data.city);
  }
  function getData(event) {
    let url = `https://api.shecodes.io/weather/v1/current?query=${submittedCity}&key=${apiKey}`;
    axios.get(url).then(createDataset);
    event.preventDefault();
  }
  function updateCity(event) {
    setSubmittedCity(event.target.value);
  }
  return (
    <div className="container-fluid weather-app">
      <h1 className="d-none">interactive weather application</h1>
      <form onSubmit={getData}>
        <input
          type="search"
          placeholder="enter a city..."
          onChange={updateCity}
        />
        <input type="submit" />
      </form>

      <div className="row">
        <ul className="col-6">
          <h2>{city.toUpperCase()}</h2>{" "}
          <div className="current">
            <h3>{Math.round(temperature)}°C</h3>{" "}
            <img src={iconUrl} alt={iconAlt} className="current-img" />
          </div>
          <p className="current-conditions">{description}, humidity: {humidity}%, windspeed: {windSpeed}km/h</p>
        </ul>
        <ul className="col-6">
          <li>monday</li>
          <li>tuesday</li>
          <li>wednesday</li>
          <li>thursday</li>
          <li>friday</li>
        </ul>
      </div>
      <footer>
        <p>
          my{" "}
          <a
            href="https://github.com/annadelehanty/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </p>
      </footer>
    </div>
  );
}
