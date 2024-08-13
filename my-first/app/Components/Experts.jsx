import React from 'react'

const Experts = () => {
     return (
     <>
     <div className='md:flex justify-around'>
          <div>
          <h1 className='font-bold  text-3xl md:text-5xl mt-16 md:mt-28 ml-14 md:ml-28 p-3'>Happy to help you!</h1>
          <p className='text-xl font-bold p-2 md:max-w-[80%] md:ml-28'>Need more details? Our expert academic counsellors will be happy to patiently explain everything that you want to know in an easy and in efficient way...</p>
          <button className='bg-[#e65561] w-40 md:w-60 h-14  text-white  font-bold rounded-xl md:text-xl ml-28 mt-5 ' >Speak to an Expert</button>
          </div>

          <div className='md:mr-32 md:mt-12'>
               <img src="/images/ani2.gif" alt="gif" />
          </div>
     </div>
     </>
     )
}

export default Experts
