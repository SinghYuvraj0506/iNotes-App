const mongoose = require("mongoose");
require("dotenv").config();

const mongouri = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.connect(
    mongouri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => {
      console.log("Connectd to Mongo Succesfully");
    }
  );
};

mongoose.set("strictQuery", false);

module.exports = connectToMongo;
