import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import logo from '../image/logo.png';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Homepage = () => {
  return (
    <div className="homepage-container">
      
      <Header />

      <main className="main-content">
        <section className="description-section">
          <h1 className="main-heading">Empowering you with strategies to grow wealth, manage risk, and achieve financial freedom.</h1>
          

          <button>GET STARTED</button>
          <button>LEARN MORE</button>

        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;