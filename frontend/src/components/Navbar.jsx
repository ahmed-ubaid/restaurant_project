import { useState,useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import './../style/navbar.css'

export default function Navbar(){
    
    return(
        <div>
        <nav>
          <Link to="/home">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/menu">Menu</Link> | 
          <Link to="/booking">Booking</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    )
}
/**
 * /About",element:<About/>},
      {path:"/Menu",element:<Menu/>},
      {path:"/Booking
 */