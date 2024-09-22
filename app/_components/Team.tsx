import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <div className='mb-20 h-[600px] p-2'>
        <div className='md:flex'>
            <div className="md:w-1/2 relative">
                <img
                    alt="Team"
                    src="/images/team.jpg"
                    className="absolute  inset-0 h-[600px] w-full object-cover transition-opacity group-hover:opacity-50"
                />
            </div>

            <div className="w-1/2 md:block hidden bg-gray-100 h-[600px]">
                <div className='mt-8 lg:mt-0 p-2 lg:p-10 w-5/6'>
                    <h2 className='font-bold text-2xl md:text-3xl px-4 lg:px-0 lg:text-4xl md:mb-6 font-sans lg:mb-6 lg:w-5/6 leading-6'>Focused team with a specialized skills</h2>
                        <div className='flex items-center'>
                            <Image
                            src='/images/sustainability--removebg-preview.png'
                            width={100}
                            height={100}
                            alt=''/>
                            <div className='items-center'>
                                <h2 className='text-xl font-bold font-sans'>About Brandimp consultancy</h2>
                            </div>
                        </div>
                    <p className='text-gray-500 text-sm lg:text-sm px-16 lg:px-24 mb-10'>At Brand Imp, we excel in behind-the-scenes project management for digital assets. Our focus is on helping brands in Nigeria and West Africa collect, organize, and manage critical data across multiple touch points.</p>
                    <h2 className='text-orange-500 text-xl lg:text-3xl px-24 mb-4'>Tonio Okojevoh</h2>
                    <h2 className='text-gray-500 md:text-sm  px-24 mb-10'>Founder of BrandImp</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team