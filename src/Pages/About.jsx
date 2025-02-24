import React from 'react';
import './About.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import about from '../image/About.png';
import Seo from '../Component/Seo';

const About = () => {
  return (
    <div className="about-container">

<Seo title="About Page" description="this is About page"  keywords={["trading", "thecaptaltree", "risk management", "strategies"]} />
      
      <Header/>

      {/* Main Content */}
      <main className="main-content-about">
        <section className="about-section">
          <h1>"About The Capital Tree"</h1>
          <img  className="About-img" src={about} alt="trading-image" title="trading-image" height="350px" width="650px" loading="eager" />
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