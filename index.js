
const connectToMongo = require("./db")
const express = require("express")
var cors = require('cors')
require("dotenv").config()

connectToMongo();
let port = process.env.PORT || 5000 

const app = express()

var corsOptions = {
    origin: process.env.CLIENT_URL
  };

app.use(cors(corsOptions));

app.use(express.json())   // it is a middleware used to take req.body in json form

app.get("/",async (req,res)=>{
    res.send("Hellp guys, welcome to inotes server")
})

// Available Routes
app.use("/api/auth",require('./routes/auth'))
app.use("/api/notes",require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Welcome to the port ${port}`)
})

