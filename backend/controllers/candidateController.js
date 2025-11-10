import Candidate from "../models/Candidate.js";

export const addCandidate = async (req, res) => {
  const { name, party } = req.body;

  const candidate = await Candidate.create({ name, party });
  res.json(candidate);
};

export const getCandidates = async (req, res) => {
  const candidates = await Candidate.find().sort({ votes: -1 });
  res.json(candidates);
};
