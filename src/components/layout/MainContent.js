import React from "react";
import buttonData from "../../data/buttonsData";

function MainContent({
  activeButton,
  setActiveButton,
  setBannerColor,
  setLogoSrc,
}) {
  return (
    <div id="main-content" className="lg:w-[1024px] mx-auto">
      <div className="navigation-path flex mt-4 ml-4">
        <ol className="flex gap-2">
          <li className="text-[#a1a1a1]">Milli Piyango</li>
          <li>{">"}</li>
          <li className="text-[#169ad6]">Çekiliş Sonuçları</li>
        </ol>
      </div>

      <div className="flex overflow-x-auto scrollbar-hidden justify-start mt-9 ml-4 gap-4 whitespace-nowrap">
        {buttonData.map(({ id, text, icon, default: def, active }) => {
          const isActive = activeButton === id;
          const { border, bg, textColor } = isActive ? active : def;
          const currentIcon = isActive && active.icon ? active.icon : icon;
          const handleClick = () => {
            setActiveButton(id);
            setBannerColor(active.bgbanner);
            setLogoSrc(active.icon || icon || "/assets/default-logo.svg");
          };

          return (
            <span
              key={id}
              onClick={handleClick}
              className={`rounded-[6px] flex items-center justify-center gap-[16px] min-w-[70px] min-h-[34px] lg:h-[40px] text-xs sm:h-[38px] lg:min-w-[120px] sm:w-[34px] cursor-pointer select-none ${border} ${bg} ${textColor}`}
            >
              {currentIcon ? (
                <img
                  className="w-[70px] h-[34px] md:w-[118px] md:h-[38px]"
                  src={currentIcon}
                  alt="button icon"
                />
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
