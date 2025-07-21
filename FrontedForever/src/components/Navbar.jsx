import React from 'react'
import { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (

    <div className='w-full h-25 flex justify-between items-center bg-gray-200'>

        <img src={assets.logo} className='h-15 ml-15' alt="" />

        <ul className='hidden sm:flex justify-content items-center flex-row mr-20'>
            <NavLink to='/' className='flex flex-col items-center w-full mr-6'>
                <p>Home</p>
                <hr className='w-full border-none h-[2.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col mr-6 items-center w-20'>
                <p>Collection</p>
                <hr className='w-full border-none h-[2.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center mr-6'>
                <p>About</p>
                <hr className='w-full border-none h-[2.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink   to='/contact' className='flex flex-col items-center mr-6 '>
                <p>Contact</p>
                <hr className='w-full border-none h-[2.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6 mr-20 flex-shrink-0 overflow-visible'>
            <img src={assets.search_icon}   className='w-5 h-5 cursor-pointer'/>

            <div className='group relative'>
                <img src= {assets.profile_icon} className="w-5 h-5 cursor-pointer " alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>

            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center text-white bg-black rounded-full text-[8px]'>10</p>
            </Link>

            <img onClick={ () => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

        </div>

        {/* Sidebar Menu for Small Screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar
