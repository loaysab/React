import React from 'react';  
import{Link}from "react-router-dom";
import "../css/Header.css";
import 'font-awesome/css/font-awesome.css';


const NavBar = () => {

 
    return (
      <header>
      <nav>
          <ul >
            
              <li><Link to="/">Product</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          <div className="nav-cart">
              <ul>
              <span>{}</span>
             <li> <Link to="/cart">
                  {/* <img src={CartIcon} alt="" width="30"/> */}
                  <i className="cartIcon"   style={{fontSize:"36px" }} class="fa fa-shopping-cart" ></i>
              </Link></li></ul>
          </div>
      </nav>
  </header>
  );
}

export default NavBar;