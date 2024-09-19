import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=''>
      <div className='mx-auto max-w-screen-xl'>
        <h2 className='font-semibold text-gray-400 p-6'>ABOUT US</h2>

        {/* First Section */}
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='w-full md:w-1/2 p-6'>
            <h2 className='text-5xl mb-6 font-bold'>MACHINE LEARNING</h2>
            <p className='leading-loose mb-6 text-xl'>
              At <span className='text-2xl font-bold'>Brand Implementation</span>, we harness the power of <span className='text-xl font-bold'>Machine Learning</span> to drive innovation and efficiency. Machine learning is revolutionizing industries by enabling systems to learn from data and make intelligent decisions without explicit programming. Our experts develop tailored machine learning models that optimize processes, predict outcomes, and uncover insights from complex data sets.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-white transition bg-black hover:bg-rose-600 hover:text-white"
            >
              <span className="font-medium">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className='relative w-full md:w-1/2 h-[400px] md:h-auto'>
            <Image
              src='/images/mll.jpeg'
              layout='fill'
              objectFit='cover'
              alt='Machine Learning Image'
              className='rounded-3xl'
            />
          </div>
        </div>

        {/* Second Section */}
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='relative w-full md:w-1/2 h-[400px] md:h-auto'>
            <Image
              src='/images/group.jpeg'
              layout='fill'
              objectFit='cover'
              alt='Project Management Image'
              className='rounded-3xl'
            />
          </div>
          <div className='w-full md:w-1/2 p-6'>
            <h2 className='text-5xl mb-6 font-bold'>PROJECT MANAGEMENT</h2>
            <p className='leading-loose mb-6 text-xl'>
              At <span className='text-2xl font-bold'>Brand Implementation</span>, we excel in transforming complex projects into streamlined successes. Our team of seasoned professionals is dedicated to delivering exceptional results by focusing on strategic planning, efficient execution, and proactive problem-solving.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-white transition bg-black hover:bg-rose-600 hover:text-white"
            >
              <span className="font-medium">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Third Section */}
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='w-full md:w-1/2 p-6'>
            <h2 className='text-5xl mb-6 font-bold'>IMPLEMENTATION</h2>
            <p className='leading-loose mb-6 text-xl'>
              At <span className='text-2xl font-bold'>Brand Implementation</span>, we specialize in turning strategic plans into actionable outcomes through seamless implementation. Our team is committed to executing projects with precision. From initial planning to final deployment, we focus on effective resource management, clear communication, and minimizing disruptions.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-white transition bg-black hover:bg-rose-600 hover:text-white"
            >
              <span className="font-medium">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className='relative w-full md:w-1/2 h-[400px] md:h-auto'>
            <Image
              src='/images/imp.jpg'
              layout='fill'
              objectFit='cover'
              alt='Implementation Image'
              className='rounded-3xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
