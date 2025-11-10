import express from "express";
import { addCandidate, getCandidates } from "../controllers/candidateController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addCandidate);
router.get("/", getCandidates);

export default router;
