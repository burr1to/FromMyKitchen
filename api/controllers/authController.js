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
        // expires: new Date(Date.now() + 600000),
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
    res.status(200).send("Logged out");
  } catch (err) {
    next(err);
  }
};

export const getCookie = async (req, res, next) => {
  try {
    console.log(req.cookies.access_token);
  } catch (error) {
    next(error);
  }
};
