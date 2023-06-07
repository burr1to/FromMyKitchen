import express from "express";
import {
  randomRecipe,
  filterbyName,
  filterbyLatest,
  filterbyIng,
  filterSingleIng,
  filterbyType,
  filterbyTag,
} from "../controllers/filterController.js";

const router = express.Router();

router.get("/random", randomRecipe);
router.get("/name", filterbyName);
router.get("/latest", filterbyLatest);
router.get("/ing", filterbyIng);
router.get("/single", filterSingleIng);
router.get("/type", filterbyType);
router.get("/tag", filterbyTag);
export default router;
