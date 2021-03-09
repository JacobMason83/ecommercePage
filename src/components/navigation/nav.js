import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

   return(
    <nav>
    <h1>Ecommerce Page </h1>
    <ul>
      <li className="nav-links"><Link to='/' className='links'>Home</Link></li>
      <li className="nav-links"><Link to='/about-page'className='links'>About</Link></li>
      <li className="nav-links"><Link to='/contact-page' className='links'>Contact</Link></li>
      <li className="nav-links"><Link to='/cart-page' className='links'>Cart</Link></li>
    </ul>
  </nav>
   )
}
export default NavBar