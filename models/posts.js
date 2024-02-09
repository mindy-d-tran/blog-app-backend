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
      type: [user],
    },
    post_comments: {
      type: [comment],
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postsSchema);
