import React from "react";

function ProdCard({ bannerColor }) {
return (
  <div id="topside" className={`${bannerColor} text-white px-4 py-3 w-full max-w-[1200px] mt-3 mx-auto rounded-t`}>
    <div className="flex items-center justify-between flex-wrap gap-4">
      
      <div className="flex-shrink-0">
        <img src="/assets/MainContent-Assets/SYL.svg" alt="SYL logo" className="w-20 md:w-28" />
      </div>
      
      <ul className="flex flex-wrap justify-end gap-2 ml-auto">
        <li className="text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
          <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Hemen oyna</a>
        </li>
        <li className="text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
          <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Nasıl Oynanır</a>
        </li>
        <li className="text-white rounded-full hover:bg-black/20 px-3 py-1 text-center cursor-pointer">
          <a href="#" className="text-[13px] md:text-[14px] font-bold whitespace-nowrap">Sonuclar</a>
        </li>
      </ul>

    </div>
  </div>
);


}


export default ProdCard;
