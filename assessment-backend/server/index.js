const express = require("express");
const cors = require("cors");
const app = express();
const {
  getCompliment,
  getFortune,
  getHappyfact,
  getgoodnews,
  getcodingrocks,
} = require("./controller");

app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/happyfacts", getHappyfact);
app.get("/api/goodnews", getgoodnews);
app.get("/api/codingrocks", getcodingrocks);

app.listen(4002, () => console.log("Server running on 4002x"));