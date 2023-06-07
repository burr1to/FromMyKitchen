import express from "express";
import {
  createRecipe,
  getSingleRecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
  uploadPhoto,
  getUserRecipe,
} from "../controllers/recipeController.js";
import { verifyUser, verify, verifyAdmin } from "../utils/verify.js";
import upload from "./../utils/upload.js";

const router = express.Router();

router.post("/", verify, upload.single("file"), createRecipe);
router.post("/photo", upload.single("file"), uploadPhoto);
router.get("/:id", getSingleRecipe);
router.get("/", getAllRecipes);
router.get("/user/:id", getUserRecipe);
router.patch("/:id", updateRecipe);

export default router;
