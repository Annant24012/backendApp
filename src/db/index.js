import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async (req, res) => {
  try {
    const instance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(instance.connection.host);
    console.log("database connected");
  } catch (error) {
    console.log("error found: ", error);
  }
};

export default connectDB;
