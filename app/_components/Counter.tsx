'use client'

import React, { useEffect } from 'react'

function Counter() {
    const animateCounter = (element: HTMLElement, target: string | null) => {
        if (!target) return;
        
        let start = 0;
        const end = parseInt(target);
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / end));
    
        const timer = setInterval(() => {
          start += 1;
          element.innerText = start.toString();
          if (start === end) {
            clearInterval(timer);
          }
        }, stepTime);
      };
    
      // Function to check if the element is in the viewport
      const isInViewport = (element: HTMLElement): boolean => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      };
    
      useEffect(() => {
        const handleScroll = () => {
          const counters = document.querySelectorAll<HTMLElement>('.counter');
          counters.forEach(counter => {
            if (isInViewport(counter) && counter.innerText === '0') {
              animateCounter(counter, counter.getAttribute('data-target'));
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 p-6 gap-4'>
        <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
        <h2 className="text-5xl font-bold text-gray-500">+
              <span className="counter text-gray-500" data-target="100">0</span> 
            </h2>
            <h2 className='text-gray-500'>HAPPY CUSTOMERS</h2>
          </div>

        <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
            <h2 className="text-5xl font-bold text-gray-500">+
              <span className="counter text-gray-500" data-target="25">0</span>
            </h2>
            <h2 className='text-gray-500'>CORPORATE CLIENTS</h2>
          </div>

          <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
          <h2 className="text-5xl font-bold text-gray-500">+
              <span className="counter text-gray-500" data-target="20">0</span>
            </h2>
            <h2 className='text-gray-500'>DEDICATED PARTNERS</h2>
          </div>

          <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
            <h2 className="text-5xl font-bold text-gray-500">+
              <span className="counter text-gray-500" data-target="60">0</span>
            </h2>
            <h2 className='text-gray-500'>GOOD EVALUATION</h2>
          </div>
        </div>
      );
}

export default Counter