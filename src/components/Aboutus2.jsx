import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Aboutus2 = () => {
  return (
    <div className="w-full bg-white md:pl-8 pl-0">
      <div className="max-w-[1240px] mx-auto pt-24 md:pt-28 px-6 md:px-0 flex flex-col justify-between md:flex-row">
        <div className="md:w-1/2 md:pr-10 mb-12 md:mb-0">
          <p className="text-2xl md:text-4xl font-bold pb-4">About us</p>
          <p className="text-[#58585A] text-sm md:mb-3">
            <span className="font-bold">HahuClouds</span> ipsum dolor sit amet consectetur.
            Porta mattis mollis metus volutpat sed elementum netus. Auctor aliquet
            nisl porttitor sed faucibus mauris. Turpis facilisis mauris sit sit.
            Porttitor sapien nibh eu urna magna tincidunt donec sit posuere. Eget
            diam nulla faucibus ultrices ac arcu sed. Diam lacus orci amet vitae
            lectus auctor maecenas. Et sapien vel nec lorem orci tellus egestas
            phasellus. Nunc tristique pretium ut auctor. Amet nullam at integer
            magna nulla dictumst purus habitant imperdiet. Facilisis sit auctor
            risus blandit ipsum et id. Arcu pretium.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-40 pl-0">
          <p className="text-2xl md:text-4xl font-bold pb-4">Contacts</p>
          <div className="flex text-[#58585A] text-sm mb-6">
            <div className="pt-1 mr-4">
              <CiLocationOn size={32} />
            </div>
            <div>
              <p className="font-semibold text-2xl">Address</p>
              <p className="pt-2">Alemnesh Plaza, 9th Floor</p>
              <p className="pt-1 pb-2">Bole, Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex text-[#58585A] text-sm mb-6">
            <div className="pt-1 mr-4">
              <PiPhoneLight size={32} />
            </div>
            <div>
              <p className="font-semibold text-2xl">Phone number</p>
              <p className="pt-2">+251 (933) 753 333</p>
              <p className="pt-1 pb-2">+251 (118) 549 922</p>
            </div>
          </div>
          <div className="flex text-[#58585A] text-sm">
            <div className="pt-1 mr-4">
              <CiMail size={32} />
            </div>
            <div>
              <p className="font-semibold text-2xl">Email address</p>
              <p className="pt-2">hello@hahucloud.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus2;