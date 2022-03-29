import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { login } from "../../../utlis/index";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    console.log(e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const handleSubmit =  (e) => {
    // e.preventDefault()
   axios
     .post("http://localhost:5000/api/users/login", loginData)
     .then((response) => {
      login(response.data.token);
       history.push("/");
       console.log("login success");
     })
     .catch((err) => console.log(err));
  };

  return (
    <div className="authe">
      <div id="container">
        <div className="box">
          <div className="form-box">
            <div className="ic-account"></div>
            <div id="login-form" name="login-form">
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
                id="password"
                className="login-form-input"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button
                className="login-form-btn"
                // type="submit"
                onClick={() => handleSubmit()}
              >
                Login
              </button>
              <p className="text">
                or <a href="/SignUp">Sign up</a>
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

export default Login;
