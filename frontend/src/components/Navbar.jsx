import { useState,useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import './../style/navbar.css'

export default function Navbar(){
    
    return(
        <div >
        <nav id="navbar">

          <div className="navChild" id="logo">
              logo
          </div>

          <div className="navChild" id="linkContainer">
            
              <Link to="/home" className="lin">Home</Link> | 
            
              <Link to="/about" className="lin">About</Link> |
            
              <Link to="/menu" className="lin">Menu</Link> | 
            
              <Link to="/booking" className="lin" id="bookings">Booking</Link>
            
          </div>
          
        </nav>
        <Outlet />
      </div>
    )
}
/**
 * 
 * 
 
 * /About",element:<About/>},
      {path:"/Menu",element:<Menu/>},
      {path:"/Booking
 */