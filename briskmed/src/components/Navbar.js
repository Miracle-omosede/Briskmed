import React from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from '../assets/svg/logo-light.svg';
import star from '../assets/svg/star.svg';

const Navbar = () => {
  return (
    <div className='flex mx-6 Navbar'>
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='logo'>
          <img src={logo} alt="light-logo" />
        </div>

        {/* buttons */}
        <div className='links flex'>
          <ul className='flex gap-5'>
            <li className='nav-btn'>
                <button className='capitalize py-3 px-3' >
                  <span></span>
                  Hospital Portal
                </button>
            </li>

            <li className='nav-btn flex flex-row'>
                <button className='flex flex-row items-center py-3 px-3 justify-center capitalize' >
                  <span className='mr-2'>
                    <img src={star} alt="star-svg" />
                  </span>
                  <span>Hospital Ratings/Reviews</span>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// import React from 'react'

// import {MenuIcon} from '@heroicons/react/outline'

// const Navbar = () => {
//   return (
//     <div className='w-screen h-[80px] z-10 drop-shadow-lg fixed '>
//       <div className='flex justify-between h-full w-full items-center'>

//         {/* brand-logo */}
//         <div className="flex items-center">
          
//         </div>
//       </div>
//         <MenuIcon className="w-5" />
//     </div>
//   )
// }

// export default Navbar;