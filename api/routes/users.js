import express from "express";
import {
  register,
  login,
  logout,
  updateUser,
  getUser,
  getAllUsers,
  setFavorite,
  removeFavorite,
  checkFavorite,
  getFavorites,
} from "../controllers/authController.js";
import upload from "./../utils/upload.js";
import { verifyUser, verify } from "../utils/verify.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verify, logout);
router.get("/:id", getUser);
router.get("/", getAllUsers);
router.patch("/update/:id", verifyUser, updateUser);

router.get("/checkFav/:id1/:id2", checkFavorite);
router.get("/getFav/:id", getFavorites);
router.patch("/favorite/:id1/:id2", verifyUser, setFavorite);
router.patch("/unfavorite/:id1/:id2", verifyUser, removeFavorite);

export default router;
