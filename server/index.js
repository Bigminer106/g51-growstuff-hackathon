const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const growStuff = [{
  name: "Tomato",
  image: 'images/tomato.png',
  lifeCycle: 3,
  tempMin: 68,
  tempMax: 80,
  nutrientRatio: [5,10,10],
  climate: "Temperate"
}, {
  name: "Potato",
  image: 'images/potato.png',
  lifeCycle: 4,
  tempMin: 50,
  tempMax: 80,
  nutrientRatio: [6,3,8],
  climate: "Any"
}, {
  name: "Carrot",
  image: 'images/carrot.png',
  lifeCycle: 3,
  tempMin: 30,
  tempMax: 80,
  nutrientRatio: [5,15,15],
  climate: "Temperate"
}, {
  name: "Corn",
  image: 'images/corn.png',
  lifeCycle: 3,
  tempMin: 40,
  tempMax: 85,
  nutrientRatio: [7,9,6],
  climate: "Any"
}, {
  name: "Onion",
  image: 'images/onion.png',
  lifeCycle: 6,
  tempMin:40,
  tempMax: 80,
  nutrientRatio: [3,4,3],
  climate: "Temperate"
}];

app.get('/growstuff', (request, response) => {
  response.json(growStuff);
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("Live on 3002");
});
