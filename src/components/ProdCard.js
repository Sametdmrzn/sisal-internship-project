// ProdCard.jsx
import React from "react";

function ProdCard({ bannerColor, logoSrc }) {
  return (
    <div
      id="topside"
      className={`${bannerColor} flex lg:w-[1024px] lg:h-[88px] sm:w-full sm:h-[40px] text-white px-4 py-3 mt-3 mx-auto rounded-t`}
    >
      <div className="flex items-center justify-between flex-nowrap gap-4 w-full">
        {/* Logo */}
        <div className="min-w-[80px] w-20 md:w-28">
          <img src={logoSrc} alt="active game logo" className="w-full" />
        </div>

        {/* Menü */}
        <ul className="flex flex-wrap gap-2 justify-center md:justify-end flex-nowrap">
          <li className="flex-1 min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Hemen oyna</a>
          </li>
          <li className="flex-1 min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Nasıl Oynanır</a>
          </li>
          <li className="flex-1 min-w-[80px] text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
            <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Sonuclar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProdCard;
