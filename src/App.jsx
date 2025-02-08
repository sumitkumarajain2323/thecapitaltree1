import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx"; // Corrected path
import About from './Pages/About';
import Support from './Pages/Support';
import Invest from './Pages/Invest';
//import SwpCalculator from './Pages/SwpCalculator';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
