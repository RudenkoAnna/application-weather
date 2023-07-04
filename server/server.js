const express = require("express");
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const port = 5000;

const apiKey = "7ff281c2c6e2349fc0ada2d7b5f58312";
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // Max number of requests per minute
});

app.use(limiter);

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
