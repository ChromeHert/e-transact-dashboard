import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdSpaceDashboard } from 'react-icons/md';


const Header = ({ darkMode }) => {
  return (
    <>
      <div className="fixed z-50 top-0 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end'>

              <button className='inline-flex items-center p-2 text-gray-500 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
              <HiOutlineMenuAlt2 className='text-2xl'/>
              </button>
              <a href="" className='flex ms-2 md:me-24'>
                <MdSpaceDashboard className='h-8 me-3 text-xl text-violet-500'/>
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Dashboard
                </span>
              </a>
            </div>

            <button className='dark:bg-slate-50 dark:text-slate-700 rounded-full p-2'>
              {darkMode ? <FaSun/> : <FaMoon/>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header