import React from "react";
import buttonData from "../../data/buttonsData";

function ProdCard({ bannerColor, logoSrc }) {
  return (
    <div
      id="topside"
      className={`${bannerColor} flex  lg:w-[1024px] lg:h-[88px] sm:w-full sm:h-[40px] text-white px-4 py-3 mt-3 mx-auto rounded-t`}
    >
      <div className="flex items-center justify-between flex-nowrap gap-4 w-full">
        {/* Logo */}
        <div className="min-w-[80px] w-20 md:w-28">
          <img
            className="w-[82px] w-[20px]"
            src={logoSrc}
            alt="active game logo"
          />
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center md:justify-end flex-nowrap">
          <li className="flex  min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <div className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">
              Hemen Oyna
            </div>
          </li>
          <li className="flex min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <div className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">
              Nasıl Oynanır ?
            </div>
          </li>
          <li className="flex min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <div className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">
              Sonuçlar
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProdCard;
