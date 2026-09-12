import React, { useContext} from 'react'
import { cart } from "../Context/context";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Typewriter from "typewriter-effect";
import "./cart.css"

export default function Cart() {
  let {procart , setProcart, RemoveFromCart, setCount} = useContext(cart)
  let totalPrice = procart.reduce((acc, productsss) => acc + (productsss.price * 50 * productsss.quantity), 0);
  let totalItems = procart.reduce((acc, productsss) => acc + (productsss.quantity), 0);
  document.title = "Cart"

  function CheckOut() {
    setProcart([]);
    setCount(0);

    swal({
    title: "Happy order Happy customer!",
    icon: "success",
    text: `Check out done successfuly`,
    button: "Make Another Order",
  })
  }

  return (
    <div className="cart" style={{ background: "linear-gradient(to right, #a3ceb6ff, #83b694ff)" }}>
      <div className='containerC'>

        {procart.length === 0 ? (
        <div className='empty d-flex justify-content-center align-items-center' data-aos="zoom-out">
          <div className="cartdd">
            <i className="fa-solid fa-cart-shopping text-white mb-3" style={{fontSize:"100px"}}></i>
            <h1>Your Cart is Empty</h1>
            <p>You haven't added anything yet, browse our amazing trendy products.</p>
            <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <button className="shop mt-2">
              <Typewriter
                options={{
                  strings: ["Shop Now!"],
                  autoStart: true,
                  loop: true,
                }}
              />
              </button>
            </Link>
          </div>
        </div>
          
        ) : (
        <div className='row'> 
          <div className="title" style={{textShadow:" 0 0 20px rgba(255, 255, 255, 1)"}}>
              <h1 className="text-center mb-5">
                Your Cart <i className="fa-solid fa-cart-shopping text-white"></i>
              </h1>
          </div>
        
          <div className='col-lg-8'>
              <ul>
                {procart.map((productsss) => (
                <li key={productsss.id} className='cartd justify-content-between align-items-center mb-4' data-aos="fade-up" data-aos-once="true">
                  <div className="d-flex align-items-center gap-5">
                    <img style={{width:"20%"}} src={productsss.image || productsss.images}/>
                    <div className="">
                      <h5>{productsss.title}</h5>
                      <h5 className='text-secondary'>{productsss.category}</h5>
                      <h5>Price: {(productsss.price *50)} EGP per item</h5>
                      <h5 style={{color: "#bc1919ff"}}>Price: {(productsss.price *50) *(productsss.quantity)} EGP</h5>

                      <div className="counting d-flex align-items-center gap-3 mb-3">
                      {/* Increase quantity */}
                      <button className="btn btn-primary" onClick={() => setProcart((prev) =>
                            prev.map((p) =>
                              p.id === productsss.id
                                ? { ...p, quantity: p.quantity + 1 }
                                : p
                            )
                      )}> + </button>

                      {/* Show productsss's own quantity */}
                        <p className='fs-5 '>{productsss.quantity}</p>
                      
                      {/* Decrease quantity */}
                      <button className="btn btn-primary" onClick={() =>
                          setProcart((prev) =>
                            prev.map((p) =>
                              p.id === productsss.id && p.quantity > 1
                                ? { ...p, quantity: p.quantity - 1 }
                                : p
                            )
                      )}> - </button>
                      </div>

                      <button className='btn btn-outline-danger' onClick={() => RemoveFromCart(productsss.id)}><i class="fa-solid fa-trash"></i> Remove</button>
                    </div>
                  </div>
                </li>
                ))}
              </ul>
          </div>

          <div className='col-lg-4'>
            <div className="cartd">
              <div className="middle">
              <h3>Order Summary</h3>
              <h5>Number of Items: <span className='text-danger'>{totalItems}</span></h5>
              <h5>Total Price: <span className='text-danger'>{totalPrice} EGP</span></h5>
              </div>
              <h5 className='mt-3 ms-2'>Your Delivery Information:</h5>
              <div className="inputs">
                <input type="text"  placeholder='Full Name'/>
                <input type="text"  placeholder='Address'/>
                <input type="Email"  placeholder='Email'/>
              </div>
              <div className="pay">
                  <p>Pay method:</p>
                  <label>
                  <input type="radio" name="option1" value="yes"/>
                  Cash on Delivery
                  </label>
                  <label>
                  <input type="radio" name="option1" value="yes"/>
                  Credit Card
                  </label>
              </div>
              
              <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
              <button className='shop mt-3' style={{padding:"15px 20px;"}} onClick={()=> {CheckOut()}}>Check Out</button>
              </Link>
            </div>
          </div>

        </div>
        )}

      </div>
    </div>
  )
}
