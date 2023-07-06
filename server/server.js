const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const weatherRouter = require("./routes/weatherapi");

const app = express();
const port = 5000;

app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // Max number of requests per minute
});

app.use(limiter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "API for retrieving weather data",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/weatherapi.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", weatherRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
