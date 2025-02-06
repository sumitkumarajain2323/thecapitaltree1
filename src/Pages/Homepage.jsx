import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import logo from '../image/logo.png';
import Header from '../Component/Header';

const Homepage = () => {
  return (
    <div className="homepage-container">
      
      <Header />

      <main className="main-content">
        <section className="description-section">
          <h1 className="main-heading">Empowering you with strategies to grow wealth, manage risk, and achieve financial freedom.</h1>
          

          <button>GET STARTED</button>
          <button>LEARN MORE</button>


          <h2>About us </h2>
          <h3>Why Choose the Capital Tree?</h3>
          <p>At The Capital Tree, we blend innovative strategies with rigorous analysis to help our clients achieve sustainable financial growth. Our team of 
            seasoned experts specializes in diversified investment portfolios tailored to your goals</p>

            <h2>SERVICES OFFERED</h2>
            <p>A grid layout with icons and short descriptions:</p>
            <li>Portfolio Management
            </li>
            <li>Wealth Planning</li>
            <li>Market Insights & Reports</li>
            <li>Risk Mitigation Strategies</li>
            <li>Sustainable Investing</li>
         

         <h2>Contact & Newsletter Signup
         </h2>
         <h3>Stay Informed, Stay Ahead</h3>
         <form >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
          
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            
            required
          />
        </div>
        <div>
          <label htmlFor="subscribe">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
            />
            Subscribe to The Capital Tree newsletter for market insights.
          </label>
        </div>
        <button type="submit">Subscribe</button>
      </form>
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