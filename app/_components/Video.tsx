import React from 'react';
import { LiaCoinsSolid } from "react-icons/lia";


function Video() {
  return (
    <div className="relative ">
      {/* Video Background */}
      <video
        className="w-full h-[550px] object-cover"
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
          <LiaCoinsSolid className='mb-10 w-24 px-3 rounded-full bg-orange-500 h-28 ' />
        <h1 className="text-6xl font-bold mb-6 w-1/2 font-sans">Trusted & professional advisor for your business</h1>
        <a
          href="#"
          className="bg-transparent mt-6 border text-white px-10 py-3 rounded-full hover:border-0"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Video;
