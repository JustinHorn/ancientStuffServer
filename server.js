require("dotenv").config();
const express = require("express");

const cors = require("cors");
const stuff = require("./api/stuff");
const videos = require("./api/videos");
const errorHandler = require("./middleware/error");

const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/stuff", stuff);
app.use("/videos", videos);

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(errorHandler);

app.listen(process.env.PORT || "3001", () => console.log("connected"));
