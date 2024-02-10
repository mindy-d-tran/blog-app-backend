import mongoose from "mongoose";

// subschema for user
const user = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { _id: false }
);
// subschema for comment
const comment = new mongoose.Schema(
  {
    comment_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  },
  { _id: false }
);
// subschema for post content
const post_content = new mongoose.Schema(
  {
    text: String,
    img: [String],
  },
  { _id: false }
);

// Schema
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
      default: "",
    },
    post_content: {
      type: post_content,
      required: true,
    },
    post_hashtag: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postsSchema);
