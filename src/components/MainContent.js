import React from "react";

const buttonData = [
  {
    id: 1,
    text: "Tüm Oyunlar",
    default: {
      border: "border-[1px] border-[#1d57a6]",
      bg: "bg-white",
      textColor: "text-[#1d57a6]",
    },
    active: {
      border: "border-[1px] border-transparent",
      bg: "bg-[#005C95]",
      bgbanner: "bg-[#005C95]",
      textColor: "text-white",
    },
  },
  {
    id: 2,
    icon: "/assets/MainContent-Assets/MP.svg",
    default: {
      border: "border-[1px] border-[#73b0e8]",
      bg: "bg-white",
      textColor: "text-[#73b0e8]",
    },
    active: {
      border: "border-[1px] border-[#23AAE2]",
      bg: "bg-[#23AAE2]",
      bgbanner: "bg-gradient-to-b from-[#0989D1] to-[#239FE0]",
      textColor: "text-white",
    },
  },
  {
    id: 3,
    icon: "/assets/MainContent-assets/SYL.svg",
    default: {
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      icon: "/assets/MainContent-Assets/Lottery Game Logo-Negative.svg",
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-[#EA0029]",
      bgbanner: "bg-gradient-to-b from-[#DF0D1E] to-[#F03F4F]",
      textColor: "text-yellow-200",
    },
  },
  {
    id: 4,
    icon: "/assets/MainContent-Assets/SL.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-[#F56343]",
    },
    active: {
      icon: "/assets/MainContent-Assets/superloto-Negative.svg",
      border: "border-[1px] border-[#cc442b]",
      bg: "bg-[#FF5100]",
      // DÜZELTİLDİ: baştaki boşluk kaldırıldı
      bgbanner: "bg-gradient-to-b from-[#FF5102] to-[#FE793C]",
      textColor: "text-[#cc442b]",
    },
  },
  {
    id: 5,
    icon: "/assets/MainContent-Assets/ST-line.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#E50695]",
      bgbanner: "bg-gradient-to-b from-[#ED1893] to-[#F64DB0]",
      textColor: "text-yellow-300",
    },
  },
  {
    id: 6,
    icon: "/assets/MainContent-Assets/MP Playslips Dikey Logolar_ON_outline.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#A25EB5]",
      bgbanner: "bg-gradient-to-b from-[#9139A8] to-[#A94DBA]",
      textColor: "text-yellow-300",
    },
  },
];

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
          const { border, bg, bgbanner, textColor } = isActive ? active : def;
          const currentIcon = isActive && active.icon ? active.icon : icon;

          const handleClick = () => {
            setActiveButton(id);
            // Banner arka planı: aktif butonun bgbanner’ı
            setBannerColor(active.bgbanner);
            // Logo: aktif ikon varsa onu, yoksa normal icon'u setle
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
