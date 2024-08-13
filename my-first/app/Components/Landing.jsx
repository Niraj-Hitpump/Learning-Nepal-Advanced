"use client"
import React from 'react'
import Typed from 'react-typed'

const Landing = () => {
     return (
     <>
     <div className='md:flex justify-between'>
          <div className='py-4 md:py-16'>
               <h2 className=' text-4xl md:text-7xl font-bold text-blue-400 md:px-10 p-2'>Learn From Coolest</h2>
               <h2 className='text-4xl  md:text-7xl font-bold text-blue-400 md:px-10 p-2'>Platform Of Nepal.</h2>
               <p className='md:px-10 md:text-xl text-black font-bold md:max-w-[70%] p-2'>We prefer quality over quantity and thatswhy we are here to help interested learners to achieved their aim of life.
               </p>
               <h2 className='text-2xl md:text-5xl font-bold text-[#e65561] md:px-10 p-2 md:mt-2'> Learn
               
               <Typed
                         className='pl-2'
                         strings={['Web Development','Digital Marketing','Ethical Hacking']}
                         typeSpeed={150}
                         loop={true}
                         backSpeed={50}
                    />
               </h2>

               <button className='bg-[#e65561] w-28 md:w-44 h-12 md:h-14  text-white font-bold rounded-xl md:text-xl ml-32 md:ml-10 mt-3 md:mt-5 '>Sign In</button>
               
          </div>

          <div className='md:py-2 md:w-[40%] ml-12 md:mr-16 '>
          <img className='w-[300px] md:w-[620px]' src="/images/neon.gif" alt="Education" />
          </div>
     </div>

     <div className='border border-gray-600 mt-4 md:mt-16'>

     </div>
     </>

     
     )
}

export default Landing
