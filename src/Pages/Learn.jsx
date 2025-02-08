import React from "react";
import "./Learn.scss";
import Header from "../Component/Header";
import Footer from '../Component/Footer';


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
       <Footer/>
        </div>
    );
    
}

export default Learn;