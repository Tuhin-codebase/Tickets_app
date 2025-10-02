/**
 * title: User.model.js  in this file side work;
 * description: Create a User Model use mongoose;
 * auther:MD Tuhin Ali
 * date: 10,2,2025
 */

//external import
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
