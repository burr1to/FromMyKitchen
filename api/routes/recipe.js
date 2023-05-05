import express from "express";
import {
  createRecipe,
  getSingleRecipe,
  getAllRecipes,
  randomRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";
import { verifyUser, verify, verifyAdmin } from "../utils/verify.js";
import upload from "./../utils/upload.js";

const router = express.Router();

router.post("/", verify, upload.single("file"), createRecipe);

router.get("/:id", getSingleRecipe);
router.get("/", getAllRecipes);
router.get("/get/random", randomRecipe);

// router.put()
// router.delete()

export default router;
