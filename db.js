const mongoose = require('mongoose')
require("dotenv").config()

const mongouri = process.env.MONGO_URI


const connectToMongo = () =>{
    mongoose.connect(mongouri,()=>{
        console.log("Connectd to Mongo Succesfully")
    })
}

module.exports= connectToMongo;