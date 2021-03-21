import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    return (  <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to="/about">About <span className="sr-only">(current)</span></NavLink>
      </li>
      
      <li className="nav-item ">
        <NavLink className="nav-link" to="/Menu">Menu <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to="/cart">Shopping Cart <span className="sr-only">(current)</span></NavLink>
      </li>
      

      <li className="nav-item ">
        <NavLink className="nav-link" to="/admin">Admin <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to="/login">Login <span className="sr-only">(current)</span></NavLink>
      </li>

    </ul>
  </div>
  <NavLink to="/cart">
        <span className="badge badge-primary">
          <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
          {props.productsCount}
        </span>
      </NavLink>
       </nav>
          </> );
}
 
export default NavBar;


