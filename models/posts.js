import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  user_ID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  post_likes: {},
  post_views: {},
  post_comments: {},
  post_title: {
    type: String,
  },
  post_content: {
    type: String,
  },
  post_hastag: {
    type: String,
  },
  post_img: {
    type: String,
  },
});

export default mongoose.model("Post", postsSchema);
