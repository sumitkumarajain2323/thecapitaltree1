import React from 'react';
import './About.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const About = () => {
  return (
    <div className="about-container">
      
      
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        <section className="about-section">
        <h2>About us </h2>
          <h3>Why Choose the Capital Tree?</h3>
          <p>At The Capital Tree, we blend innovative strategies with rigorous analysis to help our clients achieve sustainable financial growth. Our team of 
            seasoned experts specializes in diversified investment portfolios tailored to your goals</p>

            
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default About;