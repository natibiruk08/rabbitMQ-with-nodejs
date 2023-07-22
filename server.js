const express = require("express");
const bodyParser = require("body-parser");
const Producer = require("./producer.js");

const producer = new Producer();

const app = express();

app.use(bodyParser.json());

app.post("/sending", async (req, res, next) => {
  try {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server started...");
});
