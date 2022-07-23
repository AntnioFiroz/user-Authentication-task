const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./auth/passport");

require("./models/user");


const api = require("./api");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "User Authentication system 🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);
module.exports = app;
