const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

// Endpoint to fetch weather data
app.get("/api/weather", async (req, res) => {
  try {
    const { city } = req.query;
    const apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";

    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
