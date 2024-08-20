import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCloud, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TbWorld } from "react-icons/tb";
const Search = () => {
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
    <div className='mt-64 mb-24'>
        <div className="h-full w-full flex justify-center items-center">
      <div className="absolute text-center">
        <p className="text-[#1E3888] text-4xl font-bold">
          Choose Your <span className="text-[#59FFA0]">Domain</span> Name First.
        </p>
        <p className="text-[#58585A] pt-8">
          When Building a website start here. Our hosting service delivers power full,
          proven platform that's perfect for hosting your website
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center mt-24 px-4 sm:px-0">
      <div className="flex w-full sm:w-[600px] ring-1 rounded-3xl ring-slate-300 shadow-sm">
        <FontAwesomeIcon className="regular mt-5 text-[#1E3888] ml-3" icon={faCloud} />
        <input
          className="w-full text-sm placeholder:font-semibold placeholder-[#1E3888] pl-3"
          type="text"
          placeholder="Search for your Domain Name here"
        />
        <p className="m-auto font-bold">{selectedExtension}</p>
        <FontAwesomeIcon
          className="m-auto p-4 text-[#1E3888] cursor-pointer"
          icon={faCaretDown}
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded-md mt-14 sm:ml-96 w-[100px] z-10">
            <div
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectExtension('.eth')}
            >
              .eth
            </div>
            <div
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectExtension('.com')}
            >
              .com
            </div>
            <div
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectExtension('.net')}
            >
              .net
            </div>
            <div
              className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectExtension('.gov')}
            >
              .gov
            </div>
          </div>
        )}
        <div className="bg-[#59FFA0] rounded-3xl m-2 py-2 flex px-4">
          <FontAwesomeIcon className="p-1 text-[#1E3888]" icon={faMagnifyingGlass} />
          <button className="text-sm font-bold text-[#1E3888] pl-2">Search</button>
        </div>
      </div>
    </div> 
    <div className="pt-24 h-full w-full">
      <p className="pt-8 font-bold flex justify-center items-center">
        Sorry, <span className="text-[#59FFA0]">DESIGNRUST.COM</span> is not available!
      </p>
      <p className="flex justify-center items-center ml-4 md:ml-0">
        Try searching for different name or check the suggested ones
      </p>
      <div className="flex flex-wrap justify-center items-center mt-24">
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <div className="h-full ml-0 md:mr-10">
            <div className="relative p-5 h-28 w-72 bg-white shadow-lg rounded-3xl">
              <div className="absolute">
                <div className="absolute w-12 z-10">
                  <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0"></div>
                  <TbWorld size={48} className="text-[#1E3888]" />
                </div>
                <div className="flex items-center ml-16">
                  <div>
                    <h3 className="text-sm">.eth</h3>
                    <p className="mb-2">DESIGNRUST.ET</p>
                  </div>
                </div>
              </div>
              <button className="text-sm mt-16 ml-16 absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7">
                Place order
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <div className="h-full ml-0 md:mr-10">
            <div className="relative p-5 h-28 w-72 bg-white shadow-lg rounded-3xl">
              <div className="absolute">
                <div className="absolute w-12 z-10">
                  <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0"></div>
                  <TbWorld size={48} className="text-[#1E3888]" />
                </div>
                <div className="flex items-center ml-16">
                  <div>
                    <h3 className="text-sm">.eth</h3>
                    <p className="mb-2">DESIGNRUST.ET</p>
                  </div>
                </div>
              </div>
              <button className="text-sm mt-16 ml-16 absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7">
                Place order
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="h-full ml-0 md:mr-10">
            <div className="relative p-5 h-28 w-72 bg-white shadow-lg rounded-3xl">
              <div className="absolute">
                <div className="absolute w-12 z-10">
                  <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0"></div>
                  <TbWorld size={48} className="text-[#1E3888]" />
                </div>
                <div className="flex items-center ml-16">
                  <div>
                    <h3 className="text-sm">.eth</h3>
                    <p className="mb-2">DESIGNRUST.ET</p>
                  </div>
                </div>
              </div>
              <button className="text-sm mt-16 ml-16 absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> </div>
  )
}

export default Search