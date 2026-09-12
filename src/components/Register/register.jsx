import React from 'react';
import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {

  document.title="Register"
  
  return (
    <div className="containerr" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}>
        <div className="register-card" data-aos="zoom-in">
        <h2>Create Account</h2>
            <div className="form">
                <input type="text" placeholder="Username" id="username" />
                <p id="inUser">invalid username</p>
                <input type="email" placeholder="Email Address" id="email" />
                <p id="inEmail">invalid email</p>
                <input type="password" placeholder="Password" id="pass" />
                <p id="inPass">invalid password please make sure the password is 8+ characters long and contains a number & a symbol</p>
                <input type="password" placeholder="Confirm Password" id="cpass" />
                <p id="inCpass">invalid confirming password</p>

                <button type="submit" className="btn">Register</button>
            </div>

            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  );
}
