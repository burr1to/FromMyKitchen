import express from "express";
import {
  createRecipe,
  uploadPhoto,
  getPhoto,
} from "../controllers/recipeController.js";
import { verifyUser } from "../utils/verify.js";
import multer from "multer";
const router = express.Router();

const upload = multer({ dest: "controllers/photos" });

router.post("/", verifyUser, createRecipe);

router.post("/photo", upload.single("photo"), uploadPhoto);
router.get("/photo/:id", getPhoto);

export default router;
