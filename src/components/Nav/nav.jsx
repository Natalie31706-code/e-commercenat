import React, { useContext } from 'react'
import "./nav.css"
import { Link } from "react-router-dom";
import { cart } from '../Context/context';


export default function Nav() {
    let {count} = useContext(cart)
  return (
<div>

{/*
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="#" style={{fontWeight: "500"}} >Natalie's <span style={{ color: "#1881a7" }}> Mall</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}

      {/* Top bar */}
      <nav className="navbar navbar-light bg-light p-3">
        <div className="container">
            <Link className="navbar-brand" to="/" style={{fontWeight: "500" , fontSize:"30px"}}>Natalie's <span style={{ color: "#1881a7" }}> Shop</span></Link>
            <form className="Sh d-flex">
                <input className="form-control me-2 py-2" type="search" placeholder="Search Product . . ."/>
            </form>
            <div className="right d-flex align-items-center gap-4">
                <button className="btn btn-success px-5 py-2" type="submit"> <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link></button>             
                <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}><div className='position-relative'>
                <i className="fa-solid fa-cart-shopping" style={{fontSize:"30px"}}></i>    
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white'>{count}</span>
                </div></Link>
            </div>

        </div>
      </nav>

      {/* Bottom navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home" style={{fontWeight: "500" , fontSize:"20px"}}>Home</Link>
                    </li>
                    <li className="nav-item dropdown" style={{fontWeight: "500" , fontSize:"20px"}}>
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Clothing
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/mClothing">Men's Clothing</Link></li>
                        <li><Link className="dropdown-item" to="/wClothing">Women's Clothing</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/electronics" style={{fontWeight: "500" , fontSize:"20px"}}>Electronics</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/jewelery" style={{fontWeight: "500" , fontSize:"20px"}}>Jewelery</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/food" style={{fontWeight: "500" , fontSize:"20px"}}>Food</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/furniture" style={{fontWeight: "500" , fontSize:"20px"}}>Furniture</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/beauty" style={{fontWeight: "500" , fontSize:"20px"}}>Beauty</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

</div>
  )
}
