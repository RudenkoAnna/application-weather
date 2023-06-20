import axios from "axios";
import "./Weather.css";
import { RevolvingDot } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {}
  let apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1> Weather in Boryspil</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Mostly cloudy"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">20</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 24%</li>
            <li>Humidity 83%</li>
            <li>Wind:13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
