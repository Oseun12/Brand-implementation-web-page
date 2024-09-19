import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <div className='relative'>
      {/* Services Section */}
      <div className='mx-auto max-w-screen-xl'>
        <h2 className='font-semibold text-orange-400 p-6 mb-5'>OUR SERVICES</h2>
        <div className='flex flex-col lg:flex-row lg:gap-20'>
          {/* Text Section */}
          <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
            <h2 className='text-7xl font-bold mb-10 text-amber-700'>
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
            src='/images/machine.jpeg'
            layout='fill'
            objectFit='cover'
            alt='Machine'
            className='absolute inset-0 rounded-3xl'
        />
        <div className='absolute inset-0 bg-black opacity-75 rounded-3xl' />
        <div className='absolute inset-0 flex flex-col items-center justify-center p-8 glass  '>
            <h2 className='text-white text-3xl font-bold mb-4 px-4 py-2 rounded bg-white bg-opacity-30 rounded-3xl'>
            WHAT DO YOU KNOW ABOUT MACHINE LEARNING
            </h2>
            <p className='text-white text-xl leading-loose text-center w-3/6 rounded-3xl'>
            Machine learning is a branch of artificial intelligence that focuses on building systems capable of learning from and making decisions based on data. By employing algorithms that analyze large datasets, machine learning models can identify patterns, make predictions, and improve over time without being explicitly programmed for each task. This technology is widely used in applications such as recommendation systems, natural language processing, and autonomous vehicles, driving innovation and efficiency across various industries.
            </p>
      </div>
    </div>
      </div>
      
      
    </div>
  )
}

export default Services;
