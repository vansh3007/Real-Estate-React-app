import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/LOGO.png";
import Frame from "../../assets/Frame.png";
import Person from "../../assets/person.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div id="navBar">
      <div id="logo">
        <img src={Logo} alt="logo"></img>
      </div>

      <div id="menu">
        <NavLink className="navlink" to="/">
          <p class="menuItems">HOME</p>
        </NavLink>
        <p class="menuItems">PROPERTIES</p>
        <p class="menuItems">MY DESBOARD/ACTIVITY</p>
        <p class="menuItems">LIST YOUR PROPERTY</p>
        <p class="menuItems">CONTACT US</p>
        <p class="menuItems">MORE</p>
        <p class="menuItems">|</p>
        <p class="menuItems">
          <img src={Frame} alt="logo"></img>
        </p>
        <p class="menuItems">
          <img src={Person} alt="logo"></img>
        </p>
      </div>
    </div>
  );
}

export default Navbar
