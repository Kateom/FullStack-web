import React from "react";
import Analytics from "../components/Analytics";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero  grid grid-two-cols">
          <div className="hero-content">
            <p className="title-hero">This is a subtitle</p>
            <h1 className="heading-hero">Welcome to our website</h1>
            <p className="desc-hero">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio at nulla tempora corrupti fugit unde officia numquam
              necessitatibus tenetur, id laboriosam delectus velit! Ad nesciunt
            </p>
            <div className="btn-group">
              <NavLink to="/contact">
                <button>Connect Now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="btn-secondary">learn More</button>
              </NavLink>
            </div>
          </div>

          {/* hero Image */}
          <div className="hero-image">
            <img
              src="/images/images/home.png"
              alt="people are coding together"
              height={"400"}
              width={"400"}
            />
          </div>
        </section>

        {/* Second section of analytics  */}
        <Analytics />

        {/* section 3 */}
        <section className="section-hero  grid grid-two-cols">
          {/* hero Image */}
          <div className="hero-image">
            <img
              src="/images/images/design.png"
              alt="people are coding together"
              height={"400"}
              width={"400"}
            />
          </div>

          <div className="hero-content">
            <p className="title-hero">We are here to help you</p>
            <h1 className="heading-hero">Get Started Today</h1>
            <p className="desc-hero">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio at nulla tempora corrupti fugit unde officia numquam
              necessitatibus tenetur, id laboriosam delectus velit! Ad nesciunt
            </p>
            <div className="btn-group">
              <a href="/contact">
                <button>Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn-secondary">learn More</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
