import React, { Component } from "react";
import "../SignUp/SignUp.css";
class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-form">
          <div className="card-header">
            <h1>Sign In</h1>
          </div>
          <div className="card-info">
            <form className="form">
              <h3>Username</h3>
              <input
                type="username"
                className="form-control"
                placeholder="Enter your username"
              />
              <h3>Password</h3>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <br />
              <p>
                Need an account?{" "}
                <span>
                  <b>Sign up</b>
                </span>
              </p>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
