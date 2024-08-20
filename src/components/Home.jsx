import React, { useState } from 'react';
import home from "../images/home.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCloud, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Search from "./Search"
const Home = () => {
  const [selectedExtension, setSelectedExtension] = useState('.eth');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectExtension = (extension) => {
    setSelectedExtension(extension);
    setIsDropdownOpen(false);
  };
 

  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1240px]  md:ml-8 m-auto px-4'>
        <div className='flex flex-col justify-center md:items-start w-full py-8'>
          <p className="font-semibold text-[#4A6D7C]">- HahuCloud</p>
          <p className='md:text-4xl font-bold text-[#1E3888] text-2xl'>Ethiopia's <span className="text-[#59FFA0]">Premium</span>
            <br />Web Hosting Provider.</p>
          <p className='py-3 md:mb-3'>We are using top servers for providing web hosting
            services in Ethiopia.
            Different hosting plans are
            available depending on the needs and requirements
            of yours.</p>
          <div className='flex w-full md:w-[600px] ring-1 rounded-3xl ring-slate-300 shadow-sm'>
            <FontAwesomeIcon className='regular mt-5 text-[#1E3888] ml-3' icon={faCloud} />
            <input className="w-full text-sm placeholder:font-semibold placeholder-[#1E3888] pl-3" type="text" placeholder="Search for your Domain Name here" />
            <p className='m-auto font-bold'>{selectedExtension}</p>
            <FontAwesomeIcon className='m-auto p-4 text-[#1E3888]' icon={faCaretDown} onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className='absolute bg-white shadow-lg rounded-md mt-14 md:ml-96 ml-40 w-[100px] z-10'>
                <div className='px-4 py-1 hover:bg-gray-100 cursor-pointer' onClick={() => selectExtension('.et')}>
                  .et
                </div>
                <div className='px-4 py-1 hover:bg-gray-100 cursor-pointer' onClick={() => selectExtension('.com')}>
                  .com
                </div>
                <div className='px-4 py-1 hover:bg-gray-100 cursor-pointer' onClick={() => selectExtension('.net')}>
                  .net
                </div>
                <div className='px-4 py-1 hover:bg-gray-100 cursor-pointer' onClick={() => selectExtension('.gov')}>
                  .gov
                </div>
              </div>
            )}
            <div className='bg-[#59FFA0] rounded-3xl m-2 py-2 flex px-4'>
              <FontAwesomeIcon className='p-1 text-[#1E3888]' icon={faMagnifyingGlass} />
             
    <Link to="/Search">
  <button className='className="text-sm font-bold text-[#1E3888] pl-2 md:block hidden"'>Search</button>
</Link>
  

            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={home} alt="Picture" className='h-60 md:h-64 md:mt-0 mt-12 ' />
        </div>
      </div>
    </div>
  );
};

export default Home;