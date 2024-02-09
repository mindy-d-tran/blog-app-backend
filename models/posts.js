import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { _id: false }
);
const comment = new mongoose.Schema(
  {
    comment_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  },
  { _id: false }
);

const postsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    post_likes: {
      type: [user],
    },
    post_views: {
      type: Number,
      default: 0,
    },
    post_comments: {
      type: [comment],
    },
    post_title: {
      type: String,
      default: ""
    },
    post_content: {
      type: {
        text: String,
        img: [String],
      }, required: true
    },
    post_hastag: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postsSchema);
