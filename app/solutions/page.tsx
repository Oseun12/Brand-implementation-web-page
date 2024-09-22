import Image from 'next/image';
import React from 'react';
import { ImCheckmark } from "react-icons/im";


function page() {
  return (
    <div className='relative'>
      {/* Hero section */}
        <div className='relative'>
            {/* The image */}
            <img 
            src="/images/machine-learning.jpeg" 
            className="w-full h-[700px] object-cover" 
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

        <div>
            <div className='mx-auto max-w-screen-xl p-4'>
                <div className=' md:flex mt-20 mb-10 gap-10 '>
                    <div className='2/3 '>
                        <div>
                            <img 
                            src="/images/machine-learning.jpeg" 
                            className="w-full h-[400px] object-cover" 
                            alt="Hero Image" 
                        />
                        </div>
                        <div className='mt-20'>
                            <h2 className='text-2xl md:text-5xl font-bold mb-10'>CLOUDAPP</h2>
                            <p className='text-sm text-gray-500'>
                            CloudApp is a robust digital brand asset management platform designed to help organizations securely store, manage, and distribute their digital assets, such as advertisements, announcements, and other brand materials. By leveraging advanced security protocols, CloudApp ensures that sensitive materials remain protected while offering a seamless way for brands to communicate with their target audience.                            </p>
                            <div className='lg:flex'>
                                <div className='lg:w-1/2 mt-10'>
                                    <Image
                                    src='/images/pm3.jpg'
                                    width={500}
                                    height={100}
                                    layout='intrinsic'
                                    alt=''/>
                                </div>
                                <div className='lg:w-1/2 px-20 mt-10  '>
                                    <h2 className='mb-4 font-bold'>Features</h2>
                                    <h3 className='flex items-center '><ImCheckmark className='bg-orange-500 text-white w-7 h-8 rounded-full m-4' />Signage Integration </h3>
                                    <h3 className='flex items-center '><ImCheckmark className='bg-orange-500 text-white w-7 h-8 rounded-full m-4' />Mechanized Delivery System </h3>
                                    <h3 className='flex items-center '><ImCheckmark className='bg-orange-500 text-white w-7 h-8 rounded-full m-4' />Mechanized Delivery System </h3>

                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* second section */}
                    <div className='md:w-2/3'>
                        <div>
                            <div className='border-2 px-10 py-16'>
                                <h2 className='mb-10 font-bold text-xl'>Business services</h2>
                                <h4 className='mb-4 font-semibold text-gray-500'>Project management</h4>
                                <h4 className='mb-4 font-semibold text-gray-500'>Machine Learning</h4>
                                <h4 className='mb-4 font-semibold text-gray-500'>Project Implementation</h4>
                                <h4 className='mb-4 font-semibold text-gray-500'>Project Implementation</h4>
                                <h4 className='mb-4 font-semibold text-gray-500'>Project Implementation</h4>
                                <h4 className='mb-4 font-semibold text-gray-500'>Project Implementation</h4>

                            </div>

                            <div className='mt-20 border-2 px-10 py-16 bg-orange-500 '>
                                <h2 className='text-white font-bold text-3xl mb-6'>Need Help???</h2>
                                <h2 className='text-gray-600 mb-6'>prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.</h2>
                                <h2 className='text-white font-bold text-2xl'>+ 234 944 5000</h2>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='md:flex gap-6 '>
                    <div className='md:w-1/3 border hover:border-orange-500 p-4 rounded-3xl mb-4'>
                        <h2 className='mb-6 mt-6 font-bold text-lg'>A Real-Time Customer Feedback System</h2>
                        <p className='text-gray-500 mb-10'>DoYouLikeUs.com is a powerful feedback system designed to collect real-time insights from customers. This tool empowers brands by gathering customer perspectives on their products and services, helping refine offers, assess market segmentation, and evaluate the reception of new products.</p>
                        <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Real-Time Feedback Collection </h3>
                        <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Data Analytics </h3>
                        <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Market Segmentation </h3>
                        
                    </div>

                    <div className='md:w-1/3 border border-orange-500 hover:border-orange-500 p-4 rounded-3xl mb-4'>
                        <h2 className='mb-6 font-bold text-lg mt-6'>Centralized Communication and Reporting Tool</h2>
                        <p className=' text-gray-500'> Reports to HQ is a comprehensive reporting tool designed to centralize communication between an organization’s various branches and its headquarters. By integrating all offices within a single platform, it enables organizations to track sales, monitor daily operations, and improve structural efficiency.</p>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Centralized Communication </h3>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Sales Tracking </h3>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Operational Insights </h3>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Organogram Integration </h3>
                    </div>

                    <div className='md:w-1/3 border hover:border-orange-500 p-4 rounded-3xl mb-4'>
                        <h2 className='mb-6 mt-6 font-bold text-lg'>A Comprehensive Tool for Task and Project Management</h2>
                        <p className=' mb-10 text-gray-500'>My Task Manager is a comprehensive project and task management tool designed to help organizations efficiently plan, manage, and track their projects. It provides real-time tracking of deadlines, project stages, and task completion statuses, ensuring that all tasks are completed on time and meet organizational goals.</p>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Task Scheduling and Tracking</h3>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Project Planning </h3>
                        <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Alerts and Notifications </h3>

                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-screen-xl mt-10'>
                <div className=' md:w-3/5  rounded-xl p-4 mb-5 '>
                    <div className="collapse collapse-arrow  bg-white border border-gray-300 mb-4">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl text-orange-500 font-semibold"> Queuing Management System</div>
                        <div className="collapse-content">
                            <p>The Queuing Management System is designed to streamline customer service by organizing and prioritizing customer interactions. This digital queuing system helps organizations reduce wait times, structure customer flow, and ensure that each customer is attended to in a timely and efficient manner.
                            </p>
                            <h2>Features</h2>
                            <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Digital Queuing</h3>
                            <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Customer Flow Management</h3>
                            <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Efficiency Optimization</h3>
                            <h3 className='flex items-center text-gray-500'><ImCheckmark className=' w-8 h-8 rounded-full m-4 text-orange-600' />Impact</h3>

                        </div>
                    </div>
                        <div className="collapse collapse-arrow bg-white border border-gray-300 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl text-orange-500 font-semibold">Strong business plan requires experience</div>
                        <div className="collapse-content">
                            <p>lorem Ipsum is simply dummy text of not the print typesetting industry has been the industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white border border-gray-300 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl text-orange-500 font-semibold">Attract and attain high quality paying customers</div>
                        <div className="collapse-content">
                            <p>lorem Ipsum is simply dummy text of not the print typesetting industry has been the industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    <div className='mt-10 flex gap-10'>
                        <div className='md:w-1/2'>
                            <h2 className='text-lg font-bold mb-6'>Business analysis</h2>
                            <p className='text-sm'>Lorem Ipsum is simply dummy text of not the print typesetting industry has been industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Research beyond the business plan</h3>
                            <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Marketing options and rates </h3>
                            <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />The ability to turnaround consulting </h3>
                            <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Help companies into more profitable </h3>
                            <h3 className='flex items-center text-gray-500 '><ImCheckmark className=' w-7 h-8 rounded-full m-4 text-orange-600' />Customer engagement matters</h3>
                        </div>
                        <div className='md:w-1/2'>
                            <Image
                                src='/images/chart.webp'
                                width={500}
                                height={100}
                                layout='intrinsic'
                                alt=''/>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

        



        
        
    </div>
  );
}

export default page;
