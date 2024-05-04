import React from "react";
import { ReactFitty } from "react-fitty";
import PrettyDate from "./PrettyDate.js";
import Temperature from "./Temperature.js";

export default function WeatherStats(props) {
  return (
    <ul className="col-xs-12 col-sm-6">
      <h2>
        <ReactFitty>{props.data.city.toUpperCase()}</ReactFitty>
      </h2>{" "}
      <div className="current">
        <Temperature celsius={props.data.temperature} />
        <img
          src={props.data.iconUrl}
          alt={props.data.iconAlt}
          className="current-img"
        />
      </div>
      <p className="current-conditions">
        <PrettyDate date={props.data.date} />
        {props.data.description}, humidity: {props.humidity}%
        <br />
        windspeed: {props.data.windSpeed}km/h
      </p>
    </ul>
  );
}
