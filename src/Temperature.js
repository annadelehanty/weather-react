import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheitConversion(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsiusConversion(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <h3>
        {Math.round(props.celsius)}
        <span className="units">
          °C |{" "}
          <a href="/" onClick={fahrenheitConversion}>
            <span className="inactive">°F</span>
          </a>
        </span>
      </h3>
    );
  } else {
    return (
      <h3>
        {Math.round((props.celsius * 9) / 5 + 32)}
        <span className="units">
          °F |{" "}
          <a href="/" onClick={celsiusConversion}>
            <span className="inactive">°C</span>
          </a>
        </span>
      </h3>
    );
  }
}
