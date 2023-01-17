const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4002, () => console.log("Server running on 4002"));

const {getFortune} = require('./controller')

app.get("/api/fortune", getFortune);

app.listen(4002, () => console.log("Server running on 4002"));

const {getHappyfact} = require('./controller')

app.get("/api/happyfacts", getHappyfact);

app.listen(4002, () => console.log("Server running on 4002x"));

 
const {getgoodnews} = require('./controller')

app.get("/api/goodnews", getgoodnews);

app.listen(4002, () => console.log("Server running on 4002x"));

 
const {getcodingrocks} = require('./controller')

app.get("/api/codingrocks", getcodingrocks);

app.listen(4002, () => console.log("Server running on 4002x"));

