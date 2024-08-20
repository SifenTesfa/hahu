import React, { useState } from 'react';
import Logo from "../images/logo.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-8 bg-white w-full'>
      <a href='#'><img src={Logo} alt="Logo" className='w-32' /></a>
      <ul className='hidden md:flex text-[#1a2b47]'> 
        <li className='p-4 text-sm font-bold'><a href='#'>Web-Hosting</a></li> 
        <li className='p-4 text-sm font-bold'><a href='#'>Pricing</a></li> 
        <li className='p-4 text-sm font-bold'><a href='#'>About Us</a></li> 
      </ul> 
     
      <div className="md:hidden">
        <button className='text-sm font-bold text-[#020887]' onClick={toggleMenu}>
          {isOpen ? <IoIosArrowBack size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </button>
        {isOpen && (
          <div className="absolute top-24 right-0 bg-white shadow-lg rounded-lg w-64 z-10">
            <ul className="px-4 py-2 text-[#1a2b47]">
              <li className='p-4 text-sm font-bold'><a href='#'>Web-Hosting</a></li>
              <li className='p-4 text-sm font-bold'><a href='#'>Pricing</a></li>
              <li className='p-4 text-sm font-bold'><a href='#'>About Us</a></li>
            </ul>
          </div>
        )}
      </div>
      <button className='text-sm font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7 hidden md:block'>Login</button>
    </div>
  );
};

export default Navbar;