import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
<header className='bg-gray-700 p-4 fixed top-0 left-0 w-full  z-50'>
      
      <div className="container mx-auto flex justify-between items-center">
       <a href='./'> <h1 className="store-name  font-bold ">Pizza Bar</h1></a>

        <nav className="flex items-center gap-3 ">
          <NavLink to="/" className="nav-link no-underline text-xl font-bold text-gray-300 transition duration-300 hover:text-red-400 "
          >Home</NavLink>
          <NavLink to="/menu" className="nav-link no-underline text-xl font-bold text-gray-200 transition duration-300 hover:text-red-400 ">Menu</NavLink>
          <NavLink to="/sales" className="nav-link no-underline text-xl font-bold text-gray-200 transition duration-300 hover:text-red-400 ">Sales</NavLink>
          <NavLink to="/storebranches" className="nav-link no-underline text-xl font-bold text-gray-200 transition duration-300 hover:text-red-400 ">Store Branches</NavLink>
          <NavLink to="/contactus" className="nav-link no-underline text-xl font-bold text-gray-200 transition duration-300 hover:text-red-400 ">Contact Us</NavLink>
        </nav>

        
          <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
       
      </div>
    </header>
  );
};

export default Header;
