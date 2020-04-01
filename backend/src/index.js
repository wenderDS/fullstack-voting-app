const express = require("express");

const app = express();
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("Hello World!");
});

app.use(routes);

app.listen(3333);
