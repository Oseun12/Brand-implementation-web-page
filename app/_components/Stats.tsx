import React from 'react';

function Stats() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 p-6 gap-4'>
        <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
            <h2 className='text-5xl mb-2'>+10k</h2>
            <h2 className='text-gray-500'>HAPPY CUSTOMERS</h2>
        </div>
            
        <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
            <h2 className='text-5xl mb-2'>+10k</h2>
            <h2 className='text-gray-500'>CORPORATE CLIENTS</h2>
        </div>
            
        <div className='flex flex-col items-center justify-center  h-52 border-r border-gray-600 last:border-r-0'>
            <h2 className='text-5xl mb-2'>+80</h2>
            <h2 className='text-gray-500'>DEDICATED PARTNERS</h2>
        </div>

        <div className='flex flex-col items-center justify-center  h-52'>
            <h2 className='text-5xl mb-2'>+90%</h2>
            <h2 className='text-gray-500'>GOOD EVALUATION</h2>
        </div>
    </div>
  )
}

export default Stats;
