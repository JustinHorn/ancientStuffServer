const express = require("express");
const { getAllVideos } = require("../controllers/videos");

const api = express.Router();

api.route("/").get(getAllVideos);

module.exports = api;
