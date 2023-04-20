const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect("mongodb+srv://afraz:afraz@cluster0.ux7txsu.mongodb.net/GigPilot?retryWrites=true&w=majority")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB