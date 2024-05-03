import React from "react";

import { ReactFitty } from "react-fitty";

export default function WeatherInfo(props) {
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