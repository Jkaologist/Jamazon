import React from "react";
import "./Login.css";
import logo from "./jamazon.jpg";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const login = (event) => {
    event.preventDefault();
    // TODO: login
  };

  const register = (event) => {
    event.preventDefault();
    // TODO: register
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to Jamazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Jamazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
