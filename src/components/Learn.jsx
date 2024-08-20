import React from 'react';
import { HiOutlineServer } from 'react-icons/hi';
import img1 from '../images/img1.png';

const Learn = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-32 px-4 md:px-8">
      <div className="md:w-2/3">
        <p className="font-semibold text-[#4A6D7C]">- Learn more</p>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1E3888] mb-6">99.9% Uptime Guarantee.</h2>
        <p className="font-bold mb-4">DON'T YOU HATE DOWNTIME? WHO DOESN'T? We Make Sure That Your Website is Always Up and Running.</p>
        <p className="mb-8">Our server status page is updated in real-time, providing immediate access to downtime or alerts from one central location.</p>
        <p className="text-[#1E3888] font-semibold mb-8">Transparent Uptime Reports</p>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:mr-16 mb-0 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative w-12 mr-6">
                <HiOutlineServer size={48} />
                <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0 z-[-1]"></div>
              </div>
              <p className="text-[#4A6D7C]">HahuCloud Server 1 - UK</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="relative w-12 mr-6">
                <HiOutlineServer size={48} />
                <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0 z-[-1]"></div>
              </div>
              <p className="text-[#4A6D7C]">HahuCloud Server 3 - UK</p>
            </div>
          </div>
          <div className="flex items-center mb-8 md:mb-0">
            <div className="relative w-12 mr-6">
              <HiOutlineServer size={48} />
              <div className="bg-[#59FFA0] rounded-full w-6 h-6 absolute bottom-0 right-0 z-[-1]"></div>
            </div>
            <p className="text-[#4A6D7C]">HahuCloud Server 2 - UK</p>
          </div>
        </div>
        <button className="text-sm font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7">
          Check Server Status
        </button>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0">
        <img src={img1} alt="img1" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Learn;