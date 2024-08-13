import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Bottom = () => {
     return (
          <>
          <div className='border border-black'>
               
          </div>

          <div className='flex justify-around'>
               <div>
                    <img src="/images/contact.gif" alt="contact"/>
               </div>

               <div className='md:p-16'>
                    <ul>
                         <li className='flex p-2 md:p-4'>
                              <a className='text-xl md:text-2xl font-bold' href="#">Facebook</a>
                              <p className='text-2xl md:text-4xl ml-4'>
                              <FaFacebookSquare />
                              </p>
                         </li>

                         <li className='flex p-2 md:p-4'>
                              <a className='text-xl md:text-2xll font-bold' href="#">Instagram</a>
                              <p className='text-2xl md:text-4xl ml-4'>
                              <FaSquareInstagram />
                              </p>
                         </li>

                         <li className='flex p-2 md:p-4'>
                              <a className='text-xl md:text-2xl font-bold' href="#">Messenger</a>
                              <p className='text-2xl md:text-4xl ml-4'>
                              <BsMessenger />
                              </p>
                         </li>

                         <li className='flex p-2 md:p-4'>
                              <a className='text-xl md:text-2xl font-bold' href="#">Twitter</a>
                              <p className='text-2xl md:text-4xl ml-4'>
                              <FaSquareXTwitter />
                              </p>
                         </li>

                         <li className='flex p-2 md:p-4'>
                              <a className='text-xl md:text-2xl font-bold' href="#">Telegram</a>
                              <p className='text-2xl md:text-4xl ml-4'>
                              <SiTelegram />
                              </p>
                         </li>
                    </ul>
               </div>
          </div>
          </>
     )
}

export default Bottom
