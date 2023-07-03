import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [defaultCity, setDefaultCity] = useState("Boryspil");

  useEffect(() => {
    // Fetch default city weather data
    fetchWeatherData(defaultCity);
  }, [defaultCity]);

  function fetchWeatherData(city) {
    axios
      .get(`http://localhost:5000/weather?location=${city}`)
      .then((response) => {
        const weatherData = response.data;
        // Update the default city weather data
        setDefaultCity(weatherData.city);
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });
  }

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity={defaultCity} onCityChange={setDefaultCity} />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Rudenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/RudenkoAnna/application-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://stunning-taffy-859f8a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
