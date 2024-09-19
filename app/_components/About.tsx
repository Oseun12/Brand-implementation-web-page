import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=''>
        <div className='mx-auto max-w-screen-xl'>
        <h2 className='font-semibold text-gray-400 p-6'>ABOUT US</h2>

            <div className='flex mb-20'>
                <div className='w-1/2 p-6'>
                    <h2 className='text-5xl mb-6 font-bold '>PROJECT MANAGEMENT</h2>
                    <p className=' leading-loose mb-6 text-xl'>
                    At <span className='text-2xl font-bold '>Brand Implementation</span> , we excel in transforming complex projects into streamlined successes. Our team of seasoned professionals is dedicated to delivering exceptional results by focusing on strategic planning, efficient execution, and proactive problem-solving. We prioritize clear communication and collaboration to ensure that every project aligns with your vision and objectives. By leveraging our expertise and industry best practices, we help you navigate challenges and achieve your goals with confidence, allowing you to focus on what truly matters.
                    </p>
                    <a
                        href="#"
                        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-orange-600 px-5 py-3 text-white transition bg-orange-600 hover:bg-rose-600 hover:text-white md:mt-0"
                    >
                        <span className="font-medium"> Read more </span>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 rtl:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                        </svg>
                    </a>
                </div>
                <div className='relative w-1/2  '>
                    <Image
                        src='/images/mll.jpeg'
                        layout='fill'
                        objectFit='cover'
                        alt='About Us Image'
                        className='rounded-3xl'
                    />
                </div>
            </div>

            <div className='flex mb-20'>
            <div className='relative w-1/2  '>
                    <Image
                        src='/images/group.jpeg'
                        layout='fill'
                        objectFit='cover'
                        alt='About Us Image'
                        className='rounded-3xl'
                    />
                </div>
                <div className='w-1/2 p-6'>
                    <h2 className='text-5xl mb-6 font-bold '>PROJECT MANAGEMENT</h2>
                    <p className=' leading-loose mb-6 text-xl'>
                    At <span className='text-2xl font-bold '>Brand Implementation</span> , we excel in transforming complex projects into streamlined successes. Our team of seasoned professionals is dedicated to delivering exceptional results by focusing on strategic planning, efficient execution, and proactive problem-solving. We prioritize clear communication and collaboration to ensure that every project aligns with your vision and objectives. By leveraging our expertise and industry best practices, we help you navigate challenges and achieve your goals with confidence, allowing you to focus on what truly matters.
                    </p>
                    <a
                        href="#"
                        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-orange-600 px-5 py-3 text-white transition bg-orange-600 hover:bg-rose-600 hover:text-white md:mt-0"
                    >
                        <span className="font-medium"> Read more </span>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 rtl:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                        </svg>
                    </a>
                </div>
                
            </div>


            
        </div>
    </div>
  )
}

export default About
