import React, { useEffect, useState } from "react";
import "../Home/home.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function App() {
  const [api, setApi] = useState([]);

  async function getData() {
    let {data} = await axios.get("https://fakestoreapi.com/products");
    setApi(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  document.title="Jewelery"

  return (
    <div className="home" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}>

      <div className="contain py-5">

        <div className="container" id="products">
          <div className="space">Jewelery</div>
        </div>

        <div className="container">
          <div className="row">
            {api.map((item, index) => 
              {if(item.category === "jewelery") {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={index}>
                  <Link to={`/details1/${item.id}`} style={{textDecoration:"none"}}>
                    <div className="card" data-aos="fade-up">
                    <img src={item.image} className="card-img" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <button className="card-category">{item.category}</button>

                      <div className="card-about">
                        <h4>Price: {item.price *50} EGP</h4>
                        <p className="mt-3">
                          <i
                            style={{ color: "rgba(216, 172, 49, 1)" }}
                            className="fa-solid fa-star"
                          ></i>{" "}
                          Rating: {item.rating.rate}
                        </p>
                        <p>In stock: {item.rating.count}</p>
                      </div>

                      <div className="button-add text-center">
                        <a href="#">
                          <button className="card-cart p-3">View Details</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              )} else{
                return null
              }}
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

