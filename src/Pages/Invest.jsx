import React from 'react';
import { Link } from 'react-router-dom';
import './Invest.scss';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function Invest() {
    return (
        <div className="invest-container">
            <Header />
            <main className="main-content">
                <section className="invest-section">
                    <h2 className="invest-heading">
                        "Grow Your Wealth with Strategic Investments" or "Partner with The Capital Tree for Smarter Returns".
                    </h2>
                    <h3>Unlock consistent growth through innovative and risk-adjusted portfolio strategies</h3>
                    <p className="invest-text">
                        Invest in The Capital Tree and grow your wealth with us.
                    </p>
                    
                    <div className="invest-form-container">
                        <h3 className="form-title">Start Investing Now</h3>
                        <form className="invest-form">
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="invest-input"
                                required
                            />
                            <button type="submit" className="invest-button">
                                Invest Now
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Invest;
