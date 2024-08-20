import React, { useState } from 'react';
import { RiFlipHorizontal2Line } from "react-icons/ri";

const Prices = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };
  return (
    <div class="px-4 md:px-8">
    <p class="font-semibold text-[#4A6D7C]">- Price Plans</p>
    <div class="flex flex-col md:flex-row">
      <div>
        <p class="pb-6 text-2xl md:text-4xl font-bold text-[#1E3888]"><span class="text-[#59FFA0]">Fastest</span> Web Hosting in Ethiopia.</p>
      </div>
      <div class="flex items-center h-6 mt-4 md:mt-0">
        <p class="font-bold p-4 pl-0 md:pl-24">Monthly</p>
        <div class="p-4">
          <div class="flex w-16 ring-1 ml-8 rounded-3xl ring-black">
            <div class="bg-[#59FFA0] rounded-3xl py-3 flex px-3"></div>
          </div>
        </div>
        <p class="font-bold p-4 text-[#4A6D7C] pl-8">Yearly</p>
      </div>
    </div>
    <p class="font-bold">Planning to Have Your Website? You're at The Right Place!</p>
    <p>Check Our Affordable Web Hosting Packages and Go with The One That Suits Your Needs</p>
      <div className="flex flex-col pt-16 w-full mb-5 sm:flex-row">
        <div className="w-full sm:w-1/2  md:p-0 p-4">
          <div className=" group h-full ml-0 md:mr-10 [perspective:1000px]">
          <div
              className={`card relative h-full p-5 transition-all duration-300 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              } bg-white shadow-lg rounded-3xl transform hover:scale-105 hover:bg-[#1E3888] hover:text-white`}
            >
              <div className='flex'>
                <p className='font-bold pr-40'>01</p>
                <RiFlipHorizontal2Line
                  size={24}
                  className={`text-white card1 cursor-pointer ${isFlipped ? 'rotate-180' : ''}`}
                  onClick={handleFlip}
                />
              </div>
              <div className="flex items-center -mt-1">
                <h3 className="card1 my-2 text-2xl font-bold text-[#1E3888]">Standard</h3>
              </div>
              <p className="mb-2">Best for Business</p>
              <ul className='text-sm ml-5 list-disc'>
                <li>125 GB NVMe Storag</li>
                <li>2 GB RAM & 2 CPU Cores</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Database and Email accounts</li>
                <li>Host 13 Websites</li>
              </ul>
              <p className='text-[#1E3888] month pt-8'><span className='font-bold card1'>410 birr</span> /month</p>
              <button className='text-sm button ml-10 hidden absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place order</button>
            </div>
          </div>
        </div>
        <div className="w-full mb-10 sm:mb-0 sm:w-1/2 md:p-0 p-4">
          <div className=" group h-full ml-0 mr-0 sm:mr-10">
            
          <div
              className={`card relative h-full p-5 transition-all duration-300 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              } bg-white shadow-lg rounded-3xl transform hover:scale-105 hover:bg-[#1E3888] hover:text-white`}
            >
            <div className='flex'>
                <p className='font-bold pr-40'>02</p>
                <RiFlipHorizontal2Line
                  size={24}
                  className={`text-white card1 cursor-pointer ${isFlipped ? 'rotate-180' : ''}`}
                  onClick={handleFlip}
                />
              </div>
              <div className="flex items-center -mt-1">
                <h3 className="card1 my-2 text-2xl font-bold text-[#1E3888]">Professional</h3>
              </div>
              <p className="mb-2 ">Best For Developers</p>
              <ul className='text-sm ml-5 list-disc'>
                <li>80 GB NVMe Storage</li>
                <li>2 GB RAM & 2 CPU Cores</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Database and Email accounts</li>
                <li>Host 10 Websites</li>
              </ul>
              <p className='text-[#1E3888] month pt-8'><span className='font-bold card1'> 330 birr</span> /month</p>
              <button className='text-sm button ml-10 hidden absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place order</button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:p-0 p-4">
          <div className=" h-full ml-0 md:mr-10">
           
          <div
              className={`card relative h-full p-5 transition-all duration-300 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              } bg-white shadow-lg rounded-3xl transform hover:scale-105 hover:bg-[#1E3888] hover:text-white`}
            >
            <div className='flex'>
                <p className='font-bold pr-40'>03</p>
                <RiFlipHorizontal2Line
                  size={24}
                  className={`text-white card1 cursor-pointer ${isFlipped ? 'rotate-180' : ''}`}
                  onClick={handleFlip}
                />
              </div>
              <div className="flex items-center -mt-1">
                <h3 className="card1 my-2 text-2xl font-bold text-[#1E3888]">Enterprise</h3>
              </div>
              <p className="mb-2 ">Best for Business</p>
              <ul className='text-sm ml-5 list-disc'>
                <li>125 GB NVMe Storag</li>
                <li>2 GB RAM & 2 CPU Cores</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Database and Email accounts</li>
                <li>Host 13 Websites</li>
              </ul>
              <p className='text-[#1E3888] month pt-8'><span className='font-bold card1'> 410 birr</span> /month</p>
              <button className='text-sm button ml-10 hidden absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place order</button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:p-0 p-4">
          <div className=" h-full ml-0 md:mr-10">
            
          <div
              className={`card relative h-full p-5 transition-all duration-300 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              } bg-white shadow-lg rounded-3xl transform hover:scale-105 hover:bg-[#1E3888] hover:text-white`}
            >
            <div className='flex'>
                <p className='font-bold pr-40'>04</p>
                <RiFlipHorizontal2Line
                  size={24}
                  className={`text-white card1 cursor-pointer ${isFlipped ? 'rotate-180' : ''}`}
                  onClick={handleFlip}
                />
              </div>
              <div className="flex items-center -mt-1">
                <h3 className="card1 my-2 text-2xl font-bold text-[#1E3888]">Enterprise PLUS</h3>
              </div>
              <p className="mb-2 ">Best for Large Websites</p>
              <ul className='text-sm ml-5 list-disc'>
                <li>250 GB NVMe Storage</li>
                <li>4 GB RAM & 4 CPU Cores</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Database and Email accounts</li>
                <li>Host 15 Websites</li>
              </ul>
              <p className='text-[#1E3888] month pt-8'><span className='font-bold card1'> 485 birr</span> /month</p>
              <button className='text-sm button ml-10 hidden absolute font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place order</button>
            </div>
          </div>
        </div>
      </div>
      <p className='text-[#1E3888] pt-8 pb-8 font-semibold'>Explore all price plans</p>


     
    </div>
      
  )
}

export default Prices;