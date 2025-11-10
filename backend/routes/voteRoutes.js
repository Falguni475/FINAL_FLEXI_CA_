import express from "express";
import { voteCandidate } from "../controllers/voteController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, voteCandidate);

export default router;
