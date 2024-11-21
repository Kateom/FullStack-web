import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <section className="error-section">
        <div className="content">
          <h3 className="header">404</h3>
          <h5 className="description">Sorry! Page Not Found</h5>
          <p className="description-para">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">Return home</NavLink>
            <NavLink to="/contact">Report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
