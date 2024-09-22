import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";




function AI() {
  return (
    <div className=''>
        <div className='mx-auto max-w-screen-lg' >
            <h2 className='text-center text-4xl font-bold mb-10'>Artificial intelligence <span className='text-orange-500'>Making differences</span> </h2>
            <div className="relative mb-10 w-full h-[400px] bg-orange-600 rounded-2xl">
                <img
                    src="/images/representation-collective-mind-process-concept-digital-art-style.jpg"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-50" 
                    alt="AI" 
                />
            </div>

            <div className=' text-center mx-auto mb-20'>
                <div className='md:flex gap-10 mb-20'>
                    <div className='flex flex-col items-center'>
                        <IoSettingsOutline className='w-28 h-28 mb-6 bg-gray-100 rounded-full text-orange-500 p-6 hover:bg-orange-500 hover:text-white' />
                        <h2 className='mb-6 font-bold text-2xl font-sans'>Business Growth</h2>
                        <p className='text-gray-500 text-sm'>
                        Achieving sustainable business growth requires innovation, strategic planning, and a commitment to delivering value.
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                    <CiGlobe className='w-28 h-28 mb-6 bg-gray-100 rounded-full text-orange-500 p-6 hover:bg-orange-500 hover:text-white' />
                    <h2 className='mb-6 font-bold text-2xl font-sans'>Finance advice</h2>
                        <p className='text-gray-500 text-sm'>
                        Sound financial advice is key to building wealth and securing a stable future. By understanding market trends and managing resources wisely.                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                    <IoExtensionPuzzleOutline className='w-28 h-28 mb-6 bg-gray-100 rounded-full text-orange-500 p-6 hover:bg-orange-500 hover:text-white' />
                    <h2 className='mb-6 font-bold text-2xl font-sans'>Global Solution</h2>
                        <p className='text-gray-500 text-sm'>
                        In a rapidly changing world, innovative global solutions are essential for addressing complex challenges. By fostering collaboration and leveraging cutting-edge technologies.
                         </p>
                    </div>

                    <div className='flex flex-col items-center'>
                    <IoSettingsOutline className='w-28 h-28 mb-6 bg-gray-100 rounded-full text-orange-500 p-6 hover:bg-orange-500 hover:text-white' />
                    <h2 className='mb-6 font-bold text-2xl font-sans'>Agency Collaboration</h2>
                        <p className='text-gray-500 text-sm'>
                        We work closely with agencies that require expert digital asset management for their clients, ensuring seamless integration and project success.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='text-sm text-gray-500'>
                    Our company has achieved steady financial growth through strategic planning and innovative solutions. By focusing on sustainable practices and leveraging market opportunities, we continue to strengthen our financial position while driving future expansion. Our commitment to excellence ensures we remain competitive in a dynamic business environment.
                    </h2>
                </div>
            </div>

        </div>
        {/* First Footer  */}
        <div className='bg-orange-500 h-[150px] py-6 md:py-16 '>
            <div className='md:flex text-center items-center justify-center md:gap-20'>
                <div className='mb-4 md:mb-0'>
                    <h2 className='font-bold md:text-xl and text-white font-sans'>We know the importance of delivering the best customer experience.</h2>
                </div>

                <div>
                    <a
                        href="#"
                        className="bg-transparent mt-6 border text-white md:px-10 py-3 rounded-full hover:border-0"
                        >
                        Get Started
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AI