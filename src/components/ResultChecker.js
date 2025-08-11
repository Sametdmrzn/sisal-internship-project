import React from "react";

function ResultChecker() {
  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat("tr-TR", { month: "long" }).format(new Date(2000, i))
  );
  const years = Array.from({ length: 101 }, (_, i) => 2000 + i);

return (
  <div className="w-full">
    <div className="flex flex-col sm:flex-row flex-nowrap justify-center items-center gap-4 mx-auto max-w-[1024px] bg-white p-4">
      {/* months and years*/}
      <div className="flex gap-4">
        <select
          id="1"
          className="border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black h-[40px] w-[185px] lg:w-[246px] lg:h-[40px]   "
        >
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
        
        <select
          id="2"
          className="border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black h-[40px] w-[185px] lg:w-[246px] lg:h-[40px] md:w-[140px] md:h-[40px]"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* search and filter */}
      <div id="3" className="flex flex-col sm:flex-row gap-4 w-full ">
        <input
          type="search"
          placeholder="Draw"
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black lg:w-[246px] lg:h-[40px] md:w-[140px] md:h-[40px]"
        />
         <button
          id="4"
          className="bg-[#0173b9] px-6 py-2 rounded-full text-white h-[40px] lg:w-[146px] lg:h-[40px] md:w-[140px] md:h-[40px]"
        >
          Sonuçlar
        </button>
      </div>
    </div>
  </div>
);
}

export default ResultChecker;
