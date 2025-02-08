import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section about">
                    <h1 className="logo-text">The<span>CapitalTree</span></h1>
                    <p>
                        TheCapitalTree is a platform that provides you with the best investment options to help you grow your wealth.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                        <br />
                        <span><i className="fas fa-envelope"></i> &nbsp; info@capitaltree.com</span>
                    </div>
                </div>
                
                {/* Quick Links Section */}
                <div className="footer-section links">
                    <ul>
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About Us</Link></li>
                        <li><Link className="nav-link" to="/support">Support</Link></li>
                        <li><Link className="nav-link" to="/support">Blog</Link></li>
                        <li><Link className="nav-link" to="/support">Contact</Link></li>

                    </ul>
                </div>
                
                {/* Social Media Section */}
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy;  TheCapitalTree. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
