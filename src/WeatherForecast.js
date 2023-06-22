import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">test day</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecst-temperatures"></div>
          <span className="WeatherForecast-temperature-max">max test</span>
          <span className="WeatherForecast-temperature-min">min test</span>
        </div>
      </div>
    </div>
  );
}
