import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [users, setUsers] = useState(() => {
    let locaUsers = localStorage.getItem("users");
    if (locaUsers != null) {
      return JSON.parse(locaUsers);
    } else {
      return [];
    }
  });

  const navigate = useNavigate()

  const loginHandler = () => {

    const logedUser = users.find((user) => user.email === email && user.password === pass);

    localStorage.setItem('logedUser', JSON.stringify(logedUser));
    
    console.log("User logged");
    navigate("/shop")
  };

  return (
    <div>
      <form
        style={{
          width: "50%",
          marginTop: "40px",
          margin: "auto",
          border: "2px solid",
          padding: "15px 20px",
          marginBottom: "50px",
          boxShadow: "10px 5px 10px grey",
        }}
      >
        <h4 style={{ textAlign: "center", paddingBottom: "30px" }}>
          Login Here
        </h4>

        <div>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input type="email" id="form2Example1" className="form-control" 
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          {/* Password input */}
          <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e)=> setPass(e.target.value)}
            />
            
          </div>
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={loginHandler}
          >
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-facebook-f" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-google" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
