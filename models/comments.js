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

const commentsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    post_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: true,
    },
    comment_like: {
      type: [user],
    },
    comment_content: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentsSchema);
