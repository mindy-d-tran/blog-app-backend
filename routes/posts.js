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
    if (!post) return res.send("post not found");

    post.post_views++;
    await post.save();
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

// PUT (update) post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(post);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT add user to like array (so the ui can show differently)
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      post.post_likes.push(req.body);
      await post.save();
      return res.send({ msg: "user like the post" });
    }
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT remove user from like array (unlike)
router.put("/:id/unlike", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      post.post_likes.pull(req.body);
      await post.save();
      return res.send({ msg: "user unlike the post" });
    }
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});
// DELETE post
router.delete("/:id/", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: "post deleted", deletePost });
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});
export default router;
