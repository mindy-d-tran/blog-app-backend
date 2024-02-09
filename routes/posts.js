import { Router } from "express";

//importing model
import Post from "../models/posts.js";

const router = new Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// GET 1 post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // if get post then increase the view by one
    if (post) {
      post.post_views++;
      await post.save();
    }
    res.status(200).send(post);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// POST (create) a new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).send(newPost);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});
export default router;
