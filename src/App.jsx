import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
import Home from './components/Home/home';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/layout';
import WClothing from './components/wClothing/wClothing';
import MClothing from './components/mClothing/mClothing';
import Jewelery from './components/Jewelery/jewelery';
import Electronics from './components/Electronics/electronics';
import Error from './components/Error/Error';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Food from "./components/Food/food"
import Furniture from "./components/Furniture/furniture"
import Beauty from "./components/Beauty/beauty"
import Details1 from './components/Details/details1';
import Details2 from './components/Details/details2';
import Context from './components/Context/context';
import Cart from './components/Cart/cart';

export default function App() {
  let router = createHashRouter([{
    path:"" , element:<Layout/> , children: [
      {path:"/" , element:<Home/>},
      {path:"/home" , element:<Home/>},
      {path:"/wClothing" , element:<WClothing/>},
      {path:"/mClothing" , element:<MClothing/>},
      {path:"/jewelery" , element:<Jewelery/>},
      {path:"/electronics" , element:<Electronics/>},
      {path:"/food" , element:<Food/>},
      {path:"/furniture" , element:<Furniture/>},            
      {path:"/beauty" , element:<Beauty/>},  
      {path:"/details1/:id" , element:<Details1/>}, 
      {path:"/details2/:id" , element:<Details2/>}, 
      {path:"/cart" , element:<Cart/>}, 
      {path:"/register" , element:<Register/>},
      {path:"/login" , element:<Login/>},
      {path: '*', element: <Error/> }
    ]
  }])
  return <Context>
    <RouterProvider router = {router}/>
  </Context>
}
