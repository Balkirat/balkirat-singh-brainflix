const express = require("express");
const fs = require('fs');
const videoList = require("../data/VideoList");
const mainVideo = require("../data/MainVideo");
const uuid = require("uuid");
const router = express.Router();

router.get("/", (req, res) => res.json(videoList));

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const rightId = mainVideo.find(video => video.id === req.params.id);
  if (rightId) {
    console.log("in filter");
    // const data = mainVideo.filter(video => video.id === req.params.id);

    res.json(mainVideo.find(video => video.id === req.params.id));
  } else {
    res.status(404).json({ message: "No video with that id exists" });
  }
});

router.post("/", (req, res) => {
  const newVideo = {
    id: uuid.v4(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image
  };

  res.status(200).json(newVideo);
  videoList.push(newVideo);
  fs.writeFileSync('./datta/')
});

module.exports = router;
