//code for testing weather.js
//first code ~~~~~~~~~~~~~~~~~```
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    feels_like: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
}
//second test ~~~~~~~~~~~~~~~~~~~~
function search() {
  const apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}

/// Codefor test CustomCloth.js
const temperature = props.temperature;

if (temperature > 20) {
  clothing = "Shorts and T-Shirt";
  imageSrc = "/customicons/light-wear.png";
} else if (temperature >= 15 && temperature <= 20) {
  clothing = "Pants and Hoodie";
  imageSrc = "/customicons/warm-suit.png";
} else if (temperature >= 5 && temperature < 15) {
  clothing = "Jacket";
  imageSrc = "/customicons/jacket.png";
} else if (temperature >= 0 && temperature < 5) {
  clothing = "Coat";
  imageSrc = "/customicons/coat.png";
} else {
  clothing = "Warm Jacket";
  imageSrc = "/customicons/winter-jacket.png";
}
//Code for test FormattedDate
// for test one ~~~~~~~~~~~~~~~```
export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()]; }
//
  //Code for WeatherForecastDay.js

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  //
  //Code for Test from WeatherIcon.js
const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "SLEET",
  "11n": "SLEET",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};
//
//Code for Test from WeatherTemperature.js
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }}
  //