import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 30
  },
});

export default mongoose.model("User", usersSchema);
