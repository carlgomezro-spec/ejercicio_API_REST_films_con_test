require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Rutas
const filmsRoutes = require("./routes/films.js");


app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;