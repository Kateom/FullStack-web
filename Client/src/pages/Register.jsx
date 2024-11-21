import React from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Register = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storetokenInLs } = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server", res_data);

        storetokenInLs(res_data.token);

        console.log("Registration successful. Redirecting to login page...");
        setuser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        console.log("Error Status:", response.status, response.statusText);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <section className="section-hero  grid grid-two-cols">
            {/* hero Image */}
            <div className="hero-image">
              <img
                src="/images/images/register.png"
                alt="people are coding together"
                height={"400"}
                width={"400"}
              />
            </div>

            <div className="regiseter-form">
              <h1 className="main-heading">Registration form</h1>
              <br />
              <form onSubmit={handelSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="username"
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="phone"
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                  />
                </div>
                <div>
                  <button type="submit">Register Now</button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Register;
