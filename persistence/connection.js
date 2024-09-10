const mongoose = require("mongoose");
const config = require("../config");

const connectMongo = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
  } catch (error) {
    console.log("Error connecting mongo", error);
  }
};

module.exports = connectMongo;
