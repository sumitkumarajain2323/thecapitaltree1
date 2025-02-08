import React from 'react';
import { Link } from 'react-router-dom';
import './Invest.scss';
import Header from '../Component/Header';
function Invest() {

    return (
        <div className="invest-container">
        <Header/>
        <main className="main-content">
            <section className="invest-section">
            <h1 className="main-heading">Invest</h1>
            <p className="invest-text">
                Invest in The Capital Tree and grow your wealth with us.
            </p>
            </section>
        </main>
        <footer className="footer">
            <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
        </footer>
        </div>
    );
    
}
export default Invest;