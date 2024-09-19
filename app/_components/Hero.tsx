import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className='mt-32 '>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Tech Solutions"
              width={500}
              height={100}
              src="/images/machine.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-7xl font-bold  text-amber-700"> Brand Implemtation</h2>

            <p className="mt-4 text-gray-600 leading-loose mb-6">
              Brand Implementation is a cutting-edge company specializing in project management, machine learning, and implementation services. Our team of experienced professionals utilizes the latest technological advancements to deliver tailored solutions that streamline operations, optimize data-driven decision-making, and ensure successful project execution. From strategic planning to seamless deployment, we are dedicated to helping businesses harness the power of machine learning and project management for greater efficiency and innovation.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
