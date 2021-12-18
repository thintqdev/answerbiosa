import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="container">
      <div className="card-form">
        <div className="card-header">
          <h1>Sign up</h1>
          </div>
          <div className="card-info">
            <form className="form">
              <h3>Fullname</h3>
              <input type="text" className="form-control" placeholder="Fullname" />
              <h3>Username</h3>
              <input type="text" className="form-control" placeholder="Username" />
              <h3>Email</h3>
              <input type="email" className="form-control" placeholder="Email" />
              <h3>Password</h3>
              <input type="password" className="form-control" placeholder="Password" />
              <br/>
              <p>Already have an account? <span><b>Sign in</b></span></p>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
      </div>
    </div>
  );
}
export default SignUp;
