import React from "react"


function Header() {

    return(
      <header className="bg-white shadow-md">
    <div className="h-[90px] flex flex-wrap items-center justify-between px-4 md:px-10">
      {/* Sol Taraf */}
      <div className="flex items-center justify-start">


                {/* Hamburger Menü Butonu */}
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
          className="w-auto max-w-[155px] h-auto max-h-[69px]"
          alt=""
        />
      </div>

      {/* Sağ Taraf */}
      <div className="flex items-center justify-end gap-4 mt-2 md:mt-0">
        <button
          id="loginBtn"
          className="min-w-[100px] md:min-w-[120px] bg-blue-500 text-white py-2 px-4 rounded-full text-sm md:text-base"
        >
          Üye Girişi
        </button>
        <button
          id="registerBtn"
          className="min-w-[100px] md:min-w-[120px] bg-gray-500 text-white rounded-full py-2 px-4 text-sm md:text-base"
        >
          Üye Ol
        </button>
      </div>
    </div>
  </header>
  )


}

export default Header;




