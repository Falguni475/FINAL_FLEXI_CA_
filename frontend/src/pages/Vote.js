import React, { useEffect, useState } from "react";
import API from "../api";
import "./Vote.css";

function Vote() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" }
  ]);

  const vote = (id) => {
    alert(`You voted for candidate ID: ${id}!`);
    // Here call backend API in real scenario
  };

  return (
    <div className="vote-container">
      <h1>Cast Your Vote</h1>
      <div className="candidates-grid">
        {candidates.map(c => (
          <div key={c.id} className="candidate-card" onClick={() => vote(c.id)}>
            <h3>{c.name}</h3>
            <p>Click to vote</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vote;
