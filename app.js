// app.js
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const app = express();

const rootRouter = require("./routes/root");

mongoose.connect(process.env.MONGO_URI).then(() => console.log("db connected"));

mongoose.set("strictQuery", true);

mongoose.connection.on("err", (err) => console.log(`Error: ${err.message}`));

const customMiddleware = (req, res, next) => {
  console.log("middleware applied!!!");
  next();
};

// Middlewares
app.use(expressValidator());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customMiddleware);

// Swagger Documentation Route
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: `
    .swagger-ui .topbar { display: none }
    .swagger-ui .info { margin: 50px 0 }
  `,
    customSiteTitle: "Node.js API Documentation",
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: "none",
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
  })
);

// API Routes
app.use("/", rootRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("App is running at http://localhost:8080");
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
