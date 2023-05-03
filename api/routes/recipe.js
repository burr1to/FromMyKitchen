import express from "express";
import {
  createRecipe,
  uploadPhoto,
  getSingleRecipe,
  getAllRecipes,
} from "../controllers/recipeController.js";
import { verifyUser } from "../utils/verify.js";
import upload from "./../utils/upload.js";

const router = express.Router();

router.post("/", upload.single("file"), createRecipe);

router.post("/photo", upload.single("file"), uploadPhoto);

router.get("/:id", getSingleRecipe);
router.get("/", getAllRecipes);

// router.put()
// router.delete()

export default router;
