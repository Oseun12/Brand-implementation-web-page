import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="/images/hero.jpeg" className="w-full" alt="Hero Image"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        {/* Text confined to bottom-left */}
        <div className="absolute bottom-5 p-20 left-20 text-left text-white  bg-black bg-opacity-50 w-1/3">
          <h2 className="text-5xl font-bold mb-6">Brand Implementation</h2>
          <p className="mt-2 text-xl leading-loose">
            Brand Implementation is a cutting-edge company specializing in project management, machine learning, and implementation services. Our team of experienced professionals utilizes the latest technological advancements to deliver tailored solutions.
          </p>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src="/images/mll.jpeg" className="w-full" alt="Slide 2"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        {/* Text confined to bottom-left */}
        <div className="absolute bottom-5 p-20 left-20 text-left text-white  bg-black bg-opacity-50 w-1/3">
          <h2 className="text-5xl font-bold mb-6">Brand Implementation</h2>
          <p className="mt-2 text-xl leading-loose">
            From strategic planning to seamless deployment, we are dedicated to helping businesses harness the power of machine learning and project management.
          </p>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src="/images/group.jpeg" className="w-full" alt="Slide 3"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        {/* Text confined to bottom-left */}
        <div className="absolute bottom-5 p-20 left-20 text-left text-white  bg-black bg-opacity-50 w-1/3">
          <h2 className="text-5xl font-bold mb-6">Brand Implementation</h2>
          <p className="mt-2 text-xl leading-loose">
            We ensure successful project execution with expert planning and data-driven decision-making.
          </p>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src="/images/mac8.avif" className="w-full" alt="Slide 4"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        {/* Text confined to bottom-left */}
        <div className="absolute bottom-5 p-20 left-20 text-left text-white  bg-black bg-opacity-50 w-1/3">
          <h2 className="text-5xl font-bold mb-6">Brand Implementation</h2>
          <p className="mt-2 text-xl leading-loose">
            Delivering innovative solutions to streamline operations and enhance business efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
