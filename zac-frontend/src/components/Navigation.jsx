import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineNotificationAdd, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logout from './Logout';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';


const Navigation = () => {
    let Links =[
        {name:"HOME", icon:<AiOutlineHome className="h-6 w-6" />, link:"/"},
        {name:"SERVICE", icon:<MdOutlineNotificationAdd className="h-6 w-6" />, link:"/"},
        {name:"ABOUT", icon:<CgProfile className="h-6 w-6" />, link:"/"},
        {name:"CONTACT", icon:<AiOutlinePhone className="h-6 w-6" />, link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className="fixed top-2 right-0 flex items-center z-50">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          {/* Menu icon */}
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'></div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <AiOutlineClose /> :  <AiOutlineMenu/> 
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-12 w-48 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-1' : 'top-[-490px]'}`}>

            {/* <Link to='/admin/teacher-mgt'><button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Teacher Registration</button></Link>

            <Link to='/admin/student-mgt'><button className='btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Student Registration</button></Link> */}
            
            {Links.map((link, index) => (
                <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a href={link.link} className="text-gray-800 hover:text-blue-400 duration-500">
                    <span className="md:hidden">{link.name}</span>
                    <span className="hidden md:inline">{link.icon}</span>
                </a>
                </li>
            ))}

            {/* <li className="md:ml-8 md:my-0 my-7 font-semibold text-gray-800 hover:text-blue-400 duration-500">
                <span className="md:hidden">LOGOUT</span>
                <span className="hidden md:inline"><Logout /></span>
            </li> */}

            <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <a href="/logout" className="text-gray-800 hover:text-blue-400 duration-500">
                    <span className="md:hidden">LOGOUT</span>       
                    <span className="hidden md:inline"><FiLogOut /></span>             
                </a>
            </li>

            </ul>
           </div>
        </div>
    );
}

export default Navigation
