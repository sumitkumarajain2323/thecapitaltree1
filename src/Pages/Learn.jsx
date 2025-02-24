import React from "react";
import "./Learn.scss";
import Header from "../Component/Header";
import Footer from '../Component/Footer';
import Seo from '../Component/Seo';


function Learn() {
    return (
        <div className="learn-container">
                <Seo title="Home Page"
                    description="this is home page"
                    page="Home"
                    keywords={["trading", "thecaptaltree", "risk management", "strategies"]} />

                <Header />
                <main className="main-content-learn">
                    <section className="learn-section">
                        <h1 className="main-heading-learn">Empower Yourself with Investment Knowledge</h1>
                        <h3 className="">TheCapitalTree is committed to educating investors on market trends, risk management, and wealth-building strategies.</h3>
                        <h2>What You’ll Learn</h2>

                        <div className="learn-grid">
                            <div className="learn-card">
                                <i className="learning"></i>
                                <h3>Investment Basics:</h3>
                                <p>Insights into emerging investment opportunities.</p>
                            </div>
                            <div className="learn-card">
                                <i className="learning"></i>
                                <h3>Market Trends & Analysis:</h3>
                                <p>Smart strategies to secure and grow your financial future.</p>
                            </div>
                            <div className="learn-card">
                                <i className="learning"></i>
                                <h3>Risk Management:</h3>
                                <p>Strategies to minimize risks and maximize returns.</p>
                            </div>
                            <div className="learn-card">
                                <i className="learning"></i>
                                <h3>Wealth Growth Strategies:</h3>
                                <p> How to create sustainable long-term wealth.</p>
                            </div>

                        </div>
                        <br />
                        <span>Stay ahead with our expert insights and <b> transform the way you invest! </b> </span>
                        <div className="short">
                            <span className="short-title">short60</span>
                            <iframe src="https://shorts60.com" height="800px" width="1400px"></iframe>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
            );

            }

            export default Learn;