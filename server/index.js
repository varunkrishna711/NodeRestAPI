const tasks = require("./Routes/tasks");
const mongoose = require('mongoose'); 
const dotenv = require("dotenv")
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
dotenv.config();

// connection();

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("connected")})
.catch((e)=>{console.log(e)});

app.use(express.json())

app.get("/", async (req, res) => {
    res.send({ message: "Running......" });
  });

app.use("/api/tasks",tasks);

const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`Listening on port ${port}`));