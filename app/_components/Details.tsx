import Image from 'next/image'
import React from 'react'

function Details() {
  return (
    <div className='mx-auto max-w-screen-lg mb-20'>
        <div className='mx-auto max-w-screen-md'>
            <div className='text-center'>
                <h2 className='text-3xl  text-gray-600'>Welcome to Brand Imp: <span className='text-orange-500'>Your Behind-the-Scenes</span>  </h2>
                <h2 className='text-3xl mb-10 text-gray-600 mt-6'>Digital  Management Partner</h2>
                <p className='text-gray-500'>We help you achieve your business goals. Our team of experts will work closely with you to understand your business needs and provide tailored solutions to help you succeed. Whether you need help with digital marketing, website development, or any other aspect of your business, we have the expertise and experience to help you achieve your goals.</p>
                <a
          className='bg-black rounded-full text-white group flex items-center justify-between gap-1 px-5 py-3 transition-colors hover-border-black hover:bg-slate-400 focus:outline-none focus:ring w-52 mx-auto mt-6'
          href="#"
                >
                <span className="font-medium transition-colors group-hover:text-black"> Get started </span>

                <span
                    className="shrink-0 rounded-full border border-orange-600 bg-white p-2 group-active:border-indigo-500"
                >
                    <svg
                    className="size-5 rtl:rotate-180 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </span>
                </a>
                
            </div>
        </div>
        
        <div className='mt-20 flex gap-10'>
      
      {/* First Image with Overlay */}
      <div className='relative'>
        <Image
          src='/images/formbg.jpeg'
          width={600}
          height={300}
          layout='intrinsic'
          alt='Image'
          className='object-cover'
        />
        {/* Overlay Container */}
        <div className='absolute bottom-0  w-3/5 h-32 bg-orange-500 justify-end text-white p-6 rounded-r-full'>
          <h3 className='text-2xl font-semibold mb-2'>Explore consultancy services</h3>
          <a href='#' className='text-sm underline'>Read More</a>
        </div>
      </div>

      {/* Second Image with Overlay */}
      <div className='relative'>
        <Image
          src='/images/pm2.jpg'
          width={600}
          height={300}
          layout='intrinsic'
          alt='Image'
          className='object-cover'
        />
        {/* Overlay Container */}
        <div className='absolute bottom-0  w-3/5 h-32 bg-orange-500 justify-end text-white p-6 rounded-r-full'>
          <h3 className='text-2xl font-semibold mb-2'>Get a professional advice</h3>
          <a href='#' className='text-sm underline'>Read More</a>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Details