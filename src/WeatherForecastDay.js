import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[day];
  }
  return (
    <li className="forecast-element">
      {day()}
      <br />
      <span className="forecast-temp">
        {Math.round(props.data.temperature.minimum)} -{" "}
        {Math.round(props.data.temperature.maximum)}°C
      </span>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      ></img>
    </li>
  );
}
