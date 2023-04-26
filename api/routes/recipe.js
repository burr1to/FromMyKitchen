import express from "express";
import { createRecipe } from "../controllers/recipeController.js";
import { verifyUser } from "../utils/verify.js";
const router = express.Router();

router.post("/", verifyUser, createRecipe);

export default router;
