import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"; 
import About from "./Pages/About";
import Support from "./Pages/Support";
import Invest from "./Pages/Invest";
import Learn from "./Pages/Learn"; 
import SwpCalculator from "./Pages/SwpCalculator";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/swp-calculator" element={<SwpCalculator />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
