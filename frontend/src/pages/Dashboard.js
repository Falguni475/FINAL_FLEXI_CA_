import React, { useEffect, useState } from "react";
import API from "../api";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    hasVoted: false
  });

  const [stats, setStats] = useState({
    totalVotes: 1234,
    totalCandidates: 3
  });

  // Fetch user info & stats from backend in real scenario
  useEffect(() => {
    // Example: API.get("/me").then(res => setUser(res.data))
    // Example: API.get("/stats").then(res => setStats(res.data))
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="user-info-card">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Voting Status: {user.hasVoted ? "✅ Voted" : "❌ Not Voted"}</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Votes Cast</h3>
          <p>{stats.totalVotes}</p>
        </div>
        <div className="stat-card">
          <h3>Total Candidates</h3>
          <p>{stats.totalCandidates}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
