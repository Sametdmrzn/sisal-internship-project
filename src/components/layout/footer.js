import React, { useState } from "react";

function Footer() {
  return (
    <>
      <div className="flex relative bg-[#005c95] lg:flex-col md:mx-[auto] md:w-[950px] md:rounded-[20px] md:h-[195.03px] lg:h-[130px] bottom-[-65px]">
        <div className="flex flex-col relative lg:flex-row w-full h-full md:items-start lg:items-center py-[15px] pl-[30px] pr-[15px]">
          <div className="flex lg:flex-row lg:w-[217px] lg:ml-[10px] text-white text-[19px] sm:text-[32px] mb-[20px] leading-[36px] font-medium tracking-[-0.4px] ">
            Yardıma mı ihtiyacın var?
          </div>
          <div className="relative flex flex-col md:flex-row lg:flex-row md:gap-8">
            <div className="mb-[4px]">
              <div className="flex md:flex-col items-start">
                <img
                  className="mr-[10px] h-[24px] w-[24px]"
                  src="/assets/footerSocial/phone.svg"
                ></img>
                <div>
                  <div className="text-white font-medium">Destek</div>
                  <div className="text-white text-[14px]">0850 390 73 33</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[4px]">
                <div className="flex md:flex-col items-start">
                  <img
                    className="mr-[10px] h-[24px] w-[24px]"
                    src="/assets/footerSocial/mail.svg"
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
                    src="/assets/footerSocial/faq.svg"
                  ></img>
                  <div className="flex-col">
                    <div className="text-white font-medium">
                      Sıkça Sorulan Sorular
                    </div>
                    <div className="flex text-white text-[14px]">
                      İnceleyin
                      <img src="/assets/footerSocial/rightArrow.svg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-[#005c95] to-[#0d9bf2] items-center p-4">
        <div className=".mp-background">
          <div className="mt-[100px] mb-[35px] ">
            <img
              className="w-[155px] h-[69px] md:ml-[120px]"
              src="/assets/footerSocial/milliLogo.svg"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-start gap-3 justify-center">
              <div className="mx-[10px]">
                <div>
                  <hr className="w-[270px] md:hidden"></hr>
                  <span className="font-medium text-white">Sisal Şans</span>
                </div>
                <ul className="list-none text-white">
                  <li>Biz Kimiz</li>
                  <li>Üyelik Sözleşmesi</li>
                  <li>Sorumlu Oyun</li>
                  <li>Güvenlik Açığı Bildirimi</li>
                  <li>Blog</li>
                  <li>İkramiye Ödemeleri</li>
                  <li>Çekilişler hakkında</li>
                  <li>Bilgi Edinme Başvuruları</li>
                  <li>Üye Aydınlatma Metni</li>
                  <li>Çerez Politikası</li>
                </ul>
              </div>
              <div className="mx-[10px]">
                <div>
                  <hr className="w-[200px] md:hidden"></hr>
                  <span className="font-medium text-white">Oyunlar</span>
                </div>
                <ul className="list-none text-white">
                  <li>Milli Piyango</li>
                  <li>Kazı Kazan</li>
                  <li>Sanal Oyunlar</li>
                  <li>Çılgın Sayısal Loto</li>
                  <li>Süper Loto</li>
                  <li>Şans Topu</li>
                  <li>On Numara</li>
                  <li>Hızlı On</li>
                  <li>Hızlı Oyna Hızlı</li>
                  <li>Kazan</li>
                </ul>
              </div>
              <div className="mx-[10px]">
                <div>
                  <hr className="w-[200px] md:hidden"></hr>
                  <span className="font-medium text-white">
                    Çekiliş Sonuçları
                  </span>
                </div>
                <ul className="list-none text-white">
                  <li>Yılbaşı Çekiliş</li>
                  <li>Sonuçları</li>
                  <li>Milli Piyango Sonuçları</li>
                  <li>Sayısal Loto Sonuçları</li>
                  <li>Süper Loto Sonuçları</li>
                  <li>Şans Topu Sonuçları</li>
                  <li>On Numara Sonuçları</li>
                  <li>Hızlı On Sonuçları</li>
                </ul>
              </div>
              <div className="mx-[10px]">
                <div>
                  <hr className="w-[200px] md:hidden"></hr>
                  <span className="font-medium text-white">Kurallar</span>
                </div>
                <ul className="list-none text-white">
                  <li>Milli Piyango</li>
                  <li>Kurallar</li>
                  <li>Çılgın Sayısal Loto</li>
                  <li>Kurallar</li>
                  <li>Süper Loto Kurallar</li>
                  <li>Şans Topu Kurallar</li>
                  <li>On Numara Kurallar</li>
                  <li>Hızlı On Kurallar</li>
                  <li>Kazı Kazan Kurallar</li>
                  <li>Hızlı Oyna Hızlı</li>
                  <li>Kazan Kurallar</li>
                </ul>
              </div>
              <div className="mx-[10px]">
                <p className="font-bold text-white text-[16px] leading-[20px] mb-[5px] mt-[20px]">
                  Sosyal Medya
                </p>
                <div>
                  <ul className="flex list-none text-white items-start gap-2">
                    <li className="flex rounded-full bg-white items-center justify-center w-[27px] h-[27px]">
                      <img
                        src="/assets/footerSocial/facebook.svg"
                        className="w-[17px] h-[17px] text-[27px]"
                        alt="facebook"
                      ></img>
                    </li>
                    <li className="flex rounded-full bg-white items-center justify-center w-[27px] h-[27px]">
                      <img
                        src="/assets/footerSocial/instagram.svg"
                        className="w-[17px] h-[17px] text-[27px]"
                        alt="instagram"
                      ></img>
                    </li>
                    <li className="flex rounded-full bg-white items-center justify-center w-[27px] h-[27px]">
                      <img
                        src="/assets/footerSocial/xİcon.avif"
                        className="w-[17px] h-[17px] text-[27px]"
                        alt="x"
                      ></img>
                    </li>
                  </ul>
                </div>
                <div className="text-white font-bold mt-2 mb-[10px]">
                  Uygulamamıza göz atın
                </div>
                <div className="store-buttons-container flex flex-wrap gap-[8px] w-[212px]">
                  <div className="flex items-center justify-center h-[32px] w-[100px] leading-[10px] bg-black rounded-[8px] gap-2">
                    <img
                      className="h-[13px] w-[12px]"
                      src="/assets/footerSocial/ios.webp"
                      alt="ios"
                    ></img>
                    <div className="text-white text-[11px] font-medium">
                      App Store
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-[32px] w-[100px] leading-[10px] bg-black rounded-[8px] gap-2">
                    <img
                      className="h-[13px] w-[12px]"
                      src="/assets/footerSocial/android.png"
                      alt="google play"
                    ></img>
                    <div className="text-white text-[11px] font-medium">
                      Google Play
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-[32px] w-[100px] leading-[10px] bg-black rounded-[8px] gap-2">
                    <img
                      className="h-[13px] w-[12px]"
                      src="/assets/footerSocial/huaweiIcon.webp"
                      alt="huawei"
                    ></img>
                    <div className="text-white text-[11px] font-medium">
                      Huawei Store
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-[32px] w-[100px] leading-[10px] bg-black rounded-[8px] gap-2">
                    <img
                      className="h-[13px] w-[12px]"
                      src="/assets/footerSocial/galaxy.webp"
                      alt="galaxy store"
                    ></img>
                    <div className="text-white text-[11px] font-medium">
                      Galaxy Store
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="w-[23px] h-[26px] mt-[20px]"
                    src="/assets/footerSocial/mpQr.jpeg"
                    alt="qr code"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[30px] md:mt-[45] md:mr-[30px] md:ml-[20px] md:ml-[105px] ml-[20px] md:h-[80px] text-center border-t-[1px] border-[#8ec5e7] md:border-white h-[96px] md:h-[80px]">
            <p className="mt-[15px] md:mt-[20px] ml-[5px] md:ml-[80px] mr-[5px] md:mr-[140px] text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-center font-medium md:text-white text-[#8ec5e7]">
              Sisal Şans, Sisal Şans’a ait olan tüm metin, grafik görselleri ve
              yazılımlarla ilişkili tüm telif haklarını elinde tutmaktadır.
              Sisal Şans’ın izni olmaksızın, bu web sitesindeki hiçbir metin,
              yazılım ve grafik görseli aktaramaz, tadil edemez, kullanamaz ya
              da başka bir şekilde değiştiremezsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className=" mb-[-40px] h-[80px] w-full bg-[#005c95]"></div>
    </>
  );
}

export default Footer;
