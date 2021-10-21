"use strict";
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
});
