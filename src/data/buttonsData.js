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
      textColor: "text-white font-bold",
      code: null,
    },
  },
  {
    id: 2,
    icon: "/assets/mainContentAssets/sayisalLoto.svg",
    code: "SAYISALLOTO",
    default: {
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      icon: "/assets/mainContentAssets/sayisalLotoNegative.svg",
      border: "border-[1px] border-[#EA0029]",
      bg: "bg-[#EA0029]",
      bgbanner: "bg-gradient-to-b from-[#DF0D1E] to-[#F03F4F]",
      textColor: "text-yellow-200",
    },
  },
  {
    id: 3,
    icon: "/assets/mainContentAssets/superLoto.svg",
    code: "SUPERLOTO",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-[#F56343]",
    },
    active: {
      icon: "/assets/mainContentAssets/superLotoNegative.svg",
      border: "border-[1px] border-[#cc442b]",
      bg: "bg-[#FF5100]",
      bgbanner: "bg-gradient-to-b from-[#FF5102] to-[#FE793C]",
      textColor: "text-[#cc442b]",
    },
  },
  {
    id: 4,
    icon: "/assets/mainContentAssets/sansTopuDesktop.svg",
    code: "SANSTOPU",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      icon: "/assets/mainContentAssets/sansTopuNegative.svg",
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#E50695]",
      bgbanner: "bg-gradient-to-b from-[#ED1893] to-[#F64DB0]",
      textColor: "text-yellow-300",
    },
  },
  {
    id: 5,
    icon: "/assets/mainContentAssets/onPositive.svg",
    code: "ONNUMARA",
    default: {
      border: "border-[1px] border-[#F56343]",
      bg: "bg-white",
      textColor: "text-white",
    },
    active: {
      icon: "/assets/mainContentAssets/onNegative.svg",
      border: "border-[1px] border-[#1f3e5b]",
      bg: "bg-[#A25EB5]",
      bgbanner: "bg-gradient-to-b from-[#9139A8] to-[#A94DBA]",
      textColor: "text-yellow-300",
    },
  },
];

export default buttonData;
