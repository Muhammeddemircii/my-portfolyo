import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function project() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animasyon süresi (opsiyonel)
    });
  }, []);
  return (
    <div>
      <div id='project' className='h-screen py-20'>
        <div className='flex flex-col items-center justify-center '>
          <h1 data-aos='fade-down' className='text-6xl font-bold'>Projelerim</h1>
          <p data-aos='fade-up' className='text-2xl pt-8'>Kendi projelerimi ve yaptığım çalışmaları inceleyebilirsiniz.</p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-36">
            <div data-aos="flip-left" className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <a href='https://www.yorumperisi.com'><h2 className="text-xl font-bold inline-block relative group">Yorum Perisi
                <span className='block h-[2px] w-[60%] bg-blue-600 mx-auto mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center'></span></h2></a>
              <a href='https://www.yorumperisi.com'><img src="/logo.webp" alt="" className='w-45 h-45 mx-auto' /></a>
              <p className="mt-2">Kitap, Film incelemeleri ve kod detaylarının olduğu blog sitem</p>
            </div>

            <div data-aos="flip-up"className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <a href='https://www.elaratarim.com'><h2 className="text-xl font-bold inline-block relative group">Elara Tarım
                <span className="block h-[2px] w-[60%] bg-blue-600 mx-auto mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span></h2>
              </a>
              <a href='https://www.elaratarim.com'><img src="/logo-favicon.ico" alt="" className='w-45 h-45 mx-auto' /></a>
              <p className="mt-2 text-center">Tarım firmasının web sitesi</p>
            </div>


            <div data-aos="flip-right" className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
              <a href='https://muhammeddemircii.github.io/pokedex-main/'><h2 className="text-xl font-bold inline-block relative group">Pokedex
                <span className='block h-[2px] w-[60%] bg-blue-600 mx-auto mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center '></span></h2></a>
              <a href='https://muhammeddemircii.github.io/pokedex-main/'><img src="/pokemon.jpg" alt="" className='w-45 h-45 mx-auto' /></a>
              <p className="mt-2 text-center">Poke api verilerini çektiğim web sitesi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default project