import axios from "axios";
import { RevolvingDot } from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(`the weather in Kyiv is ${response.data.main.temp}C`);
  }
  let apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
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
