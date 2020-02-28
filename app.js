const express = require("express");
const morgan = require('morgan');

const jsonRoute = require('./Routes/json');

const app = express();

// app.use(morgan('dev'));

app.use('/json/', jsonRoute);
app.get("/", (req, res) => {
  res.status(200).send("App booted successfully")
});

app.get("/uppercase/:theValue", (req, res) =>
  res.status(200).send(req.params.theValue.toUpperCase())
 );

app.get("*", (req, res) => {
  res.status(404).send("This are not the droids you are looking for")
});

module.exports = app
