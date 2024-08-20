import React from 'react';
import img4 from '../images/img4.png';
import img3 from '../images/img3.png';

const Company = () => {
  return (
    <div className='pt-0 md:pt-24 md:pb-24 pb-0'>
      <div className='relative h-screen w-full flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: `url(${img3})` }}>
        <div className='absolute text-center'>
          <p className=' text-[#1E3888] text-4xl font-bold'>
            You're in <span className="text-[#59FFA0]"> Great </span>Company
          </p>
          <p className=' text-[#58585A] pt-8'>
            We're honored to provide a quality web hosting service all over Ethiopia.
          </p>
          <p className='text-[#58585A] pb-8'>Here are some of our esteemed clients.</p>
          <button className='text-sm  font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7'>Place Order</button>
        </div>
      </div>

     <div class="w-full h-screen pt-4 md:pt-24 pl-0 md:pl-8 bg-white flex flex-col justify-between">
  <div class="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] m-auto gap-8">
    <div class="flex flex-col justify-center md:items-start w-full px-2 py-8">
      <p class="md:text-4xl font-bold text-[#1E3888] text-2xl">Need <span class="text-[#59FFA0]">Help</span>?</p>
      <p class="py-3 text-[#58585A] md:mb-3">Having issues and hoping to get help. Our technical team is dedicated to ensuring you get the support you need 24/7. Reach us via Telegram.</p>
      <button class="text-sm font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7">Contact Us</button>
    </div>
    <div class="flex justify-center md:justify-end">
      <img src={img4} alt="img4" class="h-64 w-full md:w-auto" />
    </div>
  </div>
</div>

<div class="bg-[#020887]  md:w-144 md:ml-24 h-auto ml-12 mr-12 md:h-44 md:mr-32 mt-24 md:mt-24 rounded-2xl">
  <div class="flex flex-col md:flex-row justify-between items-center p-6 md:p-0">
    <div>
      <p class="text-[#CAE9FF] pt-6 md:pt-12 text-3xl md:text-4xl p-4 font-bold">
        Professional Web Hosting <br class="hidden md:block" /> for <span class="text-[#59FFA0]">YOU</span>
      </p>
    </div>
    <div class="pt-6 md:pt-24 md:pl-8 md:mr-6 mr-4 ">
      <button class="text-sm font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7">Place Order</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Company;