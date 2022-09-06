import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Login from "./Login";
import Style from "../Styles/style.css"
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);
  
const history=useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !position) {
      setRegister(true);
    } else {
      setRegister(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("It is Saved in Local Storage");

      history("/login")
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
 
        <div>
		<center>
          {" "}
          
			
            <form onSubmit={handleFormSubmit}>
              <h3>  Register Here  </h3>

              <div className="form-group">
                <label>Name : </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div><br/>

              <div className="form-group">
                <label>Email : </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div><br/>

              <div className="form-group">
                <label>Password :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div><br/>

              <div className="form-group">
                <label>Phone No : </label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div><br/>

              <div className="form-group">
                <label>Choose your Position : </label>
                <Form.Control
                  as="select"
                  onChange={(event) => setPosition(event.target.value)}
                >
                  <option>Select</option>
                  <option>Member</option>
                  <option>Manager</option>
                  
                </Form.Control>
              </div><br/>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick}  className="forgot-password text-right">
                Already registered?
                
              </p>
              <p className='mt-3'><span><NavLink to="/login">SignIn</NavLink></span> </p>
              {register && (
                <Alert color="primary" variant="danger">
                  Please fill all the fields
                </Alert>
              )}
            </form>
         
            
          
		  </center>
        </div>
		
    
    </>
  );
}

export default Registration;
