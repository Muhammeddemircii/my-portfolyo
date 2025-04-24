import React, { useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('dashboard');
  return (
    <div className="fixed top-0 w-full z-50 bg-white ">
      <nav className="flex justify-end gap-11 pt-6 pb-6  pr-10">
        <a href="#dashboard" onClick={()=>{setActiveSection('dashboard')}} className={activeSection==='dashboard' ?'text-blue-500' : 'hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2' }>Ana Sayfa</a>
        <a href="#about" onClick={()=>{setActiveSection('about')}} className={activeSection==='about' ?  'text-blue-500' :'hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2' }>Hakkımda</a>
        <a href="#project" onClick={()=>{setActiveSection('project')}} className={activeSection==='project' ?  'text-blue-500' : 'hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'}>Projeler</a>
        <a href="#contact"  onClick={()=>{setActiveSection('contact')}} className={activeSection==='contact' ?  'text-blue-500': 'hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'}>İletişim</a>
      </nav>
      <hr className="border-t border-gray-300 mx-[1cm]" />
    </div>

  );
}

export default Navbar;
