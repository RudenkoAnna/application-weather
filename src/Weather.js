import { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.scss";
import { RevolvingDot } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [props.defaultCity]);

  function handleResponse(response) {
    setWeatherData(response.data);
  }

  function fetchWeatherData() {
    axios
      .get(`http://localhost:5000/weather?location=${props.defaultCity}`)
      .then(handleResponse)
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeatherData();
  }

  function handleCityChange(event) {
    props.onCityChange(event.target.value);
  }

  if (weatherData) {
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
