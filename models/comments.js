import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({});

export default mongoose.model('Comment', commentsSchema);