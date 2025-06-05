import React from "react";

const TestimonialCard = ({Name, Role, Quote, Image, svg}) => {
  return (
    <div className="h-[304px] w-[70vh] flex flex-col relative p-6 rounded-[30px]  text-white shadow-lg border border-gray-800 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.24) 100%),linear-gradient(0deg, rgba(144, 116, 240, 0.1) 0%, rgba(144, 116, 240, 0.1) 100%),rgba(255, 255, 255, 0.05)`
      }}
    >
      {/* Quote */}
      <p className="text-lg leading-relaxed font-medium text-gray-100 mb-6">
        {Quote}
      </p>

      {/* Name & Role */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="text-sm font-semibold text-white">{Name}</p>
          <p className="text-sm text-gray-400">{Role}</p>
        </div>

        {/* Avatar */}
        <img
          src={Image}
          alt={Name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
      </div>

      {/* Glowing Triangle Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <svg
          xmlns={svg}
          viewBox="0 0 213 184"
          width="210"
          height="210"
          className="opacity-55 blur-md"
        >
          <path d="M106.334 0L212.334 184H0.333984L106.334 0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;
