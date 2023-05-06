import express from "express";
import { randomRecipe } from "../controllers/filterController.js";

const router = express.Router();

router.get("/random", randomRecipe);

export default router;
