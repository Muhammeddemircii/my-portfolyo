import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      <nav className="flex justify-end gap-11 pt-6 pb-6  pr-10">
        <a href="#dashboard" className='hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'>Ana Sayfa</a>
        <a href="#about" className='hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'>Hakkımda</a>
        <a href="#project" className='hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'>Projeler</a>
        <a href="#content" className='hover:text-gray-700 hover:border-b-blue-600 hover:border-b-2'>İletişim</a>
      </nav>
      <hr className="border-t border-gray-300 mx-[1cm]" />
    </div>

  );
}

export default Navbar;
