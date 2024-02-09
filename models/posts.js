import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({});

export default mongoose.model('Post', postsSchema);