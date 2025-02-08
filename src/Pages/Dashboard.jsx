import React, { useState } from "react";
import "./Dashboard.scss";

const Dashboard = ({ setIsAuthenticated }) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <div className="section-content">Welcome to the Dashboard!</div>;
      case "marketGuides":
        return <div className="section-content">Market Guides Section</div>;
      case "investmentTools":
        return <div className="section-content">Investment Tools Section</div>;
      case "accounts":
        return <div className="section-content">Accounts Section</div>;
      case "profile":
        return <div className="section-content">Profile Section</div>;
      default:
        return <div className="section-content">Welcome to the Dashboard!</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo">&#9679;</div>
          <h1 className="brand-name">TheCapitalTree</h1>
        </div>
        <nav className="nav-menu">
          <button onClick={() => setActiveSection("dashboard")}>Dashboard</button>
          <button onClick={() => setActiveSection("marketGuides")}>Market Guides</button>
          <button onClick={() => setActiveSection("investmentTools")}>Investment Tools</button>
          <button onClick={() => setActiveSection("accounts")}>Accounts</button>
          <button onClick={() => setActiveSection("profile")}>Profile</button>
        </nav>
        <button className="logout-button" onClick={handleSignOut}>Sign out</button>
      </aside>
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Dashboard;