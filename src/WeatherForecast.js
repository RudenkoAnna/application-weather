import { useState, useEffect } from "react";
import "./WeatherForecast.scss";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);

    async function fetchData() {
      try {
        const apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
        const { lat, lon } = props.coordinates;

        const apiUrl = `http://localhost:5000/weatherForecast?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

        const response = await axios.get(apiUrl);
        handleResponse(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [props.coordinates]);

  function handleResponse(data) {
    setForecast(data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
