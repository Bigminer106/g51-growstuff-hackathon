const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const growStuff = {};

app.get('/growstuff', (request, response) => {
  response.json(growStuff);
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("Live on 3002");
});
