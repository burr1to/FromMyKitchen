import express from "express";
import {
  randomRecipe,
  filterbyName,
  filterbyLatest,
} from "../controllers/filterController.js";

const router = express.Router();

router.get("/random", randomRecipe);
router.get("/name", filterbyName);
router.get("/latest", filterbyLatest);
export default router;
