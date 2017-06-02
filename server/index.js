const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const growStuff = [{
  name: "tomato",
  lifeCycle: [2,3],
  tempMinMax: [68,80],
  nutrientRatio: [5,10,10],
  climate: "temperate"
}, {
  name: "potato",
  lifeCycle: [2,4],
  tempMinMax: [50,80],
  nutrientRatio: [6,3,8],
  climate: "any"
}, {
  name: "carrot",
  lifeCycle: [2,3],
  tempMinMax: [30,80],
  nutrientRatio: [5,15,15],
  climate: "temperate"
}, {
  name: "corn",
  lifeCycle: [2,3],
  tempMinMax: [40,85],
  nutrientRatio: [7,9,6],
  climate: "any"
}, {
  name: "onion",
  lifeCycle: [3,6],
  tempMinMax: [40,80],
  nutrientRatio: [3,4,3],
  climate: "temperate"
}];

app.get('/growstuff', (request, response) => {
  response.json(growStuff);
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("Live on 3002");
});
