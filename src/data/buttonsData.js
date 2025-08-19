const buttonData = [
  {
    id: 1,
    text: "Tüm Oyunlar",
    default: {
      border: "border-[1px] border-[#1d57a6]",
      bg: "bg-white",
      textColor: "text-[#1d57a6]",
      code: null,
    },
    active: {
      border: "border-[1px] border-[#1d57a6]",
      bg: "bg-[#005C95]",
      bgbanner: "bg-[#005C95]",
      textColor: "text-white",
      code: null,
    },
  },
  {
    id: 2,
    icon: "/assets/MainContent-assets/sayısalloto.svg",
    default: {
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-white",
      textColor: "text-white",
      code: "SAYISALLOTO",
    },
    active: {
      icon: "/assets/MainContent-Assets/sayısallotonegative.svg",
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-[#EA0029]",
      bgbanner: "bg-gradient-to-b from-[#DF0D1E] to-[#F03F4F]",
      textColor: "text-yellow-200",
      code: "SAYISALLOTO",
    },
  },
  {
    id: 3,
    icon: "/assets/MainContent-Assets/superloto.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-[#F56343]",
      code: "SUPERLOTO",
    },
    active: {
      icon: "/assets/MainContent-Assets/superloto-Negative.svg",
      border: "border-[1px] border-[#cc442b]",
      bg: "bg-[#FF5100]",
      bgbanner: "bg-gradient-to-b from-[#FF5102] to-[#FE793C]",
      textColor: "text-[#cc442b]",
      code: "SUPERLOTO",
    },
  },
  {
    id: 4,
    icon: "/assets/MainContent-Assets/sanstopudesktop.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
      code: "SANSTOPU",
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#E50695]",
      bgbanner: "bg-gradient-to-b from-[#ED1893] to-[#F64DB0]",
      textColor: "text-yellow-300",
      code: "SANSTOPU",
    },
  },
  {
    id: 5,
    icon: "/assets/MainContent-Assets/onnumaradesktop.svg",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
      code: "ONNUMARA",
    },
    active: {
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#A25EB5]",
      bgbanner: "bg-gradient-to-b from-[#9139A8] to-[#A94DBA]",
      textColor: "text-yellow-300",
      code: "ONNUMARA",
    },
  },
];

export default buttonData;
