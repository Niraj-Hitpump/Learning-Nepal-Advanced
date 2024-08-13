import React from 'react'

const News = () => {
     return (
     <>
     <div className='md:flex justify-between'>
          <div className='md:w-[40%] md:ml-10 mb-4 md:mb-1'>
               <img src="/images/announcement.gif" alt="FREE" />
          </div>

          <div className='md:max-w-[50%] font-bold text-xl'>
               <h1 className='font-bold text-4xl md:text-6xl py-6 text-pink-600 md:mt-10 p-12 md:p-1'>Announcement....</h1>
               <p className='md:max-w-[90%] p-2 md:p-1 justify-start md:justify-normal'>We provide some of our free classes to  the needy students those are elligible but due to lack of money they are not getting the proper education.Here our known organization conducts free live classes to the those students.Students can submit some documentation to join us freely...</p>

               <button className='bg-[#e58033] text-white rounded-xl w-22 p-3 ml-32 md:mt-4'>Join Fast</button>
          </div>

     </div>
     </>
     )
}

export default News
