import express from "express";
import { createComment } from "../controllers/comController.js";
import { verifyUser } from "../utils/verify.js";

const router = express.Router();

router.post("/", verifyUser, createComment);
//router.get("/", getComment);

export default router;
