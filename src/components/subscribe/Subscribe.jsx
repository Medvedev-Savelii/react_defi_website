import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/473f6bae-abaa-4a9a-8f09-44d68fe1409e"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>

          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
