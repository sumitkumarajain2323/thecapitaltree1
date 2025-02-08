import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./Login.scss";
import './Dashboard.jsx';


const LoginRegister = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic here
    setIsAuthenticated(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic here
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Dashboard setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo-section">
          <div className="logo">&#967;</div>
          <h1 className="brand-name">TheCapitalTree</h1>
        </div>
        {isRegister ? (
          <>
            <h2 className="auth-title">Register</h2>
            <p className="auth-subtitle">Create an account to get started</p>
            <form className="auth-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="auth-button">Register</button>
            </form>
            <p className="toggle-message">
              Already have an account? <button onClick={toggleForm}>Log in</button>
            </p>
          </>
        ) : (
          <>
            <h2 className="auth-title">Log In</h2>
            <p className="auth-subtitle">Join for exclusive access</p>
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="auth-button">Log in</button>
            </form>
            <p className="toggle-message">
              Don’t have an account? <button onClick={toggleForm}>Register</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;

