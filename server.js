require("dotenv").config();
const express = require("express");

const cors = require("cors");
const stuff = require("./api/stuff");
const videos = require("./api/videos");
const errorHandler = require("./middleware/error");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/stuff", stuff);
app.use("/videos", videos);
app.use(errorHandler);

app.listen("4000", () => console.log("connected"));
