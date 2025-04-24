import React from 'react'
import { FaHeart } from "react-icons/fa";       
function FooterScreen() {
  return (
    <div>
        <div className='bg-blue-600'>
            <div className='h-20  text-white flex items-center justify-center'>
                <p className='text-lg'>Bu portföy, <span className='font-semibold'>Muhammed Demirci</span> tarafından geliştirilmiştir.</p> 
            </div>
            <div className='h-20  text-white flex items-center justify-center'>
                <p className='text-lg'>Bu portföy, <span className='font-semibold'>React</span> ve <span className='font-semibold'>Tailwind CSS</span> kullanılarak geliştirilmiştir.</p>
            </div>
            <div className='h-20  text-white flex items-center justify-center '>
                <p className='text-lg flex flex-row'>© 2023 Tüm Hakları Saklıdır. <FaHeart className="text-red-500 animate-pulse h-5 w-5 mt-1 mx-1" /> Muhammed Demirci</p>
            </div>
        </div>
    </div>
  )
}

export default FooterScreen