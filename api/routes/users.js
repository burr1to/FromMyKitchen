import express from "express";
import {
  register,
  login,
  logout,
  updateUser,
  getUser,
} from "../controllers/authController.js";
import upload from "./../utils/upload.js";
import { verifyUser, verify } from "../utils/verify.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verify, logout);
router.get("/:id", getUser);

router.patch("/update/:id", verifyUser, updateUser);

export default router;
