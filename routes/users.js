import { Router } from "express";
import bcrypt from "bcrypt";

//importing model
import User from "../models/users.js";

const SALT_ROUNDS = 8;

const router = new Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// GET single user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// POST (create) new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT (update) user's profile pic
router.put("/:id/update-profile-pic", async (req, res) => {
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
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT (update) user's username
router.put("/:id/update-username/", async (req, res) => {
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
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT (update) user's email
router.put("/:id/update-email/", async (req, res) => {
  try {
    const updateUserUsername = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateUserUsername);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// PUT (update) user's password
router.put("/:id/update-password/", async (req, res) => {
  try {
    // deconstructing
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("user not found");

    const updateUserPassword = await User.findByIdAndUpdate(
      user._id,
      { password: newPassword },
      {
        new: true,
      }
    );
    res.send(updateUserPassword);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});

// DELETE user
router.delete("/:id/delete-user", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "user deleted", deleteUser });
  } catch (error) {
    res
      .status(404)
      .json({ msg: "something went wrong", errormsg: error.message });
  }
});
export default router;
