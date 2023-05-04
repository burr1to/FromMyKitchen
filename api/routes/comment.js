import express from "express";
import { createComment, getComments } from "../controllers/comController.js";
import { verify, verifyUser } from "../utils/verify.js";

const router = express.Router();

router.post("/", verify, createComment);
router.get("/", getComments);
//router.get("/", getComment);

export default router;
