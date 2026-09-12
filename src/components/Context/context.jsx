import React, { createContext, useState} from 'react'
import swal from 'sweetalert';

export let cart = createContext()
export default function Context(props) {

  let [count, setCount] = useState(0)
  let [procart, setProcart] = useState([])

  function AddToCart(product){
    // setProcart((prevProcart) => [...prevProcart, product] ) 
    setProcart((prevProcart) => {
      const existing = prevProcart.find((p) => p.id === product.id);

      if (existing) {
        // update quantity if already in cart
        return prevProcart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // add new product with quantity 1
        return [...prevProcart, { ...product, quantity: 1 }];
    }
    }); //counting fel cart

    setCount((prevCount) => prevCount + 1);

    swal({
    title: "Yay!",
    text: `${product.title} has been added to cart successfuly`,
    icon: "success",
    button: "Continue Shopping",
    });
  }

  function RemoveFromCart(productId){
    setProcart((prevProcart) => {
      let updateProcart = prevProcart.filter((product) => product.id !== productId)
      setCount(updateProcart.length)
      return updateProcart
    })
  }

  return <cart.Provider value={{count , setCount, procart, setProcart, AddToCart, RemoveFromCart}}>
    {props.children}
  </cart.Provider>
}
