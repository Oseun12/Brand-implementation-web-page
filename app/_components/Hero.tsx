import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <div className='w-3/4'>
          <img 
            src="/images/machine learning3.jpeg" 
            className="w-full h-[850px] object-cover " 
            alt="Hero Image" 
          />
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center   text-white px-32">
            <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans mb-10 w-4/6">is your <span className='text-orange-500'>brand</span>  stragety being implemented without <span className='text-orange-500'>data</span>  ??s</h2>
              <p className='w-4/6 font-semibold'>We are a data-driven company that focuses on providing insights and solutions based on data analysis and research. Our approach is to use data to drive decision-making and strategy development for our clients.</p>
              <a href="#get-started" className=" mt-10 btn bg-transparent w-44 text-white border-orange-500 border-2 ">Get Started</a>
            </div>
          </div>
        </div>

        <div className='w-1/4 h-[850px] bg-slate-800 lg:p-16'>
          <ul className=' mt-20 space-y-12'>  {/* Add space between list items */}
            
            {/* First list item */}
            <li className='flex items-start bg-slate-950 p-4 rounded-3xl'>
              <div className='mr-4'>
                <Image
                  src='/images/contactinfo-removebg-preview.png'
                  width={250}  
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Information Technology Implementation</h2>
                <h2 className='mt-4 text-sm'>We ensure seamless IT deployment of digital tools that enhance operations, driving growth and efficiency.</h2>
              </div>
            </li>

            {/* Second list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/puzzle2-removebg-preview.png'
                  width={250}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Machine Learning & Artificial Intelligence</h2>
                <h2 className='mt-4 text-sm'>Our AI tools help you get feedback, analyze data, predict trends, helping you to make well-informed decisions.</h2>
              </div>
            </li>

            {/* Third list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/projectpuzzle-removebg-preview.png'
                  width={200}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Project Management Maintenance Support</h2>
                <h2 className='mt-4 text-sm'>We handle and support your digital projects, allowing you to focus on business growth as we tackle unexpected challenges.</h2>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <div className='w-3/4'>
          <img 
            src="/images/group.jpeg" 
            className="w-full h-[850px] object-cover " 
            alt="Hero Image" 
          />
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center text-white px-32">
            <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans mb-10 w-4/6">is your <span className='text-orange-500'>brand</span> stragety being implemented without <span className='text-orange-500'>Support</span>  ??</h2>
              <p className='font-semibold w-4/6'>We are a data-driven company that focuses on providing insights and solutions based on data analysis and research. Our approach is to use data to drive decision-making and strategy development for our clients.</p>
              <a href="#get-started" className=" mt-10 btn bg-transparent w-44 text-white border-orange-500 border-2 ">Get Started</a>
            </div>
          </div>
        </div>

        <div className='w-1/4 h-[850px] bg-slate-800 p- lg:p-16'>
          <ul className=' mt-20 space-y-12'>  {/* Add space between list items */}
            
            {/* First list item */}
            <li className='flex items-start  rounded-3xl'>
              <div className='mr-4'>
                <Image
                  src='/images/contactinfo-removebg-preview.png'
                  width={250}  
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Information Technology Implementation</h2>
                <h2 className='mt-4 text-sm'>We ensure seamless IT deployment of digital tools that enhance operations, driving growth and efficiency.</h2>
              </div>
            </li>

            {/* Second list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/puzzle2-removebg-preview.png'
                  width={250}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Machine Learning & Artificial Intelligence</h2>
                <h2 className='mt-4 text-sm'>Our AI tools help you get feedback, analyze data, predict trends, helping you to make well-informed decisions.</h2>
              </div>
            </li>

            {/* Third list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/projectpuzzle-removebg-preview.png'
                  width={200}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white bg-slate-950 p-4 rounded-3xl'>
                <h2 className='mb-2 font-bold w-48'>Project Management Maintenance Support</h2>
                <h2 className='mt-4 text-sm'>We handle and support your digital projects, allowing you to focus on business growth as we tackle unexpected challenges.</h2>
              </div>
            </li>
          </ul>
        </div>

      </div>


      <div id="slide1" className="carousel-item relative w-full h-screen">
        <div className='w-3/4'>
          <img 
            src="/images/ml.webp" 
            className="w-full h-[850px] object-cover " 
            alt="Hero Image" 
          />
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center  text-white px-32">
            <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans mb-10 w-4/6">is your <span className='text-orange-500'>brand</span>  stragety being implemented without <span className='text-orange-500'>AI</span>  ??</h2>
              <p className='font-semibold w-4/5'>We are a data-driven company that focuses on providing insights and solutions based on data analysis and research. Our approach is to use data to drive decision-making and strategy development for our clients.</p>
              <a href="#get-started" className="btn bg-white w-44 text-black">Get Started</a>
            </div>
          </div>
        </div>

        <div className='w-1/4 h-[850px] bg-slate-800 lg:p-16'>
          <ul className='w- mt-20 space-y-12'>  {/* Add space between list items */}
            
            {/* First list item */}
            <li className='flex items-start '>
              <div className='mr-4'>
                <Image
                  src='/images/contactinfo-removebg-preview.png'
                  width={250}  
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Information Technology Implementation</h2>
                <h2 className='mt-4 text-sm'>We ensure seamless IT deployment of digital tools that enhance operations, driving growth and efficiency.</h2>
              </div>
            </li>

            {/* Second list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/puzzle2-removebg-preview.png'
                  width={250}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white bg-slate-950 p-4 rounded-3xl'>
                <h2 className='mb-2 font-bold w-48'>Machine Learning & Artificial Intelligence</h2>
                <h2 className='mt-4 text-sm'>Our AI tools help you get feedback, analyze data, predict trends, helping you to make well-informed decisions.</h2>
              </div>
            </li>

            {/* Third list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/projectpuzzle-removebg-preview.png'
                  width={230}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Project Management Maintenance Support</h2>
                <h2 className='mt-4 text-sm'>We handle and support your digital projects, allowing you to focus on business growth as we tackle unexpected challenges.</h2>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <div className='w-3/4'>
          <img 
            src="/images/pm3.jpg" 
            className="w-full h-[850px] object-cover " 
            alt="Hero Image" 
          />
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center text-white px-32">
            <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans mb-10 w-4/6">is your <span className='text-orange-500'>brand</span>  stragety being implemented without <span className='text-orange-500'>data</span>  ??s</h2>
              <a href="#get-started" className=" mt-10 btn bg-transparent w-44 text-white border-orange-500 border-2 ">Get Started</a>
            </div>
          </div>
        </div>

        <div className='w-1/4 h-[850px] bg-slate-800 lg:p-16'>
          <ul className='mt-20 space-y-12'>  {/* Add space between list items */}
            
            {/* First list item */}
            <li className='flex items-start bg-slate-950 p-4 rounded-3xl'>
              <div className='mr-4'>
                <Image
                  src='/images/contactinfo-removebg-preview.png'
                  width={250}  
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Information Technology Implementation</h2>
                <h2 className='mt-4 text-sm'>We ensure seamless IT deployment of digital tools that enhance operations, driving growth and efficiency.</h2>
              </div>
            </li>

            {/* Second list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/puzzle2-removebg-preview.png'
                  width={250}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Machine Learning & Artificial Intelligence</h2>
                <h2 className='mt-4 text-sm'>Our AI tools help you get feedback, analyze data, predict trends, helping you to make well-informed decisions.</h2>
              </div>
            </li>

            {/* Third list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/projectpuzzle-removebg-preview.png'
                  width={200}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Project Management Maintenance Support</h2>
                <h2 className='mt-4 text-sm'>We handle and support your digital projects, allowing you to focus on business growth as we tackle unexpected challenges.</h2>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div id="slide1" className="carousel-item relative w-full h-screen">
        <div className='w-3/4'>
          <img 
            src="/images/pm4.avif" 
            className="w-full h-[850px] object-cover " 
            alt="Hero Image" 
          />
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center  text-white px-32">
            <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans mb-10 w-4/6">is your <span className='text-orange-500'>brand</span>  stragety being implemented without <span className='text-orange-500'>data</span>  ??s</h2>
              <a href="#get-started" className=" mt-10 btn bg-transparent w-44 text-white border-orange-500 border-2 ">Get Started</a>
            </div>
          </div>
        </div>

        <div className='w-1/4 h-[850px] bg-slate-800 lg:p-16'>
          <ul className='mt-20 space-y-12'>  {/* Add space between list items */}
            
            {/* First list item */}
            <li className='flex items-start bg-slate-950 p-4 rounded-3xl'>
              <div className='mr-4'>
                <Image
                  src='/images/contactinfo-removebg-preview.png'
                  width={250}  
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Information Technology Implementation</h2>
                <h2 className='mt-4 text-sm'>We ensure seamless IT deployment of digital tools that enhance operations, driving growth and efficiency.</h2>
              </div>
            </li>

            {/* Second list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/puzzle2-removebg-preview.png'
                  width={250}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Machine Learning & Artificial Intelligence</h2>
                <h2 className='mt-4 text-sm'>Our AI tools help you get feedback, analyze data, predict trends, helping you to make well-informed decisions.</h2>
              </div>
            </li>

            {/* Third list item */}
            <li className='flex items-start'>
              <div className='mr-4'>
                <Image
                  src='/images/projectpuzzle-removebg-preview.png'
                  width={200}
                  height={100}
                  alt='info image'
                  className=''
                />
              </div>
              <div className='text-white'>
                <h2 className='mb-2 font-bold w-48'>Project Management Maintenance Support</h2>
                <h2 className='mt-4 text-sm'>We handle and support your digital projects, allowing you to focus on business growth as we tackle unexpected challenges.</h2>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Hero;
