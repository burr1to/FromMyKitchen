import express from "express";
import {
  register,
  login,
  logout,
  getCookie,
} from "../controllers/authController.js";
import { verifyUser, verify } from "../utils/verify.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verify, logout);
router.get("/cookie", getCookie);

export default router;
