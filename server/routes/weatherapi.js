const express = require("express");
const axios = require("axios");

const router = express.Router();
const apiKey = "67bd5f95b927ba25009785402ef4eff3";
/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Get weather data
 *     parameters:
 *       - in: query
 *         name: location
 *         required: true
 *         description: The location for which to retrieve weather data
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WeatherData'
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
 *     WeatherData:
 *       type: object
 *       properties:
 *         temperature:
 *           type: number
 *         feels_like:
 *           type: number
 *         humidity:
 *           type: number
 *         wind:
 *           type: number
 *         city:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
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

router.get("/weather", (req, res) => {
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

module.exports = router;
