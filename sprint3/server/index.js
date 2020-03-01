const express = require("express");
const app = express();
const cors = require("cors");
const request = require("./middleware/request");
const videoRoutes = require("./routes/videos");
const bodyParser = require("body-parser");
const serverPort = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(request); //using middleware

app.use("/videos", videoRoutes);

app.listen(serverPort, () => {
  console.log(`Listening on ${serverPort}`);
});
