import { Router } from "express";

//importing model
import Comment from "../models/comments.js";
import Post from "../models/posts.js";

const router = new Router();

// GET comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.send(comments);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// GET 1 comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.send(comment);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// POST (create) new comment
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    const post = await Post.findById(req.body.post_id);
    if (post) {
      post.post_comments.push({ comment_id: newComment._id });
      await post.save();
    }
    res.status(201).send(newComment);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // find comment to find post_id
    const comment = await Comment.findById(req.params.id);

    //find post 
    const post = await Post.findById(comment.post_id);
    // delete the comment from the array
    post.post_comments.pull({comment_id: req.params.id});
    await post.save();

    // delete comment from database
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    res.json({ msg: "comment deleted", deleteComment });

  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});
export default router;
