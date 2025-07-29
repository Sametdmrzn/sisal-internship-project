import React, { useState } from "react";

const buttonData = [
  {
    id: 1,
    text: "Tüm Oyunlar",
    default: {
      border: "border-[1px] border-[#1d57a6]",
      bg: "bg-white",
      textColor: "text-[#1d57a6]"
    },
    active: {
      border: "border-[1px]",
      bg: "bg-[#005c95]",
      textColor: "text-white"
    }
  },
  {
    id: 2,
    icon: "/assets/MainContent-Assets/MP.svg",
    default: {
      border: "border-[1px] border-[#73b0e8]",
      bg: "bg-white",
      textColor: "text-[#73b0e8]"
    },
    active: {
      border: "border-[1px] border-[#23AAE2]",
      bg: "bg-[#169ad6]",
      textColor: "text-white"
    }
  },
  {
    id: 3,
    icon: "/assets/MainContent-assets/SYL.svg",
    default: {
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-white",
      textColor: "text-white"
    },
    active: {
      icon: "/assets/MainContent-Assets/Lottery Game Logo-Negative.svg",
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-red-800",
      textColor: "text-yellow-200"
    }
  },
  {
    id: 4,
    icon: "/assets/MainContent-Assets/SL.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-[#F56343]"
    },
    active: {
      icon: "/assets/MainContent-Assets/superloto-Negative.svg",
      border: "border-[1px] border-[#cc442b]",
      bg: "bg-[#FF5100]",
      textColor: "text-[#cc442b]"
    }
  },
  {
    id: 5,
    icon: "/assets/MainContent-Assets/ST-line.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white"
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#E50695]",
      textColor: "text-yellow-300"
    }
  },
  {
    id: 6,
    icon: "/assets/MainContent-Assets/MP Playslips Dikey Logolar_ON_outline.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white"
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#A25EB5]",
      textColor: "text-yellow-300"
    }
  }
];



function MainContent({ activeButton, setActiveButton, setBannerColor }) {
  return (
    <div id="main-content" className="  lg:w-[1024px]  mx-auto ">
      <div className="navigation-path flex mt-4">
        <ol className="flex gap-2">
          <li className="text-black">Milli Piyango</li>
          <li>{">"}</li>
          <li className="text-blue-500">Sayısal Loto Sonuçlar</li>
        </ol>
      </div>

      <div className="flex overflow-x-auto scrollbar-hidden justify-start   mt-9  gap-4 whitespace-nowrap ">
        {buttonData.map(({ id, text, icon, default: def, active }) => {
          const isActive = activeButton === id;
          const { border, bg, textColor } = isActive ? active : def;
          const currentIcon = isActive && active.icon ? active.icon : icon;

          const handleClick = () => {
            setActiveButton(id);
            setBannerColor(active.bg); // aktif butonun bg rengi banner’a yansır
          };

          
          

          return (
            <span
              key={id}
              onClick={handleClick}
              className={`${border} ${bg} ${textColor} rounded px-2 py-2 flex items-center justify-center gap-2 min-w-[70px] h-10 `}
            >
              {currentIcon ? (
                <img src={currentIcon} alt="button icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
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

