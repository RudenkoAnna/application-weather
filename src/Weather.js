import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Weather.scss";
import { RevolvingDot } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const fetchWeatherData = useCallback(() => {
    axios
      .get(`http://localhost:5000/weather?location=${city}`)
      .then(handleResponse)
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });
  }, [city]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.temperature,
      feels_like: response.data.feels_like,
      humidity: response.data.humidity,
      wind: response.data.wind,
      city: response.data.city,
      date: new Date(response.data.date),
      description: response.data.description,
      icon: response.data.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return (
      <RevolvingDot
        height="100"
        width="100"
        radius="16"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
