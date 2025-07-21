import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center flex-row bg-gray-200'>

        <img src={assets.logo} className='w-36' alt="" />

        <ul className='flex justify-content items-center flex-row mr-20'>
            
            <NavLink to='/' className='flex flex-col items-center w-full mr-6'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col mr-6 items-center w-20'>
                <p>Collection</p>
                <hr className='w-full border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center mr-6'>
                <p>About</p>
                <hr className='w-full border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

            <NavLink   to='/contact' className='flex flex-col items-center mr-6 '>
                <p>Contect</p>
                <hr className='w-full border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

        </ul>
        
    </div>
  )
}

export default Navbar
