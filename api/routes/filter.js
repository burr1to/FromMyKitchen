import express from "express";
import {
  randomRecipe,
  filterbyName,
  filterbyLatest,
  filterbyIng
} from "../controllers/filterController.js";

const router = express.Router();

router.get("/random", randomRecipe);
router.get("/name", filterbyName);
router.get("/latest", filterbyLatest);
router.get("/ing", filterbyIng)
export default router;
