import React, { useState } from "react";
import axios from "axios";
import { ReactFitty } from "react-fitty";
import Form from "./Form.js";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  let [city, setCity] = useState("");
  let [submittedCity, setSubmittedCity] = useState("");
  let [date, setDate] = useState(new Date());
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [iconUrl, setIconUrl] = useState("");
  let [iconAlt, setIconAlt] = useState("");
  let apiKey = "4288f539432426do920341baabbb0tad";
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  function createDataset(response) {
    setCity(response.data.city);
    setDate(new Date(response.data.time * 1000));
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWindSpeed(response.data.wind.speed);
    setIconUrl(response.data.condition.icon_url);
    setIconAlt(response.data.condition.icon);
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
      <Form onSubmit={getData} onChange={updateCity} />
      <div className="row">
        <ul className="col-xs-12 col-sm-6">
          <h2>
            <ReactFitty>{city.toUpperCase()}</ReactFitty>
          </h2>{" "}
          <div className="current">
            <h3>{Math.round(temperature)}°C</h3>{" "}
            <img src={iconUrl} alt={iconAlt} className="current-img" />
          </div>
          <p className="current-conditions">
            {day}, {hours}:{minutes} <br />
            {description}, humidity: {humidity}%,
            <br />
            windspeed: {windSpeed}km/h
          </p>
        </ul>
        <ul className="col-xs-12 col-sm-6">
          <li>monday</li>
          <li>tuesday</li>
          <li>wednesday</li>
          <li>thursday</li>
          <li>friday</li>
        </ul>
      </div>
    </div>
  );
}
