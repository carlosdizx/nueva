"use strict";
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const datos = Object.values(req.query);
  let total = 0;
  let subtotal = 0;
  let cantidad = 0;
  let descuento = "No aplica";
  for (let i = 0; i < datos.length; i++) {
    if (i % 2 == 0) {
      const precio = datos[i];
      const cantidadActual = datos[i + 1];
      if (cantidadActual) {
        cantidad += parseInt(cantidadActual);
        if (cantidadActual >= 10) {
          total += precio * cantidadActual * 0.9;
          descuento = "Aplicado";
        } else {
          total += precio * cantidadActual;
        }
        subtotal += precio * cantidadActual;
      }
    }
  }
  res.render("template", {
    cantidad: cantidad,
    subtotal: subtotal,
    descuento: descuento,
    total: total,
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
