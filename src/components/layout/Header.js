import React, { useState } from "react";

function Header() {
  const [HamburgerMenu, setHamburgerMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = () => {
    setHamburgerMenu(!HamburgerMenu);
    setOpenMenu(null);
  };

  const toggleSubMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="h-[90px] flex flex-wrap items-center justify-between px-4 md:px-10">
        {/* Left Side */}
        <div className="flex items-center justify-start">
          <button onClick={toggleMenu} className="md:hidden" id="menuBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <img
            src="/assets/headerAssets/mainLogo.svg"
            className="w-auto max-w-[100px] h-auto ml-3"
            alt="Main Logo"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end gap-2 mt-2 md:mt-0">
          <button className="min-w-[100px] md:min-w-[120px] bg-[#0173b9] text-white py-2 px-4 rounded-full text-[14px] md:text-base font-bold">
            Üye Girişi
          </button>
          <button className="min-w-[100px] md:min-w-[120px] bg-[#23aae2] text-white rounded-full py-2 px-4 text-[14px] md:text-base font-bold">
            Üye Ol
          </button>
          <img
            src="/assets/headerAssets/balance.svg"
            className="bg-[#40CD8C] p-2 rounded ml-8 hidden md:flex"
            alt="Balance"
          />
        </div>

        {/* Hamburger Menu Content */}
        {HamburgerMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start justify-start">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ✕
            </button>

            <ul className="flex flex-col text-[16px] text-[#0173b9] mt-4">
              <li className="">
                <div className="flex">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="/assets/headerAssets/mainLogo.svg"
                      className="w-auto max-w-[100px] h-auto ml-3"
                      alt="Main Logo"
                    />
                  </div>
                  <div className="flex items-center ml-3 justify-end gap-2 mt-2">
                    <button className="min-w-[100px] md:min-w-[120px] bg-[#0173b9] text-white py-2 px-4 rounded-full text-[14px] md:text-base font-bold">
                      Üye Girişi
                    </button>
                    <button className="min-w-[100px] md:min-w-[120px] bg-[#23aae2] text-white rounded-full py-2 px-4 text-[14px] md:text-base font-bold">
                      Üye Ol
                    </button>
                    <img
                      src="/assets/headerAssets/balance.svg"
                      className="bg-[#40CD8C] p-2 rounded ml-8 hidden md:flex"
                      alt="Balance"
                    />
                  </div>
                </div>
              </li>
              <li className="p-[12px] bg-black/8 border-b-[1px] mt-4 border-black/10">
                <button
                  onClick={() => toggleSubMenu("oyunlar")}
                  className="font-bold w-full text-left"
                >
                  Sayısal Oyunlar
                </button>

                {openMenu === "oyunlar" && (
                  <ul className="ml-4 mt-2 flex flex-col gap-1 text-[16px] text-[#383838]">
                    <li>Kazı Kazan</li>
                    <li>Sanal Oyunlar</li>
                    <li>Milli Piyango</li>
                    <li>Hızlı On</li>
                  </ul>
                )}
              </li>
              <li className="p-[12px] bg-black/8 border-b-[1px] border-black/10">
                <button
                  onClick={() => toggleSubMenu("sonuclar")}
                  className="font-bold w-full text-left"
                >
                  Sonuçlar
                </button>
                {openMenu === "sonuclar" && (
                  <ul className="ml-4 mt-2 flex flex-col gap-1 text-[16px] text-[#383838]">
                    <li>Çekilişler</li>
                    <li>Çekiliş Videoları</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
