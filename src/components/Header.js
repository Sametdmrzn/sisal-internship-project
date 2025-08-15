import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="h-[90px] flex flex-wrap items-center justify-between px-4 md:px-10">
        {/* Left Side*/}
        <div className="flex items-center justify-start">
          {/* Hamburger Menu */}
          <button className="md:hidden" id="menuBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <img
            src="/assets/MainContent-Assets/Main.svg"
            className="w-auto max-w-[100px] h-auto ml-3"
            alt=""
          />
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-end gap-2 mt-2 md:mt-0">
          <button
            id="loginBtn"
            className="min-w-[100px] md:min-w-[120px] bg-[#0173b9] text-white py-2 px-4 rounded-full text-sm md:text-base font-bold"
          >
            Üye Girişi
          </button>
          <button
            id="registerBtn"
            className="min-w-[100px] md:min-w-[120px] bg-[#23aae2] text-white rounded-full py-2 px-4 text-sm md:text-base font-bold"
          >
            Üye Ol
          </button>
          <img
            src="/assets/MainContent-Assets/Page 1 (1).svg"
            className="bg-[#40CD8C] p-2 rounded ml-8 hidden md:flex "
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
