import React from 'react';

function Hero() {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img 
          src="/images/representation-collective-mind-process-concept-digital-art-style.jpg" 
          className="w-full h-screen object-cover " 
          alt="Hero Image" 
        />
        
        {/* Navigation arrows */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        
        {/* Centered text over image */}
        <div className="absolute inset-0 flex items-center justify- text-center text-white w-96 px-32">
          <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
          <p className="text-2xl mb-8">We can make the difference</p>
            <h2 className="text-5xl md:text-8xl font-bold font-sans mb-10">Consulting Agency for Every Business</h2>
            <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
          </div>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img 
          src="/images/futurism-perspective-digital-nomads-lifestyle.jpg" 
          className="w-full h-screen object-cover" 
          alt="Hero Image" 
        />
        
        {/* Navigation arrows */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>

        {/* Centered text over image */}
        <div className="absolute inset-0 flex items-center justify- text-center text-white w-96 px-32">
          <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
            <p className="text-2xl mb-4">We can make the difference</p>
            <h2 className="text-5xl md:text-8xl font-sans font-bold mb-8">Consulting Agency for Every Business</h2>
            <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
          </div>
        </div>
      </div>


      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img 
          src="/images/futuristic-christmas-celebration-concept.jpg" 
          className="w-full h-screen object-cover " 
          alt="Hero Image" 
        />
        
        {/* Navigation arrows */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        
        {/* Centered text over image */}
        <div className="absolute inset-0 flex items-center justify- text-center text-white w-96 px-32">
          <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
          <p className="text-2xl mb-8">We can make the difference</p>
            <h2 className="text-5xl md:text-8xl font-bold font-sans mb-10">Consulting Agency for Every Business</h2>
            <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
          </div>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img 
          src="/images/mll.jpeg" 
          className="w-full h-screen object-cover " 
          alt="Hero Image" 
        />
        
        {/* Navigation arrows */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        
        {/* Centered text over image */}
        <div className="absolute inset-0 flex items-center justify- text-center text-white w-96 px-32">
          <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
          <p className="text-2xl mb-8">We can make the difference</p>
            <h2 className="text-5xl md:text-8xl font-bold font-sans mb-10">Consulting Agency for Every Business</h2>
            <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
          </div>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <img 
          src="/images/project-management2.jpeg" 
          className="w-full h-screen object-cover " 
          alt="Hero Image" 
        />
        
        {/* Navigation arrows */}
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        
        {/* Centered text over image */}
        <div className="absolute inset-0 flex items-center justify- text-center text-white w-96 px-32">
          <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
          <p className="text-2xl mb-8">We can make the difference</p>
            <h2 className="text-5xl md:text-8xl font-bold font-sans mb-10">Consulting Agency for Every Business</h2>
            <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
