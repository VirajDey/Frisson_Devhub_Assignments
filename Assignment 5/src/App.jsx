import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import TestimonialCard from "./Components/TestimonialCard.jsx";
import HeroSection from "./Components/HeroSection.jsx";

function App() {
  const data = [
    {
      Name: "Guillermo Rauch",
      Role: "Founder & CEO of Vercel",
      Quote:
        '"Openlayer is building the critical infrastructure for the safe deployment of AI at planetary scale."',
      Image: "../src/assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      svg: "http://www.w3.org/2000/svg",
    },
    {
      Name: "Alexis Ohanian",
      Role: "Founder of Reddit",
      Quote:
        '"Openlayer is the future of AI deployment, making it safer and more efficient for everyone."',
      Image: "../src/assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      svg: "http://www.w3.org/2000/svg",
    },
  ];
  return (
    <div className="bg-[#08011b] min-h-screen">
      <div className="flex">
        <Navbar />
      </div>
      {/* <div className="pt-[80px]">
        <HeroSection />
      </div> */}
        {/* <div className="pl-4 pt-[80px] flex items-center gap-3">
          {data.map((item, idx) => (
            <TestimonialCard
              key={idx}
              Name={item.Name}
              Role={item.Role}
              Quote={item.Quote}
              Image={item.Image}
              svg={item.svg}
            />
          ))}
        </div> */}
    </div>
  );
}

export default App;
