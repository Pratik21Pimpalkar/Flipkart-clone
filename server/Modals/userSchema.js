import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  secret: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamp: true, });

const User = mongoose.model("User", userSchema);
export default User