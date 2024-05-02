import React from "react";
import lightLogo from "./images/github-light.jpg";
import darkLogo from "./images/github-dark.jpg";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/annadelehanty/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        <img src={lightLogo} alt="github logo" className="git-image" />
      </a>
    </footer>
  );
}
