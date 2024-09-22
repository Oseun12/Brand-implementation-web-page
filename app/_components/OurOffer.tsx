import Image from 'next/image';
import React from 'react'


function OurOffer() {
  return (
    <div className=''>
        <div className='mt-20 mb-20 p-10'>
            <h2 className='text-gray-600 text-4xl text-center font-semibold '>What we can <span className='text-orange-500'>do for you</span> </h2>
        </div>

        <div className='justify-center mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20  gap-10 p-4 '>
 
            <div className=''>
                <a href="#" className="group relative block bg-black rounded-3xl">
                    <img
                        alt=""
                        src="/images/bg.jpeg"
                        className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm  uppercase tracking-widest font-bold font-sans text-white">Leadership with Analytics  </p>

                        <p className="text-3xl font-bold font-sans text-white sm:text-2xl">Substantial business growth.</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className=''>
                <a href="#" className="group relative block bg-black rounded-3xl">
                    <img
                        alt=""
                        src="/images/business-person-futuristic-business-environment.jpg"
                        className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm uppercase tracking-widest font-bold font-sans text-white">Data and IT Management</p>

                        <p className="text-3xl font-bold font-sans text-white sm:text-2xl">Financial marketing advice.</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className=''>
                <a href="#" className="group rounded-3xl relative block bg-black">
                    <img
                        alt=""
                        src="/images/futurism-perspective-digital-nomads-lifestyle.jpg"
                        className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-bold uppercase tracking-widest font-sans text-white">Innovation and  Strategy</p>

                        <p className="text-3xl font-bold font-sans text-white sm:text-2xl">Research beyond the business.</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className=''>
                <a href="#" className="group rounded-3xl relative block bg-black">
                    <img
                        alt="team"
                        src="/images/project-management2.jpeg"
                        className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-bold uppercase tracking-widest font-sans text-white">Local Expertise</p>

                        <p className="text-3xl font-sans font-bold text-white sm:text-2xl">Local Insights </p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>

        <div className='border-t-2 border-gray-200 '>
            <div className='mx-auto max-w-screen-lg'>
                <div className='mt-10 flex justify-center mb-10 '>
                    <Image
                        src='/images/quote.png'
                        width={100}
                        height={300}
                        layout='intrinsic'
                        alt='Image'
                        className='object-cover'
                    />
                </div>
                <div className=' text-center mb-20'>
                    <h2 className='text-center font-bold mb-10 text-xl '>“This is due to their excellent service, competitive pricing and customer support. It is throughly refresing to get such a personal touch.”</h2>
                    <h2 className='text-orange-500 text-center font-bold '>Shirley Smith <span className='text-gray-400'> -Avalon founder</span></h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurOffer