import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <div className='relative'>
      {/* Services Section */}
      <div className='mx-auto max-w-screen-xl'>
        <h2 className='font-semibold text-gray-400 p-6 mb-5'>OUR SERVICES</h2>
        <div className='flex flex-col lg:flex-row lg:gap-20'>
          {/* Text Section */}
          <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
            <h2 className=' text-4xl md:text-7xl font-bold mb-10 '>
              The services we provide include
            </h2>
            <p className='text-xl leading-loose'>
              Contact us today to schedule an appointment and experience the difference our Machine Learning, Project Management, and Implementation services can make!
            </p>
          </div>
          
          {/* Services List */}
          <div className='w-full lg:w-1/2'>
            <div className='mb-20 text-xl flex flex-col'>
              <div className='flex items-start mb-10'>
                <span className='border p-5 rounded-full border-black font-bold px-6'>1</span>
                <div className='ml-6'>
                  <span className='text-xl font-semibold'>Project Management</span>
                  <h2 className='mt-2'>
                    Project management involves the strategic planning, execution, and oversight of projects to achieve specific goals within a set timeframe and budget.
                  </h2>
                </div>
              </div>

              <div className='flex items-start mb-10'>
                <span className='border p-5 rounded-full border-black font-bold px-6'>2</span>
                <div className='ml-6'>
                  <span className='text-xl font-semibold'>Machine Learning</span>
                  <h2 className='mt-2'>
                    Machine Learning involves developing algorithms and statistical models that enable computers to perform tasks without explicit instructions, relying on patterns and inference instead.
                  </h2>
                </div>
              </div>

              <div className='flex items-start mb-10'>
                <span className='border p-5 rounded-full border-black font-bold px-6'>3</span>
                <div className='ml-6'>
                  <span className='text-xl font-semibold'>Implementation</span>
                  <h2 className='mt-2'>
                    Implementation involves the process of putting a plan or system into effect, ensuring that all elements are executed as intended for successful project completion.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='relative h-[700px]'>
            <Image
                src='/images/formbg.jpeg'
                layout='fill'
                objectFit='cover'
                alt='Machine'
                className='absolute inset-0 rounded-3xl'
            />
            {/* Background opacity layer */}
            <div className='absolute inset-0 bg-black opacity-5 rounded-3xl' />

            {/* Content section */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-8 bg-black bg-opacity-30'>
                <h2 className='text-white text-4xl font-bold mb-4 px-4 py-2 bg-black bg-opacity-30 rounded-3xl'>
                GET IN TOUCH WITH US
                </h2>
                <p className='text-white text-xl leading-loose text-center w-3/6 mb-6 rounded-3xl '>
                Stay updated with our latest news and developments in machine learning and artificial intelligence. Subscribe to our newsletter and get exclusive insights and updates delivered directly to your inbox.
                </p>
                
                {/* Newsletter Form */}
                <form className='bg-white bg-opacity-30 p-4 rounded-3xl w-full max-w-lg'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full p-3 mb-4 rounded-md bg-white bg-opacity-80 focus:outline-none'
                />
                <button
                    type='submit'
                    className='w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'>
                    Subscribe
                </button>
                </form>
            </div>
        </div>

      </div>
      
      
    </div>
  )
}

export default Services;
