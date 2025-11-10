import Vote from "../models/vote.js";
import Candidate from "../models/Candidate.js";
import User from "../models/user.js";

export const voteCandidate = async (req, res) => {
  const userId = req.user._id;
  const { candidateId } = req.body;

  const user = await User.findById(userId);
  if (user.hasVoted) return res.status(400).json({ message: "You have already voted!" });

  const candidate = await Candidate.findById(candidateId);
  if (!candidate) return res.status(400).json({ message: "Candidate not found" });

  await Vote.create({ user: userId, candidate: candidateId });

  candidate.votes++;
  await candidate.save();

  user.hasVoted = true;
  await user.save();

  res.json({ message: "Vote submitted successfully!" });
};
