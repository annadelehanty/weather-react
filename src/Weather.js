import React, { useState } from "react";
import axios from "axios";
import { ReactFitty } from "react-fitty";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const apiKey = "4288f539432426do920341baabbb0tad";
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      iconUrl: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="container-fluid weather-app">
        <h1 className="d-none">interactive weather application</h1>
        <form>
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="Search" />
        </form>
        <div className="row">
          <ul className="col-xs-12 col-sm-6">
            <h2>
              <ReactFitty>{weatherData.city.toUpperCase()}</ReactFitty>
            </h2>{" "}
            <div className="current">
              <h3>{Math.round(weatherData.temperature)}°C</h3>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.iconAlt}
                className="current-img"
              />
            </div>
            <p className="current-conditions">
              {/*{day}, {hours}:{minutes} <br />*/}
              {weatherData.description}, humidity: {weatherData.humidity}%
              <br />
              windspeed: {weatherData.windSpeed}km/h
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
  } else {
    let city = "london";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    //let [date, setDate] = useState(new Date());
    //let days = [
    //  "sunday",
    //"monday",
    //"tuesday",
    //      "wednesday",
    //    "thursday",
    //    "friday",
    //      "saturday",
    //];
    //let day = days[date.getDay()];
    //let hours = date.getHours();
    //let minutes = date.getMinutes();
    //if (minutes < 10) {
    //minutes = `0${minutes}`;
    //}
    //if (hours < 10) {
    //  hours = `0${hours}`;
    //}
    //function createDataset(response) {
    //  setDate(new Date(response.data.time * 1000));
    //}
    return <h2 className="loading">loading...</h2>;
  }
}
