const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const app = express();

const rootRouter = require("./routes/root");

console.log("process.env.MONGO_URI: ", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("db connected"));

mongoose.set("strictQuery", true);

mongoose.connection.on("err", (err) => console.log(`Error: ${err.message}`));

const customMiddleware = (req, res, next) => {
  console.log("middleware applied!!!");
  next();
};

// middlewares
app.use(expressValidator());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customMiddleware);

app.use("/", rootRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("App is running at http://localhost:8080");
});
