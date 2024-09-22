import React from 'react';
import { GrMoney } from "react-icons/gr";


function Video() {
  return (
    <div className="relative ">
      {/* Video Background */}
      <video
        className="w-full h-[600px] object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/700_F_366745262_rTpA9SBOieQwYHsJQtio0CRraXUQpL8W_ST.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay with opacity */}
      <div className="absolute inset-0 bg-zinc-700 opacity-75"></div>

      {/* Text on Video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <GrMoney className='mb-20 w-32 bg-orange-500 h-24 ' />
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-lg mb-6">Your partner in digital transformation</p>
        <a
          href="#"
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Video;
