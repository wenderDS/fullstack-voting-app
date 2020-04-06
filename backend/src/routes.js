const express = require("express");

const UserController = require("./controllers/UserController");
const DomainController = require("./controllers/DomainController");
const VotingController = require("./controllers/VotingController");
const VoteController = require("./controllers/VoteController");

const routes = express.Router();

routes.get("/user", UserController.index);
routes.post("/user", UserController.create);

routes.get("/domain", DomainController.index);
routes.post("/domain", DomainController.create);

routes.get("/voting", VotingController.index);
routes.post("/voting", VotingController.create);

routes.get("/vote", VoteController.index);
routes.post("/vote", VoteController.create);

module.exports = routes;
