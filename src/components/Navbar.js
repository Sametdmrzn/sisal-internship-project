import React from "react";

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="relative flex hidden lg:flex justify-between items-center px-[100px] p-4 bg-[#0173B9] text-white h-[60px]  ">
        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-4 items-center cursor-pointer">
          <li className="relative group items-center">
            <a className="flex items-center ">Sayısal Oyunlar</a>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block left-0 top-[60px] bg-[#169AD6] w-[177px] text-white  rounded shadow-lg z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Sayısal Loto
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Süper Loto
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Şans Topu
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  On Numara
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a>Kazı Kazan</a>
          </li>
          <li>
            <a>Sanal Oyunlar</a>
          </li>
          <li>
            <a>Milli Piyango</a>
          </li>
          <li>
            <a >Hızlı On</a>
          </li>
          <li className="border-r ">
          </li>
          <li>
            <a></a>
          </li>
          <li className="relative group">
            <a className=" flex items-center" >Sonuçlar</a>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block left-0 top-[60px] bg-[#169AD6] w-[177px]  text-white  rounded shadow-lg z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Çekilişler
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Çekiliş Videoları
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="hidden md:flex gap-4">
          <li><img className="w-6 h-6" src="/assets/MainContent-Assets/Union (2).svg"></img></li>
          <li><a>Kampanyalar</a></li>
          <li><img className="w-6 h-6" src="/assets/MainContent-Assets/Calendar.svg"></img></li>
          <li className="border-r"></li>
          <li><img className="w-6 h-6" src="/assets/MainContent-Assets/Tv.svg"></img></li>
          <li className="border-r"></li>
          <li><img className="w-6 h-6" src="/assets/MainContent-Assets/Calendar.svg"></img></li>

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
