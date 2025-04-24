import { ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

function HomeScreen() {
    return (
        <div>
            <div id='dashboard' className="flex items-center justify-around">

                <div className="flex flex-col">
                    <h1 className="text-6xl font-bold">Muhammed</h1>
                    <h2 className="text-4xl pt-1.5">Frontend Developer</h2>
                    <p className='text-2xl pt-8'>Kullanıcı dostu ve modern arayüzler geliştiriyorum.<br /> Kişisel portföyüme hoş geldiniz!</p>
                    <a href='#project' className="relative px-8 py-3 mt-10 bg-gray-950 text-white font-semibold rounded-full  group transition duration-300 ease-in-out hover:bg-gray-500 shadow-lg">
                        <span className="absolute inset-0 w-0 bg-white opacity-10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span className="relative z-10">Projeleri Gör</span>
                            <ArrowRightIcon className="w-5 h-5" />
                        </div>

                    </a>

                </div>
                <div>
                    <img
                        src="Muhammed_Demirci_photo.jpg"
                        alt="Muhammed Demirci"
                        className="rounded-full object-cover object-[center_-50px] h-96 w-96"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen