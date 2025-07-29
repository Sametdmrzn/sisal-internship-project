import React from "react";

function ResultChecker() {
  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat("tr-TR", { month: "long" }).format(new Date(2000, i))
  );

  const years = Array.from({ length: 101 }, (_, i) => 2000 + i);

return (
  <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-[1024px] bg-white">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">


      {/* 1. sıra - Ay ve Yıl */}
      <div className="flex gap-4 mt-4">
        <select className="border Resaultwidth border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black">
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select className="border Resaultwidth border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 2. sıra - Input */}
      <input
        type="search"
        placeholder="Draw"
        className="border border-gray-300 px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black"
      />

      {/* 3. sıra - Buton */}
      <button className="bg-[#0173b9] px-6 py-2 rounded-full text-white ">
        Filter
      </button>
      </div>

    </div>
);

}

export default ResultChecker;
