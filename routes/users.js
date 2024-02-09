import { Router } from "express";

//importing model
import User from "../models/users.js";

const router = new Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.json(error);
  }
});

// GET single user
router.get("/:id", async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// POST (create) new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({msg: "something went wrong", errormsg: error.message});
  }
});

router.put("/:id/profile-pic/:imgSrc", async (req, res) => {
  try {
    const updateUserProfilePic = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateUserProfilePic);
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router;
