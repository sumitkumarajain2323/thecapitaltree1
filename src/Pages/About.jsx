import React from 'react';
import './About.scss';
import Header from '../Component/Header';

const About = () => {
  return (
    <div className="about-container">
      
      
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        <section className="about-section">
          <h1 className="main-heading">About Us</h1>
          <p className="about-text">
            Learn more about The Capital Tree and our mission to provide seamless management solutions.
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

export default About;