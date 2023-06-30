import React, { useState } from "react";
import "./Weather.scss";
import { RevolvingDot } from "react-loader-spinner";
import WeatherAPI from "./weatherAPI";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    if (response.coord) {
      setWeatherData({
        ready: true,
        coordinates: response.coord,
        temperature: response.main.temp,
        feels_like: response.main.feels_like,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        city: response.name,
        date: new Date(response.dt * 1000),
        description: response.weather[0].description,
        icon: response.weather[0].icon,
      });
    } else {
      setWeatherData({
        ready: true,
        coordinates: null,
        temperature: null,
        feels_like: null,
        humidity: null,
        wind: null,
        city: response.name,
        date: new Date(response.dt * 1000),
        description: response.weather[0].description,
        icon: response.weather[0].icon,
      });
    }
  }

  function search(city) {
    const weatherAPI = new WeatherAPI();
    weatherAPI
      .getWeather(city)
      .then(handleResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
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
              />
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
    search();
    return (
      <RevolvingDot
        height={100}
        width={100}
        radius={16}
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
