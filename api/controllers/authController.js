import User from "./../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("Created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const verify = await bcrypt.compare(req.body.password, user.password);
    if (!verify)
      return next(createError(400, "Wrong credentials! Please try again"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails }); //to protect password and admin status
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");

    res.status(200).send("Log out");
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "username", "email", "profilePicture"];
  const id = req.params.id;

  const isValid = updates.some((update) => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.log("Error");
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(
      "email name username profilePicture"
    );
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("name _id profilePicture");
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
