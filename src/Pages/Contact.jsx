import React from 'react';
import './Contact.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Seo from '../Component/Seo';

const Contact= () => {
  return (
    <div className="Contact-container">
       <Seo title="Contact Page" description="this is Contact page" page="Contact" keywords={["wealth", "financial freedom", "risk management", "strategies"]} />
      <Header/>

      {/* Main Content */}
      <main className="main-content-contact">
        <section className="contact-section">
          <h1 className="contact">Our Contact</h1>
          <p className="contact-text">
            
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;