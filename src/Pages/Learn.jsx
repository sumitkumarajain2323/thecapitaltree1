import React from "react";
import "./Learn.scss";
import Header from "../Component/Header";


function Learn() {
    return (
        <div className="learn-container">
        <Header/>
        <main className="main-content">
            <section className="learn-section">
            <h1 className="main-heading">Learn</h1>
            <p className="learn-text">
                Learn about investing and grow your wealth with us.
            </p>
            </section>
        </main>
        <footer className="footer">
            <p>&copy; 2025 The Capital Tree. Powered by the Medro . All rights reserved.</p>
        </footer>
        </div>
    );
    
}