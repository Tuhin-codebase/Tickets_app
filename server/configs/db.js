/**
 * title: connect to database in this file side work;
 * description: this app in Mane db.js file
 * auther:MD Tuhin Ali
 * date: 10,2,2025
 */

import mongoose from "mongoose";
import { MONGODB_URI } from "../../Allport.js";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database connect is successfully !");
    });
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
