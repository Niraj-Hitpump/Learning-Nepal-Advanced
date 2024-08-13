import React from 'react'

const Describe = () => {
     return (
     <>
     <div className='flex justify-between '>
          <div className='hidden md:block md:max-w-[45%] ml-14'>
          <img src="/images/grow.gif" alt="laptop" />
          </div>

          <div className='md:max-w-[50%] md:mr-8'>
          <h1 className='font-bold text-4xl md:text-7xl py-2 md:py-6 text-pink-600 pl-16 md:pl-1'>Grow with us.... </h1>
          <p className='md:text-xl p-2 font-bold'>We have leading educators across the globe who are working day and night to shape the career of the students.We are conducting both the online and the offline classes according to the student compatibility.
          we have some demo videos of our educators to showcase their talents.
          so build a deep,solid understanding in your interested streams...
          </p>
          <button className='bg-[#3fd37f] text-white font-bold p-4 rounded w-18 m-2 md:m-6 ml-28 md:ml-1'>Demo Classes</button>
          </div>

     </div>
     
     </>
     )
}

export default Describe
