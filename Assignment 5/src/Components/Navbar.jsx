import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md w-screen overflow-hidden">
      <div className="flex justify-between items-center text-white p-4 w-screen gap-3">
        <div>
          <img
            src="https://callmatic.ai/wp-content/uploads/2024/12/Callmaticrevampedlogo.webp"
            alt="Enterpret"
            className="ml-2 h-8 w-[23vh] object-contain pr-1"
          />
        </div>
        <ul className="max-lg:hidden flex space-x-6">
          <li className="flex items-center gap-2">
            Product
            <FaAngleDown />
          </li>
          <li className="flex items-center gap-2">
            Consumers
            <FaAngleDown />
          </li>
          <li className="flex items-center gap-2">
            Solutions
            <FaAngleDown />
          </li>
          <li className="flex items-center gap-2">
            Resources
            <FaAngleDown />
          </li>
          <li className="flex items-center gap-2">Pricing</li>
        </ul>
        <div className="pl-3 flex space-x-4 items-center">
          <a href="#" className="w-[8vh]">Sign In</a>
          {/* <button className="flex items-center w-[26vh] gap-2 bg-indigo-600 text-white px-4 py-2 rounded-[85px] hover:scale-105 duration-300 ">
            Book a Demo <FaAngleRight />
          </button> */}
          <a href="#" className="mr-2 relative px-6 py-3 bg-indigo-600 text-white font-bold rounded-[85px] overflow-hidden group cursor-pointer hover:scale-105 duration-300">
            <span className="absolute inset-0 bg-white opacity-30  rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500 "></span>
            <span className="flex items-center justify-between gap-2 w-[20vh]">
              Book a Demo
              <FaAngleRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
