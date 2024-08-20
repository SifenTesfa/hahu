import React from 'react'

const Searchnav = () => {
  return (
    <div><div className='flex justify-between items-center h-24 mx-auto px-14 bg-white w-full' >  
    <ul className='hidden text-[#1a2b47] md:flex'> 
      <li className='p-4 text-sm font-bold'><a href='#'>Web-Hosting</a></li> 
      <li className='p-4 text-sm font-bold'><a href='#'>Pricing</a></li> 
      <li className='p-4 text-sm font-bold'><a href='#'>About Us</a></li> 
    </ul> 
    <button className='text-sm font-bold text-[#020887] rounded-3xl bg-[#59FFA0] py-2 px-7'>Login</button> 
  </div></div>
  )
}

export default Searchnav