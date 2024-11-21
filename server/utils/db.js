const mongoose = require("mongoose");

const URL =process.env.MONGODB_ID;



const connectdb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connection Sucessfull to DB");
  } catch (error) {
    console.log("Connection failed to DB");
    process.exit(0);
  }
};

module.exports = connectdb;
