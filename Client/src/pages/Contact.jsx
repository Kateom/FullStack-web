import React from "react";
import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: " ",
    message: " ",
  });

  const handelInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section className="contact-section">
        <h1 className="main-heading">Contact Us</h1>

        <div className="section-hero">
          {/* hero Image */}
          <div className="hero-image">
            <img
              src="/images/images/support.png"
              alt="people are coding together"
              height={"400"}
              width={"400"}
            />
          </div>

          <div className="contact-form">
            <form onSubmit={handelsubmit}>
              <div>
                <label htmlFor="username" className="label-contact">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  required
                  value={contact.username}
                  onChange={handelInput}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  value={contact.email}
                  onChange={handelInput}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>

                <textarea
                  name="message"
                  id="message"
                  cols={"30"}
                  rows={"10"}
                  autoComplete="off"
                  required
                  value={contact.message}
                  onChange={handelInput}
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <section className="map-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
