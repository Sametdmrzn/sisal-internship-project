import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex relative hidden lg:flex justify-between items-center px-[100px] p-4 bg-[#0173B9] text-white h-[60px]">
        <ul className="hidden md:flex gap-[20px] items-center cursor-pointer">
          <li className="relative group items-center">
            <span className="flex h-[60px] items-center ">Sayısal Oyunlar</span>
            <ul className="absolute hidden group-hover:block left-0 top-[60px] bg-[#169AD6] w-[177px] text-white rounded shadow-lg z-50">
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Sayısal Loto
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Süper Loto
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Şans Topu
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  On Numara
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div>Kazı Kazan</div>
          </li>
          <li>
            <div>Sanal Oyunlar</div>
          </li>
          <li>
            <div>Milli Piyango</div>
          </li>
          <li>
            <div>Hızlı On</div>
          </li>
          <li className="relative group">
            <div className=" flex items-center h-[60px]">Sonuçlar</div>
            <ul className="absolute hidden group-hover:block left-0 top-[60px] bg-[#169AD6] w-[177px] text-white rounded shadow-lg z-50">
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Çekilişler
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 hover:bg-[#23AAE2]">
                  Çekiliş Videoları
                </div>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="hidden md:flex gap-4">
          <li>
            <img
              className="w-6 h-6"
              src="/assets/navbarAssets/campaigns.svg"
            ></img>
          </li>
          <li>Kampanyalar</li>
          <li>
            <img
              className="w-6 h-6"
              src="/assets/navbarAssets/calendar.svg"
            ></img>
          </li>
          <li className="border-r"></li>
          <li>
            <img className="w-6 h-6" src="/assets/navbarAssets/Tv.svg"></img>
          </li>
          <li className="border-r"></li>
          <li>
            <img
              className="w-6 h-6"
              src="/assets/navbarAssets/blogİcon.svg"
            ></img>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
