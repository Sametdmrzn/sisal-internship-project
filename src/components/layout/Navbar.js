import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    {
      name: "Sayısal Oyunlar",
      path: "/sayisal-oyunlar",
      children: [
        { name: "Sayısal Loto", path: "/sayisal-oyunlar/sayisal-loto" },
        { name: "Süper Loto", path: "/sayisal-oyunlar/super-loto" },
        { name: "Şans Topu", path: "/sayisal-oyunlar/sans-topu" },
        { name: "On Numara", path: "/sayisal-oyunlar/on-numara" },
      ],
    },
    { name: "Kazı Kazan", path: "/kazi-kazan" },
    { name: "Sanal Oyunlar", path: "/sanal-oyunlar" },
    { name: "Milli Piyango", path: "/milli-piyango" },
    { name: "Hızlı On", path: "/hizli-on" },
    { name: "Sonuçlar", path: "/sonuclar" },
  ];

  return (
    <nav className="flex relative hidden lg:flex justify-between items-center px-[100px] p-4 bg-[#0173B9] text-white h-[60px]">
      <ul className="hidden md:flex gap-[20px] items-center cursor-pointer">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link to={item.path} className="hover:text-blue-300">
              {item.name}
            </Link>

            {/* Eğer children varsa dropdown menü */}
            {item.children && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded hidden group-hover:block">
                {item.children.map((child, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-gray-100">
                    <Link to={child.path}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
