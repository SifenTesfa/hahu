import React from 'react'
import Logo from "../images/logo.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="px-4 pt-16 pb-6 md:px-28 md:pt-24 md:pb-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:pt-12">
            <a href="#">
              <img src={Logo} alt="Logo" className="w-28 md:w-36" />
            </a>
            <div className="flex mt-4">
              <FaFacebook size={18} className="m-1" style={{ color: '#1877F2' }} />
              <FaTelegram size={18} className="m-1" style={{ color: '#0088CC' }} />
              <FaInstagram size={18} className="m-1" style={{ color: '#E1306C' }} />
              <FaTwitterSquare size={18} className="m-1" style={{ color: '#1DA1F2' }} />
              <FaYoutube size={18} className="m-1" style={{ color: '#B2071D' }} />
              <FaLinkedin size={18} className="m-1" style={{ color: '#0072B1' }} />
            </div>
          </div>
          <div className="text-sm mt-8 md:mt-0 md:pl-40">
            <p className="text-lg font-semibold my-2 text-[#1E3888]">Policy</p>
            <ul>
              <li className="my-1">Privacy Policy</li>
              <li className="my-1">Cookie Policy</li>
              <li className="my-1">Refund Policy</li>
            </ul>
          </div>
          <div className="text-sm mt-8 md:mt-0 md:pl-28">
            <p className="text-lg font-semibold my-2 text-[#1E3888]">Services</p>
            <ul>
              <li className="my-1">Ethiopian Web Hosting</li>
              <li className="my-1">General Purpose Servers</li>
              <li className="my-1">Ethiopian Web Design</li>
              <li className="my-1">SSL Certificates</li>
              <li className="my-1">Domain Registrations</li>
              <li className="my-1">Domain Transfer</li>
              <li className="my-1">VPS</li>
            </ul>
          </div>
          <div className="text-sm mt-8 md:mt-0 md:pl-28">
            <p className="text-lg font-semibold my-2 text-[#1E3888]">Otherlinks</p>
            <ul>
              <li className="my-1">SMS Gateway</li>
              <li className="my-1">WordPress</li>
              <li className="my-1">Server Status</li>
              <li className="my-1">Announcements</li>
              <li className="my-1">Knowledgebase</li>
              <li className="my-1">Video Tutorials</li>
              <li className="my-1">.et Domain Name</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-sm my-4 mx-4 md:mx-28 md:items-center">
        <p className="md:pr-28 md:ml-8">2017/2023 HahuCloud TM Ethiopia's Web Hosting.</p>
        <div className="flex flex-col md:flex-row md:justify-end md:flex-1 mt-4 md:mt-0">
          <p className="text-[#4A6D7C] pr-4">About Us</p>
          <p className="text-[#4A6D7C] pr-4">Contact Us</p>
          <p className="text-[#4A6D7C] pr-4">FAQs</p>
          <p className="text-[#4A6D7C] pr-4">Terms & Conditions</p>
          <p className="text-[#4A6D7C] pr-4">VAT</p>
          <p className="text-[#4A6D7C] pr-4">Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer