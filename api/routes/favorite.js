import express from "express";
import {
  makeFavorite,
  deleteFavorite,
  getFavorite,
  getUserFavorites,
} from "../controllers/favController.js";

const router = express.Router();

router.post("/", makeFavorite);
router.get("/:id1/:id2", getFavorite);
router.delete("/:id1/:id2", deleteFavorite);
router.get("/:id", getUserFavorites);

export default router;
