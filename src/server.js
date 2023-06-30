const express = require("express");
const WeatherAPI = require("./weatherAPI");

const app = express();
const port = 5000; // Choose the port number you want to use

const weatherAPI = new WeatherAPI();

app.get("/weather", async (req, res) => {
  const location = req.query.location;
  const countryCode = req.query.countryCode;
  const date = new Date(req.query.date);

  try {
    const weatherData = await weatherAPI.getWeather(
      location,
      countryCode,
      date
    );
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
