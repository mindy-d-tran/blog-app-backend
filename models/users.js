import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

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

// encrypting the password
usersSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})

export default mongoose.model("User", usersSchema);