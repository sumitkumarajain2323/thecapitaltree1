import React from "react";
import "./Support.scss";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Seo from "../Component/Seo";

const Support = () => {
  return (
    <div className="support-container">
      <Seo
        title="Support Page"
        description="Get help and support for our services"
        page="Support"
        keywords={["trading", "thecapitaltree", "support", "help"]}
      />
      <Header />

      {/* Main Content */}
      <main className="main-content-support">
        {/* Top Section with Background Image */}
        <section className="support-top">
          <div className="support-content">
            <h1 className="support-text">How can we help?</h1>
            <input
              type="text"
              placeholder="Search for help..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </section>

        {/* Bottom Section with Help Desk */}
        <h2 className="help-title">Help Desk</h2>
        <section className="help-des    k">
          <div className="help-block">Block 1</div>
          <div className="help-block">Block 2</div>
          <div className="help-block">Block 3</div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
