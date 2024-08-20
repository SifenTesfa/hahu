import React from 'react'
import img2 from '../images/img2.png'

const Payment = () => {
  return (
    <div className='w-full bg-white flex flex-col justify-between'>
      <div className='mx-4 md:mx-8 py-24 flex flex-col md:flex-row justify-between items-center max-w-[1100px] m-auto'>
        <div className='md:w-1/2 flex flex-col justify-center md:items-start space-y-6'>
          <p className='text-2xl md:text-4xl font-bold text-[#1E3888]'>Payment Made <span className="text-[#59FFA0]">Easy</span>.</p>
          <p className='text-[#58585A] md:mb-3'>We made it easy for you to make payments on HahuCloud. It's Simple <br className='hidden md:block' />and Fast! Buying Hosting and Domain has never been this much easy in Ethiopia.</p>
          <p className='text-[#58585A] font-semibold'>Own Your dream domain in less than 3 Minutes!</p>
        </div>
        <div className='md:w-1/3 mt-8 md:mt-0'>
          <img src={img2} alt="img2" className='h-auto md:ml-20 w-full' />
        </div>
      </div>
    </div>
  )
}

export default Payment