import React from "react";
import Analytics from "../components/Analytics";
import { NavLink } from "react-router-dom";

const About = () => {
  return <>
  <main>
    <section className="about-section grid grid-two-cols">
      <div className="title-hero">
      <p>Welcome, Masoom Singh</p>
      <h1 className="heading-hero">Why Choose Us?</h1>
      <div className="about-info">
        <p>Expertise: Our team consist of expreienced IT professionals who are passionate about staying up-to-date with industry trends.</p>
      </div>
      <div className="about-info">
        <p>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your goals.</p>
      </div>
      <div className="about-info">
        <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns. </p>
      </div>
      <div className="about-info">
        <p>Affordability: We offer competitvive pricing without compromising on the quality of our service. </p>
      </div>
      <div className="about-info">
        <p>Reliability: Count on us to be there when you need us. We're commited to ensuring your IT environment is  available 24/7.</p>
      </div>
      <div className="btn-group">
              <NavLink to="/contact">
                <button>Connect Now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="btn-secondary">learn More</button>
              </NavLink>
            </div>
      </div>
      {/* about image section */}
      <div className="about-image">
        <img src="./images/images/about.png" 
        alt="" 
        height={"400"}
        width={"400"}/>
      </div>
    </section>
  </main>

{/* section two component    */}
  <Analytics/>
  
  
  </>;
};

export default About;
