import React from 'react'
import { Link } from 'react-router-dom';
import taskImage from '../assets/task1.png'
import profileImage from '../assets/profile.png'

export default function NavbarUn() {
  return (
    <div className="p-2 pl-4 bg-emerald-800 text-white flex">
        <div className=' w-80p flex justify-start'>
          <div className='w-12'>
            <img src={taskImage} alt='Task' style={{height: '36px'}}/>
          </div>
          <div className='p-1 px-4 text-white text-xl hover:bg-emerald-600 menu rounded'>
            <Link to="/">Home</Link>
          </div>
          <div className='p-1 px-4 text-white text-xl hover:bg-emerald-600 rounded'>
            <Link to="/calendar">Calendar</Link>
          </div>
          <div className='p-1 px-4 text-white text-xl hover:bg-emerald-600 rounded'>
            Notifications
          </div>
          <div className='p-1 px-4 text-white text-xl hover:bg-emerald-600 rounded'>
            Contact Us
          </div>
          <div className='p-1 px-4 text-white text-xl  hover:bg-emerald-600 rounded'>
            About Us
          </div>
        </div>
        <div className=' w-20p flex justify-end mr-4'>
          <div className='w-9 grid place-content-center bg-emerald-300 rounded-full'>
            <img src={profileImage} alt='Profile' style={{height: '26px'}} ></img>
          </div>
        </div>
      </div>
  )
}
