import React from 'react'
import { FaHeart } from "react-icons/fa";       
function FooterScreen() {
  return (
    <div className='bg-black flex flex-row  items-center justify-around px-36'>
        <div>
            <h1 className='text-2xl text-white'>Muhammed Demirci Kimdir?</h1>
            <p className='mt-3 text-white'>Ben 15/05/2001'de Elazığ da Dünyaya geldim. </p>
            <p className=' text-white'>Üniversiteyi Burdur Mehmet Akif Ersoy Üniversitesinde okudum. </p>
            <p className=' text-white'>Şimdi React üzerine kendimi geliştirmeye devam ediyorum.</p>
            <p className=' text-white'>Hobilerim kitap okumak, film/dizi izlemek, yüzmek, müzik dinlemek<br/> ve yürüyüş yapmak.</p>
        </div>
        <div className='border-l border-white h-44 mx-4'></div>
        <div>
            <div className='h-20  text-white flex items-center justify-center'>
                <p className='text-lg'>Bu portföy, <span className='font-semibold'>Muhammed Demirci</span> tarafından geliştirilmiştir.</p> 
            </div>
            <div className='h-20  text-white flex items-center justify-center'>
                <p className='text-lg'>Bu portföy, <span className='font-semibold'>React</span> ve <span className='font-semibold'>Tailwind CSS</span> kullanılarak geliştirilmiştir.</p>
            </div>
            <div className='h-20  text-white flex items-center justify-center '>
                <p className='text-lg flex flex-row'>© 2025 Tüm Hakları Saklıdır. <FaHeart className="text-red-500 animate-pulse h-5 w-5 mt-1 mx-1" /> Muhammed Demirci</p>
            </div>
        </div>
    </div>
  )
}

export default FooterScreen