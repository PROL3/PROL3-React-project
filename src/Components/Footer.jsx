
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0  ">
          <a href='./contactus' className="nav-footer text-lg font-bold mb-2 "><p>Contact Us</p></a>
          <a href='./menu' className="nav-footer text-lg font-bold mb-2"><p>Menu</p></a>
          <a href='./sales' className="nav-footer text-lg font-bold mb-2"><p>Sales</p></a>
          <a href='./storebranches' className="nav-footer text-lg font-bold mb-2"><p>Store branches</p></a>
          <p>Email: <a href="mailto:pizzabar@gmail.com" className="text-red-400 hover:text-blue-400">pizzabar@gmail.com</a>
          </p>
          <p>
          <p>Phone: <a href="tel:+03677655675" className="text-blue-400 hover:text-red-400">03677655675</a>
          </p>
         
         </p>  
        </div>
        <div className="flex space-x-4">
          <h1 className='font-bold underline text-teal-600'>Follow Us On: </h1>
          <a href="https://www.facebook.com" className="  text-gray-300 hover:text-blue-500">
            <FaFacebook  size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-gray-300  hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-300 hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/03677655675" className="text-gray-300 hover:text-green-600" target="_blank"  >
            <FaWhatsapp size={24} />
          </a>
      </div>
      <div className="text-center">
        <p>Privacy Policy | Terms of Service</p>
        <p>&copy; {new Date().getFullYear()} Pizza Bar. All rights reserved.</p>
      </div>
      </div>
    
    </footer>
  );
};

export default Footer;
