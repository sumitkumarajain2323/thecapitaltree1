import React from 'react';
import './Support.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Support = () => {
  return (
    <div className="services-container">
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        <section className="services-section">
          <h1 className="main-heading">Our Support</h1>
          <p className="services-text">
            Discover the range of services we offer to help you manage your investments and achieve your goals.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Support;