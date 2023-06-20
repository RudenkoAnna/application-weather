import axios from "axios";
export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in Kyiv is ${response.data.main.temp}C`);
  }
  let apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return <h2> Weather forecast </h2>;
}
