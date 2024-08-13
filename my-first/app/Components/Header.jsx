"use client"
import React, { useState } from 'react'
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import { RiOrganizationChart } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RiMenuAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
     const [toggle, setToggle] = useState(false)
     return (
     <div>
          <nav className='flex justify-between mx-auto bg-blue-300 px-6 md:px-8'>
               <div className='font-bold text-5xl md:text-7xl'>
                    <PiGitlabLogoSimpleFill />
               </div>

               {/* logic for hamburger menu */}

               {
                    toggle?
                    <IoClose onClick={()=>setToggle(!toggle)}  className='text-black text-5xl mt-2 md:hidden block'/>
               :
                    <RiMenuAddFill onClick={()=>setToggle(!toggle)} className='text-black text-4xl mt-2 md:hidden block'/>
               }


               <ul className=" text-black  hidden md:flex gap-7 py-5">
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto'>
                         <IoIosHome />
                         <a href="/">Home</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto'>
                         <RiOrganizationChart />
                         <a href="com">Company</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto'>
                         <GrResources />
                         <a href="res">Resources</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto'>
                         <MdOutlineRoundaboutLeft />
                         <a href="abt">About</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto'>
                         <IoMdContact />
                         <a href="contact">Contact</a>
                    </li>
               </ul>


               {/*Responsive menu */}

               <ul className={`duration-300 md:hidden h-screen text-white w-full fixed bg-black top-[57px] ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto p-4'>
                         <IoIosHome />
                         <a href="">Home</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto  p-4'>
                         <RiOrganizationChart />
                         <a href="">Company</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto  p-4'>
                         <GrResources />
                         <a href="">Resources</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto  p-4'>
                         <MdOutlineRoundaboutLeft />
                         <a href="">About</a>
                    </li>
                    <li className='flex items-center gap-2 font-bold text-xl ml-auto  p-4'>
                         <IoMdContact />
                         <a href="">Contact</a>
                    </li>
               </ul>
          </nav>
     </div>



     )
}

export default Header

