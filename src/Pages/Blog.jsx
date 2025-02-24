import React from "react";
import "./Blog.scss";
import Header from "../Component/Header";
import Footer from '../Component/Footer';
import Seo from '../Component/Seo';

function Blog() {
    return (
        <div className="blog-container">
             <Seo title="Blog Page" description="this is Blog page" page="Blog" keywords={["trading", "thecaptaltree", "risk management", "strategies"]} />
        <Header/>
        <main className="main-content">
            <section className="Blog-section">
            <h1 className="main-heading">Blog</h1>
            <p className="Blog-text">
                Learn about investing and grow your wealth with us.
            </p>
            </section>
        </main>
       <Footer/>
        </div>
    );
    
}

export default Blog;