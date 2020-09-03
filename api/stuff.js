const express = require("express");
const { getAllStuff, getStuff } = require("../controllers/stuff");

const api = express.Router();

api.route("/").get(getAllStuff);

api.route("/:type").get(getStuff);

module.exports = api;
