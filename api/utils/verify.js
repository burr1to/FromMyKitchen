import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verify = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(createError(401, "Not authenticated"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Not valid"));
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verify(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verify(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "No admin rights!"));
    }
  });
};
