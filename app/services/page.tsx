import React from 'react'

function page() {
  return (
    <div className='relative'>
        <div className='relative'>
            {/* The image */}
            <img 
            src="/images/machine-learning.jpeg" 
            className="w-full h-[500px] object-cover" 
            alt="Hero Image" 
            />
            
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-10">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>

                {/* Centered text over image */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-32 z-10">
                <div className="p-8 bg-opacity-0 bg-gray-900 rounded-lg">
                    <p className='font-bold text-xl'>Home - Services</p>
                    <h2 className="text-5xl md:text-8xl font-bold font-sans mb-10">Services we offer</h2>
                    <a href="#get-started" className="mt-10 btn bg-transparent w-44 text-white border-orange-500 border-2">
                    Get Started
                    </a>
                </div>
            </div>
        </div>


        <div className='mx-auto max-w-screen-xl'>
            <div className='mt-20 mb-20'>
                <div className="carousel carousel-center rounded-box gap-6">
                    <div className="carousel-item grid w-60  ">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    <div className="carousel-item grid w-60">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    <div className="carousel-item grid w-60">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    <div className="carousel-item grid w-60">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    <div className="carousel-item grid w-60">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    <div className="carousel-item grid w-60 ">
                        <img src="/images/business-person-futuristic-business-environment.jpg" alt="Pizza" />
                        <h2 className='text-sm text-gray-400 mb-4 mt-2'>Report to HQ</h2>
                        <h2 className='text-3xl mb-6'>On Demand RealTime data direct to HQ</h2>
                        <p className='text-sm text-gray-400 mb-6'>The point of using dummy text for your paragraph is that it has a more-or-less normal distribution of letters. making it look like readable English.</p>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default page