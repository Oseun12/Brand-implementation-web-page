import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-slate-100 '>
        <div className='mx-auto max-w-screen-xl'>
        <h2 className='font-semibold  text-orange-400 p-6'>ABOUT US</h2>

            <div className='flex border shadow-md mb-20  rounded-2xl'>
                <div className='w-1/2 border shadow-sm p-6'>
                    <h2 className='text-5xl mb-6 font-bold text-amber-700'>PROJECT MANAGEMENT</h2>
                    <p className=' leading-loose mb-6 text-xl'>
                    At <span className='text-2xl text-orange-500 '>Brand Implementation</span> , we excel in transforming complex projects into streamlined successes. Our team of seasoned professionals is dedicated to delivering exceptional results by focusing on strategic planning, efficient execution, and proactive problem-solving. We prioritize clear communication and collaboration to ensure that every project aligns with your vision and objectives. By leveraging our expertise and industry best practices, we help you navigate challenges and achieve your goals with confidence, allowing you to focus on what truly matters.
                    </p>
                </div>
                <div className='relative w-1/2  '>
                    <Image
                        src='/images/eng.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='About Us Image'
                        className='rounded-3xl'
                    />
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default About
