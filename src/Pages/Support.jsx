import React from 'react';
import './Support.scss';
import Header from '../Component/Header';

const Support = () => {
  return (
    <div className="services-container">
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        <section className="services-section">
          <h1 className="main-heading">Our Services</h1>
          <p className="services-text">
            Discover the range of services we offer to help you manage your investments and achieve your goals.
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

export default Support;