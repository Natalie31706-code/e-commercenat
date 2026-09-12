import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {

  document.title="Login"

  return (
    <div className="containerrr" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}>
      <div className="login-cardd" data-aos="zoom-in">
        <h2>Welcome Back!</h2>
        <div className="form">
          <p id="data">No users are registered</p>
          <input type="email" placeholder="Email Address" id="email" />
          <p id="inEmail">Incorrect Email</p>
          <input type="password" placeholder="Password" id="pass" />
          <p id="inPass">Incorrect Password</p>
          <button type="submit" className="btn">Log In</button>
        </div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}
