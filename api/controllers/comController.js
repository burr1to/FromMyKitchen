import Comment from "../models/Comment.js";
import { createError } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  const newComment = new Comment(req.body);

  try {
    const comment = await newComment.save();
    res.status(200).json(comment);
  } catch (err) {
    createError("404", "Comment not created");
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    createError("404", "Cannot get recipes");
    next(err);
  }
};
