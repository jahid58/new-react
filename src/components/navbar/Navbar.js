import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className ='nav_bar'>
           <Link to='/Home'>Home</Link> 
          
           <Link to='/OrderReview'>Order Review</Link> 
           <Link to='/SelectedProduct'>Selected Product</Link> 
          
        </div>
    );
};

export default Navbar;