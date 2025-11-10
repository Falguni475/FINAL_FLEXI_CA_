import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate"
  }
});

const Vote = mongoose.model("Vote", voteSchema);
export default Vote;
