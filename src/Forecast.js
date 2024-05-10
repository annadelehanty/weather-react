import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect (() => {
    const apiKey = "4288f539432426do920341baabbb0tad";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(url).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.city]);

  if (loaded) {
    return (
      <div className="row col-xs-12 col-sm-6">
        {forecast && <WeatherForecastDay data={forecast[1]} />}
        <hr />
      </div>
    );
  } else {
    return null;
  }
}