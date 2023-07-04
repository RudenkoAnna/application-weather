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
        const apiKey = "0052a48fbac75b731edfa5e0333ad1e1";
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
