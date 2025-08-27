import React, { useEffect, useState } from "react";
import axios from "axios";
import buttonImages from "../../data/buttonImages";
import buttonData from "../../data/buttonsData";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import numeral from "numeral";

numeral.register("locale", "tr", {
  delimiters: { thousands: ",", decimal: "." },
  abbreviations: {
    thousand: "BİN",
    million: "MİLYON",
    billion: "MİLYAR",
    trillion: "TRİLYON",
  },
  ordinal: function (number) {
    return number === 1 ? "er" : "e";
  },
  currency: { symbol: "₺" },
});
numeral.locale("tr");

function Tickets({ activeButton }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}`)
      .then((res) => setGames(res.data))
      .catch(() => setError("data could not be received"));
  }, []);

  const activeButtonData = buttonData.find((btn) => btn.id === activeButton);

  const filteredTickets = activeButtonData?.code
    ? games.filter((item) => {
        const gameCode =
          item.next.drawDetail.attributes.find(
            (attr) => attr.name === "static.game.acronym"
          )?.value || "Unknown";

        return gameCode === activeButtonData.code;
      })
    : games;

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white p-4 max-w-[1024px] mx-auto mt-4">
      {filteredTickets.map((item) => {
        const gameCode =
          item.next.drawDetail.attributes.find(
            (attr) => attr.name === "static.game.acronym"
          )?.value || "Unknown";

        const gameButton = buttonData.find((btn) => btn.code === gameCode);
        const lastDrawNumber = item.last.drawDetail.drawId.number;
        const nextDrawDate = format(
          new Date(item.next.drawDetail.drawDate),
          "dd.MM.yyyy",
          { locale: tr }
        );

        const lastDrawDate = format(
          new Date(item.last.drawDetail.drawDate),
          "dd.MM.yyyy",
          { locale: tr }
        );
        const lastDrawTime = format(
          new Date(item.last.drawDetail.drawDate),
          "HH:mm"
        );
        const nextDrawNumber = item.next.drawDetail.drawId.number;
        const nextJackpot = numeral(
          item.last.drawDetail.attributes.find(
            (attr) => attr.name === "jackpot"
          )?.value
        )
          .format("0,0a")
          .toUpperCase();

        return (
          <div
            key={item.game}
            className="flex flex-col items-center md:flex-row md:items-center bg-white my-2 shadow-2xl rounded-sm"
          >
            <div className="flex items-center ml-[20px]">
              <img
                src={buttonImages[gameCode].mobile}
                alt={gameCode}
                className="block md:hidden object-contain w-[135px] h-[44px] mt-[10px] max-w-full max-h-full justify-center"
              />
              <img
                src={buttonImages[gameCode].desktop}
                alt={gameCode}
                className="hidden md:block object-contain w-[150px] h-[90px] max-w-full max-h-full justify-center"
              />
            </div>

            <div className="w-[300px] md:w-[360px] ml-[40px]">
              <div>
                <div className="h-[30px] text-[#4f4f4f] flex gap-[25px] lg:gap-3 mt-[10px] justify-center md:justify-start">
                  <span className="text-[14px] font-medium">
                    Çekiliş no: {lastDrawNumber}
                  </span>
                  <span className="text-[14px] text-[#4f4f4f]">
                    {lastDrawDate}-{lastDrawTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-medium items-end justify-start mb-[6px] md:justify-start">
                {item.last.drawDetail.winningNumbers?.map((winning, i) =>
                  winning.numbers.map((num, j) => {
                    const numberDynamicBg =
                      winning.id === 2
                        ? "bg-[#169ad6]"
                        : winning.id === 3
                        ? "bg-[#ffe103]"
                        : gameButton.active.bg;
                    const textColor =
                      winning.id === 3 ? "text-[#383838]" : "text-white ";
                    const topLabel =
                      winning.name === "joker"
                        ? "Joker"
                        : winning.name === "superstar"
                        ? "SüperStar"
                        : "";

                    return (
                      <div
                        key={`${i}-${j}`}
                        className="flex relative flex-col items-center"
                      >
                        {topLabel && (
                          <span className="text-[8px] md:text-[10px] text-[#383838] mb-1">
                            {topLabel}
                          </span>
                        )}
                        <span
                          className={`flex items-center justify-center rounded-full md:text-[16px] text-[13.6px] px-2 py-1 md:h-[35px] md:w-[35px] h-[25px] w-[25px] ${numberDynamicBg} ${textColor}`}
                        >
                          {num}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="my-2 text-center md:text-left text-[#169ad6] font-[14px] text-sm cursor-pointer">
                DETAYLAR
              </div>
            </div>
            <div
              className={`flex relative flex-row h-[60px] md:h-full w-full md:w-[228px] text-white ml-auto p-2 pb-[60px] md:flex-col justify-between items-start md:items-end rounded-bl-md md:rounded-bl-none rounded-br-md md:rounded-tr-md md:rounded-br-md] ${gameButton?.active.bgbanner}`}
            >
              <div className="flex flex-col">
                <div className="text-white text-end text-[11px] md:text-[12px] md:mt-3 ">
                  SIRADAKİ ÇEKİLİŞ
                  <span className="font-bold ml-1 ">{nextDrawDate}</span>
                </div>
                <div className="relative flex justify-end items-center">
                  <span className="text-[30px] font-bold">{nextJackpot}</span>
                  <span className="text-[20px] font-bold"> ₺ </span>
                </div>
              </div>
              <div className="flex bg-white rounded-full text-[#ea0029] text-center justify-center items-center text-[14px] w-[120px] h-[36px] md:w-[137px] md:h-[32px] cursor-pointer my-[6px] ">
                HEMEN OYNA
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tickets;
