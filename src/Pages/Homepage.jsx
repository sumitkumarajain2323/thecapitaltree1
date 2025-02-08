import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import logo from '../image/logo.png';
import Header from '../Component/Header'; // Import the Header component

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />

      <main className="main-content">
        <section className="description-section">
          <h1 className="main-heading">Welcome to The Capital Tree</h1>
          <p className="description-text">
            Experience seamless management with our powerful, user-friendly application. Whether you're here to explore, track progress, or connect with others, MyApp has everything you need in one place.
          </p>
          <p className="description-text">
            Get started now by creating your account or logging in to access your personalized dashboard. Let us help you achieve your goals effortlessly.
          </p>
          
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;