const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("Hello world 2!");
});

module.exports = routes;