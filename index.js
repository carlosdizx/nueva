"use strict";
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const resultado = num1 + num2;
  res.render("template", { valor: resultado });
});

app.listen(3000);
