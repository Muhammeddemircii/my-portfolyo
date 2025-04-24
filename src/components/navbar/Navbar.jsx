import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="flex justify-end gap-11 pt-6 pr-10">
        <a href="#dashboard">Ana Sayfa</a>
        <a href="#about">Hakkında</a>       
        <a href="#project">Projeler</a>
        <a href="#content">İletişim</a>
      </nav>
      <hr className="border-t border-gray-300 my-7 mx-[1cm]" />
    </div>
  );
}

export default Navbar;
