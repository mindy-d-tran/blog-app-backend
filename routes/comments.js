import { Router } from "express";

//importing model
import Comment from "../models/comments.js";

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
    const comment = Comment.findById(req.params.id);
    res.send(comment);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// POST (create) new comment
router.post('/', async(req,res)=>{
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).send(newComment);
    } catch (error) {
        res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
    }
})
export default router;
