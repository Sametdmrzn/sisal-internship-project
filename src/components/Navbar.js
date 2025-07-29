import React from "react";

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex hidden md:flex justify-between items-center px-[100px] p-4 bg-blue-600 text-white relative">
        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-4">
          <li className="relative group">
            <a href="#">Sayısal Oyunlar</a>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-white text-black  p-2 rounded shadow-lg z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Sayısal Loto
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Süper Loto
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Şans Topu
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  On Numara
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Kazı Kazan</a>
          </li>
          <li>
            <a href="#">Sanal Oyunlar</a>
          </li>
          <li>
            <a href="#">Milli Piyango</a>
          </li>
          <li>
            <a href="#" >Hızlı On</a>
          </li>
          <li className="border-r"></li>
          <li>
            <a href="#"></a>
          </li>
          <li className="relative group">
            <a href="#">Sonuçlar</a>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Çekilişler
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Çekiliş Videoları
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="hidden md:flex gap-4">
          <li><img src="/assets/MainContent-Assets/Union (2).svg"></img></li>
          <li><a>Kampanyalar</a></li>
          <li><img src="/assets/MainContent-Assets/Calendar.svg"></img></li>
          <li className="border-r"></li>
          <li><img src="/assets/MainContent-Assets/Tv.svg"></img></li>
          <li className="border-r"></li>
          <li><img src="/assets/MainContent-Assets/Calendar.svg"></img></li>

        </ul>






      </nav>

      {/* Mobil Menü */}
      <div
        id="mobileMenu"
        className="fixed top-0 left-0 w-full h-full bg-white z-40 hidden flex flex-col items-center justify-center gap-4"
      >
        <a href="#">Menü</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
        <button id="closeBtn" className="text-red-500">
          Kapat
        </button>
      </div>
    </>
  );
}

export default Header;
