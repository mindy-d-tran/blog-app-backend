import { Router } from "express";

//importing model
import Comment from "../models/comments.js";

const router = new Router();

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

export default router;
