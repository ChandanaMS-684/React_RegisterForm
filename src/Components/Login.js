import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [login, setLogin] = useState(false);
  
  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setLogin(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setLogin(true);
    } else {
      history("/home")
      setLogin(false);
    }
  }

  return (
    <div>
      
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {login && (
            <Alert color="primary" variant="warning">
              Please enter correct Input details
            </Alert>
          )}
        </form>
      
      
    </div>
  );
}

export default Login;
