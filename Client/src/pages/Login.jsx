import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Login = () => {
  // login logic here
  const [user, setuser] = useState({
    email: "",
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

  const handelsubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      if (response.ok) {
       
        const res_data = await response.json();
        storetokenInLs(res_data.token);

        navigate("/");
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
              <h1 className="main-heading">Login form</h1>
              <br />
              <form onSubmit={handelsubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                    required
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
                    required
                  />
                </div>
                <div>
                  <button type="submit">Login Now</button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Login;
