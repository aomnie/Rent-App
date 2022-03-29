import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [newUser, setNewUser] = useState({});
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const history = useHistory();

  const handleSubmit = () => {
   
   axios
      .post("http://localhost:5000/api/users/register", newUser)
      .then(() => alert('Registred successfully'))
      .catch((err) => console.log(err.response.data.msg));
    history.push("/");
  };

  return (
    <div className="authe">
      <div id="signup">
        <div className="box">
          <div className="form-box">
            <div className="ic-account"></div>
            <div id="login-form">
              <input
                id="name"
                className="login-form-input"
                type="name"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                id="username"
                className="login-form-input"
                type="username"
                name="username"
                onChange={handleChange}
                placeholder="User Name"
                required
              />
              <input
                id="email"
                className="login-form-input"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <input
                id="phone"
                className="login-form-input"
                type="phone"
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <input
                id="password"
                className="login-form-input"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <div>
                <h4 style={{ color: "white" }}>Are you a :</h4>
                <label style={{ color: "white", marginLeft: "20px" }}>
                  <input
                    id="type1"
                    className="login-form-input"
                    type="radio"
                    name="isClient"
                    value="false"
                    onChange={handleChange}
                    required
                  />
                  Renter
                </label>
                <label style={{ color: "white", marginLeft: "100px" }}>
                  <input
                    id="type"
                    className="login-form-input"
                    type="radio"
                    name="isClient"
                    value="true"
                    onChange={handleChange}
                    required
                  />
                  Client
                </label>
              </div>
              <button className="login-form-btn" onClick={handleSubmit}>
                Sign up
              </button>
              <p className="text">
                or <a href="/login">Login</a>
              </p>
            </div>
          </div>
          <div className="circle-01"></div>
          <div className="circle-02"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
