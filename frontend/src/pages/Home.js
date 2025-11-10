import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to VoteMaster</h1>
        <p>Your voice matters! Vote for your favorite candidate now.</p>
      </div>
      <div className="features">
        <div className="feature-card">Secure Voting</div>
        <div className="feature-card">Real-time Results</div>
        <div className="feature-card">Easy Registration</div>
      </div>
    </div>
  );
}

export default Home;

