import React from "react";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = "4288f539432426do920341baabbb0tad";
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(url).then(handleResponse);
  return (
    <div className="row col-xs-12 col-sm-6">
      <li className="forecast-element">
        monday
        <br />
        <span className="forecast-temp">14 - 16°C</span>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="scattered-clouds-day"
        ></img>
      </li>
      <hr />
      <li className="forecast-element">
        monday
        <br />
        <span className="forecast-temp">14 - 16°C</span>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="scattered-clouds-day"
        ></img>
      </li>
      <hr />
      <li className="forecast-element">
        monday
        <br />
        <span className="forecast-temp">14 - 16°C</span>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="scattered-clouds-day"
        ></img>
      </li>
      <hr />
      <li className="forecast-element">
        monday
        <br />
        <span className="forecast-temp">14 - 16°C</span>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="scattered-clouds-day"
        ></img>
      </li>
      <hr />
      <li className="forecast-element">
        monday
        <br />
        <span className="forecast-temp">14 - 16°C</span>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="scattered-clouds-day"
        ></img>
      </li>
      <hr />
    </div>
  );
}
