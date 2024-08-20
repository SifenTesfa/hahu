import React, { useState } from 'react';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiSpeedypage } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { TbWheel } from "react-icons/tb";
import { BiDownArrowCircle } from "react-icons/bi";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const iconComponents = [
    
  ];

  return (
    <div className="p-8 md:px-8 md:py-32">
      <p className="pb-6 text-4xl font-bold text-[#1E3888]">
        Why Choose <span className="text-[#59FFA0]">Us</span>
      </p>
      <p className="mb-8">
        Benefit from maximum availability, the best performance, and professional customer service. Allow us the opportunity to exceed your expectations.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center p-8">
        {iconComponents.map((item, index) => (
          <div
            key={index}
            className={`p-12 md:p-0 text-[#1E3888] text-center transition-all duration-500 ${
              index === currentIndex ? 'block' : 'hidden md:block'
            }`}
          >
            {item.icon}
            <p className="font-semibold text-black">{item.text}</p>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 md:hidden">
          <IoArrowBackCircleOutline size={42} onClick={handlePrevClick} className="cursor-pointer" />
          <IoArrowForwardCircleOutline size={42} onClick={handleNextClick} className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <AiOutlineDollarCircle size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">Amazing Speed.</p>
            <p>We provide you Free CDN Powered by Cloudflare which can help you to speed up your website like never before.</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <SiSpeedypage size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">Amazing Speed.</p>
            <p>We provide you Free CDN Powered by Cloudflare which can help you to speed up your website like never before.</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <MdOutlineSecurity size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">Protection and Security</p>
            <p>With our amazing security features like Multi Factor Authentication, auto-enabled sFTP free secure hosting with Let's Encrypt.</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <TbWorld size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">Website Builder</p>
            <p>We have the best Website Builder tool, Just Drag & Drop to build your own website with no coding skill.</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <BiDownArrowCircle size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">200+ Free Apps</p>
            <p>Install Free Apps like wordpress, joomla and others from HahuCloud cPanel with few clicks for free</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-12">
            <TbWheel size={48} />
            <div className="absolute bottom-0 right-0 z-[-1] h-6 w-6 rounded-full bg-[#59FFA0]"></div>
          </div>
          <div>
            <p className="font-bold pb-4">Great Support</p>
            <p>
              We are here anytime you need help 24/7/365 to assist you with any aspect of your hosting experience.
              <span className="font-bold"> (Live Chat 9:15 AM - 5:00 PM)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;