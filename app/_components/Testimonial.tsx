import Image from 'next/image';
import React from 'react';

function Testimonial() {
  return (
    <div className='mt-20 mb-20'>
      <div className='mx-auto max-w-screen-2xl p-6 gap-10'>
        <h2 className='mb-10 text-center font-bold text-orange-600'>TESTIMONIALS</h2>
        <p className='text-center mb-10 text-2xl font-bold'>What people say about US</p>

        {/* Parent container centered and responsive */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
          {/* First Testimonial */}
          <div className='flex flex-row w-full lg:w-2/5 p-10 border-gray-500 border-4 rounded-2xl shadow-lg gap-10 h-64 lg:h-80'>
            <div className=''>
              <Image
                src='/images/avatar.jpeg'
                width={500}
                height={100}
                alt='avatar'
                className='rounded-full'
              />
            </div>
            <div className='overflow-hidden'>
              <h2 className='mb-6 text-ellipsis'>
                I am thoroughly impressed with the brand implementation services provided by this company.
                Their attention to detail and strategic approach has led to a significant improvement in
                our brand's visibility and recognition.
              </h2>
              <h2 className='text-gray-400'>Mike Mike</h2>
              <div className='flex gap-0.5 text-green-500'>
                {/* Star Ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className='size-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className='flex flex-row w-full lg:w-2/5 p-10 border-gray-500 border-4 rounded-2xl shadow-lg gap-10 h-64 lg:h-80'>
            <div>
              <Image
                src='/images/avatar.jpeg'
                width={400}
                height={100}
                alt='avatar'
                className='rounded-full'
              />
            </div>
            <div className='overflow-hidden'>
              <h2 className='mb-6 text-ellipsis'>
                Their attention to detail and strategic approach has led to a significant improvement
                in our brand's visibility and recognition. We are impressed with their dedication.
              </h2>
              <h2 className='text-gray-400'>Mike Mike</h2>
              <div className='flex gap-0.5 text-green-500'>
                {/* Star Ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className='size-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
