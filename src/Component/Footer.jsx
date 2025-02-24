import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa"; 
import "./Footer.scss";
import footerLogo from "../image/logo4.png"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section ">
                    <div className="footer-heading">
                    <img className="footerLogo" src={footerLogo} alt="logo" title="logo" height="50px"  width="60px" loading="eager"/>
                        <h2 className="logo-text"><span>TheCapitalTree</span></h2>
                    </div >
                    <p className="footer-para">
                        TheCapitalTree is a platform that provides you with the best investment options to help you grow your wealth.
                    </p>
                    <div className="contact">
                        <span> &nbsp; 8263066511</span>
                        <br />
                        <span> &nbsp; The Capital Tree, Pune, India</span>
                        <br/>
                        <span> &nbsp; contact@thecapitaltree.in</span>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/thecapitaltree" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.facebook.com/thecapitaltree" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/thecapitaltree" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com/thecapitaltree" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section links">
                    <h2>Products</h2>
                    <ul>
                        <ol><Link className="nav-link" to="/">MTF</Link></ol>
                        <ol><Link className="nav-link" to="/about">NFO</Link></ol>
                        <ol><Link className="nav-link" to="/services">IPO</Link></ol>
                        <ol><Link className="nav-link" to="/blog">ETF</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Credit</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Stocks</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Mutual Funds</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Bill Payment</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Future & Option</Link></ol>
                    </ul>
                </div>

                <div className="footer-section-links2">
                    <h2>TheCapitalTree</h2>
                    <ul>
                        <ol><Link className="nav-link" to="/">Blog</Link></ol>
                        <ol><Link className="nav-link" to="/about">Pricing</Link></ol>
                        <ol><Link className="nav-link" to="/services">Career</Link></ol>
                        <ol><Link className="nav-link" to="/blog">About</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Media & Press</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Help & Support</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Trust and Safety</Link></ol>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section-link3">
                    <h2>Social Links</h2>
                    <ul>
                        <ol><Link className="nav-link" to="/">AMC</Link></ol>
                        <ol><Link className="nav-link" to="/about">Sitemap</Link></ol>
                        <ol><Link className="nav-link" to="/services">Glossary</Link></ol>
                        <ol><Link className="nav-link" to="/blog">Calculator</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Mutual Funds</Link></ol>
                        <ol><Link className="nav-link" to="/contact">Open Demat Account</Link></ol>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; TheCapitalTree. Backed by Medro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
