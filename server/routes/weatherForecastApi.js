const express = require("express");
const axios = require("axios");

const router = express.Router();
const apiKey = "67bd5f95b927ba25009785402ef4eff3";

/**
 * @swagger
 * /weatherForecast:
 *   get:
 *     summary: Get weather forecast data
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         description: The latitude of the location
 *         schema:
 *           type: number
 *       - in: query
 *         name: lon
 *         required: true
 *         description: The longitude of the location
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WeatherForecastData'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     WeatherForecastData:
 *       type: object
 *       properties:
 *         forecast:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/WeatherForecastDay'
 *     WeatherForecastDay:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *           format: date-time
 *         temperature:
 *           type: number
 *         description:
 *           type: string
 *         icon:
 *           type: string
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

router.get("/weatherForecast", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherApiUrl);
    const forecastData = extractForecastData(response.data);

    res.json(forecastData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch weather forecast data" });
  }
});

function extractForecastData(data) {
  const forecastData = {
    forecast: [],
  };

  // Process the API response and extract the relevant forecast information
  for (const forecast of data.list) {
    const forecastDay = {
      date: new Date(forecast.dt * 1000),
      temperature: forecast.main.temp,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
    };

    forecastData.forecast.push(forecastDay);
  }

  return forecastData;
}

module.exports = router;
