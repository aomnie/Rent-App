import "./Mynav.css";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Mynav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const history = useHistory();

  const token = localStorage.getItem("JWT");

  const loginRoute = () => {
    let path = `/Login`;
    history.push(path);
  };

  // const SignInRoute = () => {
  //   let path = `/Signup`;
  //   history.push(path);
  // };

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />
            RENT
          </span>
          IT
        </h1>

        {token ? (
          <button
            className="btnn"
            onClick={() => {
              localStorage.removeItem("JWT");
              window.location.reload();
            }}
          >
            Log out
          </button>
        ) : (
          <button className="btnn" onClick={loginRoute}>
            Log In
          </button>
        )}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Search">Search</a>
          </li>
          <li>
            <a href="/Announces">Announces</a>
          </li>
          <li>
            <a href="/Add Post">Add Post</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mynav;
