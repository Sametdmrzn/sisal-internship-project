import React from "react";
import buttonData from "../data/buttonsData";

function MainContent({ activeButton, setActiveButton, setBannerColor, setLogoSrc }) {
  return (
    <div id="main-content" className="lg:w-[1024px] mx-auto">
      <div className="navigation-path flex mt-4">
        <ol className="flex gap-2">
          <li className="text-black">Milli Piyango</li>
          <li>{">"}</li>
          <li className="text-blue-500">Çekiliş Sonuçları</li>
        </ol>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hidden justify-start mt-9 gap-4 whitespace-nowrap">
        {buttonData.map(({ id, text, icon, default: def, active }) => {
          const isActive = activeButton === id;
          const { border, bg, textColor } = isActive ? active : def;
          const currentIcon = isActive && active.icon ? active.icon : icon;

          const handleClick = () => {
            setActiveButton(id);
            setBannerColor(active.bg);
            setLogoSrc(active.icon || icon || "/assets/default-logo.svg");
          };

          return (
            <span
              key={id}
              onClick={handleClick}
              className={`${border} ${bg} ${textColor} rounded-[6px] flex items-center justify-center gap-[16px] min-w-[70px] lg:h-[40px] min-h-[34px] text-xs sm:h-[38px] lg:min-w-[120px] sm:w-[34px] cursor-pointer select-none px-3`}
            >
              {currentIcon ? (
                <img src={currentIcon} alt="button icon" />
              ) : (
                text
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MainContent;