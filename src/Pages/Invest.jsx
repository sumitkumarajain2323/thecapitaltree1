import React from 'react';
import { Link } from 'react-router-dom';
import './Invest.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Seo from '../Component/Seo';
import philosophy from "../image/invest1.png";

function Invest() {
    return (
        <div className="invest-container">
            <Seo title="Invest Page" description="This is the invest page" page="Invest" keywords={["trading", "thecapitaltree", "risk management", "strategies"]}/>
            <Header />
            <main className="main-content-invest">
                <section className="invest-section">
                    <h1 className="invest-heading">
                        "Grow Your Wealth with Strategic Investments" or "Partner with The Capital Tree for Smarter Returns".
                    </h1>
                    <h3>Unlock consistent growth through innovative and risk-adjusted portfolio strategies</h3>
                    <p className="invest-text">
                        Invest in The Capital Tree and grow your wealth with us.
                    </p>
                    <div>
                    <img src={philosophy} alt=" investment philosophy"  title="investment philosophy" height="400px" width="600px" loading="eager"/>
                    <p> Investment Philosophy</p>
                    <span>At The Capital Tree, we believe in sustainable wealth creation through strategic and data-driven investment approaches. Our philosophy revolves around disciplined risk management, diversification, and maximizing returns while ensuring financial security for our investors.</span>
                    <div>
                        <h2>Key Benefits of Partnering with The Capital Tree</h2>
                        <ul>
                            <li>Consistent Returns: Targeting 3-5% monthly gains to help investors manage expenses.</li>
                            <li>Expert Management: Professionally curated portfolios backed by in-depth market research.</li>
                            <li>Flexible Investment Options: Tailored plans for different risk appetites and financial goals.</li>
                            <li>Transparency & Security: Regular performance reports and compliance with financial regulations.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Investment Process</h2>
                        <ol>
                            <li>Sign Up & Consultation – Understand your financial goals.</li>
                            <li>Portfolio Design – Customized investment strategies tailored to your needs.</li>
                            <li>Investment Execution – Implementing the strategy with precision and care.</li>
                            <li>Monitoring & Reporting – Regular updates and performance reviews.</li>
                            <li>Adjustments & Rebalancing – Adapting to market changes and optimizing returns.</li>
                        </ol>
                    </div>
                    
                    <div>
                            <h2>Performance Highlights</h2>
                            <li>Average annual returns exceeding 36%.</li>
                            <li> Strong risk-adjusted returns through diversified investment strategies.</li>
                            <li>Proven track record of consistent monthly payouts to investors.</li>   
                    </div>
                    <div>
                        <h2>Call to Action (CTA)</h2>
                        <p>Take the next step toward financial freedom!</p>
                        <button>Schedule a Free Consultation</button>
                        <button>Learn More About Our Funds</button>
                    </div>
                    </div>
                    
                   
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Invest;
