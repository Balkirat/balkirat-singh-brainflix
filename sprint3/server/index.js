const express = require("express");
const app = express();
const cors = require("cors");
const request = require("./middleware/request");
const videoList = require("./data/VideoList");
const mainVideo = require("./data/MainVideo");

const serverPort = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(request);

app.get("/videos", (req, res) => res.json(videoList));

app.get("/videos/:id", (req, res) => {
  console.log(req.params.id);
  res.json(mainVideo.filter(video => video.id === req.params.id));
});

app.listen(serverPort, () => {
  console.log(`Listening on ${serverPort}`);
});
