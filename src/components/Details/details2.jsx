import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import {Helmet} from "react-helmet";
import { cart } from "../Context/context";

export default function Details() {
  let navigate = useNavigate()
  let {AddToCart} = useContext(cart)
  let { id } = useParams();
  let [loading , setLoading] = useState(true)
  const [api, setApi] = useState(null);

  async function getData() {
    let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setApi(data);
    console.log(data);
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAddToCart(){
    AddToCart(api)
    navigate("/cart")
  }

  return (
    <>
    <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>Deatils</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>    

    {loading ? (
    <div className="d-flex justify-content-center align-items-center my-5" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)", width:"100%" , height:"100vh" }}>
        <BeatLoader
            color="#ffffff"
            size={30}
        />
    </div>
    ) : (
      
    <div
      className="details py-5"
      style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}
    >
      <div className="container justify-content-center">
          {api && (
            <div className="card border-0 p-4" style={{ borderRadius: "20px" }} data-aos="flip-left">
              <div className="row g-4 align-items-center">
                
                {/* Image Section */}
                <div className="col-lg-6 col-sm-12 text-center">
                  <img
                    src={api.images}
                    className="img-fluid rounded"
                    alt={api.title}
                    style={{width:"100%" , height:"50vh"}}
                  />
                </div>

                {/* Details Section */}
                <div className="col-lg-6 col-sm-12">
                  <div className="card-body">
                    <h5 className="card-title">{api.title}</h5>
                    <button className="card-category">{api.category}</button>

                    <div className="card-about">
                      <p>{api.description}</p>
                      <h4>Price: {api.price * 50} EGP</h4>
                      <p className="mt-3">
                        <i
                          style={{ color: "rgba(216, 172, 49, 1)" }}
                          className="fa-solid fa-star"
                        ></i>
                        Rating: {api.rating.rate}
                      </p>
                      <p>In stock: {api.rating.count}</p>
                    </div>

                    <div className="button-add text-center">
                      <a href="#">
                        <button onClick={() => {handleAddToCart()}} className="card-cart p-3">Add to Cart</button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="reviews mt-4">
                <h3 style={{ color: "#27ae60" }}>Reviews</h3>
                <div
                  className="Line mb-3"
                  style={{ width: "10%", height: "3px", backgroundColor: "black" }}
                ></div>

                {api.reviews && api.reviews.length > 0 ? (
                  api.reviews.map((review, index) => (
                    <div key={index} className="mb-3 p-3 border rounded bg-light">
                      <p>
                        <h6>{review.reviewerName}</h6> ({review.rating}⭐)
                      </p>
                      <p>{review.comment}</p>
                      <p className="text-muted">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>

            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
}
