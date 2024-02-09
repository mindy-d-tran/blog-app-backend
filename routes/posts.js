import { Router } from "express";

//importing model
import Post from "../models/posts.js";

const router = new Router();

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

export default router;
