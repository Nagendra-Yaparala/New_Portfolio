import React from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const navelements = ['About','MySkills','Portfolio','Testimonials','Contact'];

  return (
    <div className='bg-transparent text-white rounded-sm p-4  grid md:grid-cols-3 md:justify-between items-center md:gap-40 fixed z-50 '>
          <div> Logo</div>
        <div className=''>
        <ul className={`flex justify-center items-center gap-5 font-semibold `}>
            {navelements.map((items,index)=>(<li className='hover:text-yellow-600 cursor-pointer' key={index}>{items}</li>))}
           
        </ul> 
            </div>
            <div className='relative'>
              <CiSearch className='absolute left-48 top-2 text-black text-2xl'/>
            <input type='text' className='focus:outline-none text-black bg-gray-100 shadow-slate-50 rounded-md p-2' name='search' placeholder='search'></input>

            </div>
    </div>
  )
}

export default Navbar