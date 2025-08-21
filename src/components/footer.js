import React from "react";

function footer() {
  return (
    //helpbox-container
    <div
      id="helpbox-home"
      className="bg-[#005c95] flex py-[15px] pl-[30px] pr-[15px]"
    >
      <div id="helpbox-container" className="flex-col relative w-full h-full">
        <div className="text-white text-[19px] mb-[20px] leading-[36px] self-baseline font-medium tracking-[-0.4px]">
          Yardıma mı ihtiyacın var?
        </div>
        <div id="helpbox-categories" className="relative m-auto">
          <div className="mb-[4px]">
            <div className="flex md:flex-col items-start">
              <img
                className="mr-[10px] h-[24px] w-[24px]"
                src="/assets/MainContent-Assets/phone.svg"
              ></img>
              <div className="flex-col ">
                <div className="text-white font-medium">Destek</div>
                <div className="text-white text-[14px]">0850 390 73 33</div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="mb-[4px]">
              <div className="flex md:flex-col items-start">
                <img
                  className="mr-[10px] h-[24px] w-[24px]"
                  src="/assets/MainContent-Assets/mail.svg"
                ></img>
                <div className="flex-col ">
                  <div className="text-white font-medium">E-posta</div>
                  <div className="text-white text-[14px]">
                    destek@millipiyangoonline.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[4px]">
              <div className="flex md:flex-col items-start">
                <img
                  className="mr-[10px] h-[24px] w-[24px]"
                  src="/assets/MainContent-Assets/faq.svg"
                ></img>
                <div className="flex-col ">
                  <div className="text-white font-medium">
                    Sıkça Sorulan Sorular
                  </div>
                  <div className="flex text-white text-[14px]">
                    İnceleyin
                    <img src="/assets/MainContent-Assets/Arrow-Small-Right-White.svg"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
