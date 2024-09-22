import React from 'react'

function Pages() {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('/images/representation-collective-mind-process-concept-digital-art-style.jpg')` }}
    >
      {/* Content placed on top of the background image */}
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

        <div className='bg-white py-16'>
        <div className='mx-auto max-w-screen-lg overflow-hidden'>
            <h2 className='text-4xl  font-semibold text-gray-500'>Our Products are World Class <span className='text-orange-500'>Tailored for our Region</span> </h2>
            <div className='mt-10 '>
                <div className="carousel rounded-box gap-8">
                    <div className="carousel-item">
                        <div className=''>
                            <img
                            src="/images/futurism-perspective-digital-nomads-lifestyle.jpg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>Report to HQ</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>On Demnad Realtime </h2>
                            <p className='text-xl md:text-3xl text-orange-500 '>Data direct to HQ</p>
                            
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/group.jpeg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>CloupApp Server</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>Location Based</h2>
                            <p className='text-xl md:text-3xl text-orange-500'>information Displays</p>
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/imp.jpg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>DuluIQ-Queuing Management System</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>Track and understand</h2>
                            <p className='text-xl md:text-3xl text-orange-500'>customer traffic</p>
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/industrial-designer-digital-art.jpg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>DoYouLikeUs.com</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>How To Better Serve </h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>you Customer</h2>

                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/machine learning2.jpeg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>My Task Master</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>Buy Youtube Views</h2>
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/ml.jpg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>QRX-Dulu</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>QR-Code Management</h2>
                            <p className='text-xl md:text-3xl text-orange-500 '>paperless Solutions</p>
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div>
                            <img
                            src="/images/pc.jpg"
                            className="w-80 h-[400px] object-cover" 
                            alt="Burger" />
                            <h2 className='mt-4 mb-6 text-sm text-gray-400 font-bold'>My Task Master</h2>
                            <h2 className='text-xl md:text-3xl text-orange-500'>Buy Youtube Views</h2>
                        </div>
                        
                    </div>
                </div>                  
            </div>

        </div>
        </div>

        <div className='bg-gray-200 '>
            <h2 className='text-center py-10 text-5xl font-semibold text-gray-500'>Questions  <span className='text-orange-500'> & Answers</span> </h2>
        <div className='mx-auto max-w-screen-xl'>
            <div className=' flex'>
                <div className='md:w-2/12'>
                    <ul>
                        <li className='mb-2 p-3 border border-orange-500 font-bold text-center '>Report to HQ</li>
                        <li className='mb-2 p-3 border border-orange-500 font-bold text-center '>DoYouLikeUs-Dulu</li>
                        <li className='mb-2 p-3 border border-orange-500 font-bold text-center '>CloudApp Server</li>
                        <li className='mb-2 p-3 border border-orange-500 font-bold text-center '>QRX-Dulu</li>
                        <li className='mb-2 p-3 border border-orange-500 font-bold text-center '>My Task Master</li>
                    </ul>
                </div>

                    <div className='hidden md:block md:w-10/12 mb-20 bg-slate-900 border-orange-500 border-2 h-[500px]  items-center justify-center'>
                        <div role="tablist" className="tabs tabs-lifted  justify-center items-center space-x-4 p-6">
                        
                        {/* Tab 1 */}
                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab bg-white w-96 py-3 rounded-tl-lg rounded-bl-lg cursor-pointer text-center"
                            aria-label="Report2HQ"
                        />
                        <div role="tabpanel" className="tab-content bg-transparent rounded-box p-6 text-white ">
                            <h2 className='text-xl font-bold mb-10 mt-10'>Report to HQ: Centralized Communication and Reporting Tool</h2>
                            <p className='text-lg mt-10'>
                            Reports to HQ is a comprehensive reporting tool designed to centralize communication between an organizations various branches and its headquarters. By integrating all offices within a single platform, it enables organizations to track sales, monitor daily operations, and improve structural efficiency.
                            </p>
                        </div>

                        {/* Tab 2 */}
                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab bg-blue-700 w-96 py-3 rounded-tr-lg rounded-br-lg cursor-pointer text-center text-white"
                            aria-label="Features"
                            defaultChecked
                        />
                        <div role="tabpanel" className="tab-content bg-transparent rounded-box p-6 text-white text-left">
                            <h2 className='text-xl font-bold mb-6 mt-6'>Features:</h2>

                            {/* Ordered list for features */}
                            <ol className='text-sm list-decimal ml-5'>
                                <li>Centralized Communication: All offices within an organization can use this platform to communicate and share updates in real-time.</li>
                                <li>Sales Tracking: Provides detailed sales reports from all branches to the headquarters.</li>
                                <li>Operational Insights: Offers real-time data on the flow of resources and products, helping improve decision-making.</li>
                                <li>Organogram Integration: Enhances structural efficiency by allowing management to track performance across all levels of the organizational hierarchy.</li>
                            </ol>

                            <h2 className='text-xl font-bold mb-6 mt-6'>Impact: Reports to HQ improves</h2>

                            {/* Ordered list for impacts */}
                            <ol className='text-sm list-decimal ml-5'>
                                <li>Transparency and decision-making, allowing organizations to optimize their processes.</li>
                                <li>Internal processes and streamline communication across departments.</li>
                            </ol>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </div>

        <div className='bg-orange-500 bg-opacity-70 h-[220px]'>
            <div className=''>
                <h2 className='md:text-7xl py-10 font-sans font-bold text-white text-center '>Have any questions?</h2>
                <h4 className='text-sm  text-white text-center '>Not sure if Solouion is right for you? let us have a call to get to know each other.</h4>
            </div>
        </div>

    </div>
  )
}

export default Pages
