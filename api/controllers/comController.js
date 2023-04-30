import Comment from "../models/Comment.js";
import { createError } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  const newComment = new Comment(req.body);

  try {
    const comment = await newComment.save();
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};
