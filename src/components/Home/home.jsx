import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
// import { cart } from "../Context/context";
import Typewriter from "typewriter-effect";

export default function Home() {
  const productsRef = useRef(null);
  // let {count} = useContext(cart)
  const [api, setApi] = useState([]);
  

  async function getData() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setApi(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  document.title="Home"

  return (
    
    <div className="home" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}>
    {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>  */}

      <div className="contain py-5">

        <div className="container" data-aos="flip-up">
          <div className="welcome text-center">
            <h1 style={{color: "rgb(24, 30, 79)"}}>Natalie's Mall</h1>
            <p>
              <Typewriter
                options={{
                  strings: ["Where Trends Begin, and Carts Get Full"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <button className="p-3 mt-3" onClick={() => productsRef.current?.scrollIntoView({behavior: "smooth",})}>
                Shop Now
              </button>
          </div>
        </div>

        <div className="container" ref={productsRef}>
          <div className="space">Check out our newly added products!</div>
        </div>

        <div className="container">
          <div className="row">
            {api.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={index}>
                <div className="card" data-aos="fade-up">
                <Link to={`/details1/${item.id}`} style={{textDecoration:"none"}}>
                <img src={item.image} className="card-img" alt={item.title} />
                </Link>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    
                    {item.category === "electronics" && (
                      <button className="card-category">
                        <Link to="/electronics" style={{ textDecoration: "none", color: "inherit" }}>{item.category}</Link>
                      </button>
                    )}
                    {item.category === "jewelery" && (
                      <button className="card-category">
                        <Link to="/jewelery" style={{ textDecoration: "none", color: "inherit" }}>{item.category}</Link>
                      </button>
                    )}

                    {item.category === "men's clothing" && (
                      <button className="card-category">
                        <Link to="/mClothing" style={{ textDecoration: "none", color: "inherit" }}>{item.category}</Link>
                      </button>
                    )}

                    {item.category === "women's clothing" && (
                      <button className="card-category">
                        <Link to="/wClothing" style={{ textDecoration: "none", color: "inherit" }}>{item.category}</Link>
                      </button>
                    )}

                    <div className="card-about">
                      <h4>Price: {item.price *50} EGP</h4>
                      <p className="mt-3">
                        <i
                          style={{ color: "rgba(216, 172, 49, 1)" }}
                          className="fa-solid fa-star"
                        ></i>
                        Rating: {item.rating.rate}
                      </p>
                      <p>In stock: {item.rating.count}</p>
                      {/* <p>Count: {count}</p> */}
                    </div>

                    <div className="button-add text-center">
                      <Link to={`/details1/${item.id}`} style={{textDecoration:"none"}}>
                        <button className="card-cart p-3">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
