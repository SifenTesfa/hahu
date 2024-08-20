import React, { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { FaUnlock } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const iconComponents = [
    { icon: <BsStars size={48} />, text: 'Simplicity' },
    { icon: <FaUnlock size={48} />, text: 'Safety' },
    { icon: <FaChartLine size={48} />, text: 'Performance' },
  ];

  return (
    <div className='w-full bg-white flex flex-col justify-between py-24 md:py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1240px] m-auto gap-8'>
        <div className='flex flex-col pl-4 md:pl-8 justify-center md:items-start w-full md:w-[460px] px-2'>
          <p className="font-semibold text-[#4A6D7C]">- Services</p>
          <p className='md:text-4xl pb-8 font-bold text-[#1E3888] text-2xl item-center'>A <span className="text-[#59FFA0]">premier web hosting</span><br />service for reliable, secure, and fast hosting solutions.</p>
          <button className='text-sm font-bold text-[#1E3888] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place order</button>
        </div>
        <div className='pl-4 md:pl-12  pr-4 md:pr-16'>
          <div className='flex flex-col md:flex-row justify-between  items-center p-8'>
            {iconComponents.map((item, index) => (
              <div
                key={index}
                className={`p-12 md:p-0  text-[#1E3888] text-center ${
                  index === currentIndex ? 'block' : 'hidden'
                } ${
                  'md:block'
                }`}
              >
                {item.icon}
                <p className='font-semibold text-black'>{item.text}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center mb-24'>
            <div className='block md:hidden'>
              <IoArrowBackCircleOutline size={42} onClick={handlePrevClick} className='absolute left-4' />
              <IoArrowForwardCircleOutline size={42}
                onClick={handleNextClick}
                className='absolute right-4'
              />
            </div>
            <div className='hidden md:flex justify-between w-full'>
              
            </div>
          </div>
          <p className=' text-[#4A6D7C]'>
            HahuCloud, the leading provider of web hosting services, committed to providing
            our customers with reliable, secure, and affordable hosting solutions. Our team
            of experienced professionals is dedicated to ensuring that your website is up
            and running 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;