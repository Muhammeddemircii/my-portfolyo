import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function ContactScreen() {
    return (
        <div>
            <div id='contact' className='py-20 px-36'>  
                <h1 className='text-4xl font-bold mb-8 border-b-2 inline-block border-blue-400 hover:border-blue-600 transition-transform '>İletişim</h1>
                <div className='flex flex-row justify-between'>
                    <div>
                        <div className="flex flex-row gap-5">
                            <FaPhoneAlt className='text-xl text-blue-600 mt-2' />
                            <p className='text-2xl'>Telefon</p>
                        </div>
                        <p className='ml-10 mt-3'>+90 (543) 814 27 22</p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-5">
                            <IoMail className='text-xl text-blue-600 mt-2' />
                            <p className='text-2xl'>E-mail</p>
                        </div>
                        <p className='ml-10 mt-3'><a href="mailto:muhammeddemrci@icloud.com">muhammeddemrci@icloud.com</a></p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-5">
                            <FaGithub  className='text-xl text-blue-600 mt-2' />
                            <p className='text-2xl'>Github</p>
                        </div>
                        <p className='ml-10 mt-3'><a href="https://github.com/Muhammeddemircii">Github'a git</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen