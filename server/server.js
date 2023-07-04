const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5002;

const apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

app.get("/weather", (req, res) => {
  const { location } = req.query;
  const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  axios
    .get(weatherApiUrl)
    .then((response) => {
      const weatherData = {
        temperature: response.data.main.temp,
        feels_like: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
      };
      res.json(weatherData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Unable to fetch weather data" });
    });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
