
const connectToMongo = require("./db")
const express = require("express")
var cors = require('cors')
require("dotenv").config()

connectToMongo();
let port = process.env.port || 5000 

const app = express()

app.use(cors())

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
