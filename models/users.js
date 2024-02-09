import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({});

export default mongoose.model('User', usersSchema);