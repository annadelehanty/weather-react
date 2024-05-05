import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="row col-xs-12 col-sm-6">
        <WeatherForecastDay data={forecast.daily[1]} />
        <hr />
        <WeatherForecastDay data={forecast.daily[2]} />
        <hr />
        <WeatherForecastDay data={forecast.daily[3]} />
        <hr />
        <WeatherForecastDay data={forecast.daily[4]} />
        <hr />
        <WeatherForecastDay data={forecast.daily[5]} />
        <hr />
      </div>
    );
  } else {
    const apiKey = "4288f539432426do920341baabbb0tad";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    return <div className="row col-xs-12 col-sm-6">loading forecast...</div>;
  }
}
