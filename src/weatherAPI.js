import axios from "axios";

class WeatherAPI {
  constructor() {
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    this.APIKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
  }

  async getWeather(location = "", units = "metric") {
    try {
      const apiUrl = `${this.baseUrl}q=${location}&appid=${this.APIKey}&units=${units}`;
      const response = await axios.get(apiUrl);
      return response.data.weather[0].description;
    } catch (error) {
      return "Error: " + error.message;
    }
  }

  async getTemperature(location = "", units = "metric") {
    try {
      const apiUrl = `${this.baseUrl}q=${location}&appid=${this.APIKey}&units=${units}`;
      const response = await axios.get(apiUrl);
      return response.data.main.temp;
    } catch (error) {
      return "Error: " + error.message;
    }
  }
}

export default WeatherAPI;
