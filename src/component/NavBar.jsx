import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';



const NavBar = () => {
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <NavLink to='/jobs' className={linkClass}>
                            <img />
                            <span>React Jobs</span>
                        </NavLink>
                    </div>
                    <div className="flex justify-between items-center space-x-2 md:ml-auto">
                        <NavLink to='/' className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to='/jobs' className={linkClass}>
                            Jobs
                        </NavLink>
                        <NavLink to='/addjobs' className={linkClass} >
                            
                            add Job
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar