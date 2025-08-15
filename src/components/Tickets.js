import React, { useEffect, useState } from "react";
import axios from "axios";
import buttonImages from "../data/buttonImages";
import buttonData from "../data/buttonsData";

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

  const filteredTickets =
    activeButtonData?.default.code || activeButtonData?.active.code
      ? games.filter((item) => {
          const gameCode =
            item.next.drawDetail.attributes.find(
              (attr) => attr.name === "static.game.acronym"
            )?.value || "Unknown";

          return (
            gameCode ===
            (activeButtonData.default.code || activeButtonData.active.code)
          );
        })
      : games;

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white p-4 max-w-[1024px] mx-auto mt-4">
      {filteredTickets.map((item, index) => {
        const gameCode =
          item.next.drawDetail.attributes.find(
            (attr) => attr.name === "static.game.acronym"
          )?.value || "Bilinmiyor";
        const gameButton = buttonData.find(
          (btn) => btn.default.code === gameCode || btn.active.code === gameCode
        );
        const ticketBg = gameButton?.active.bgbanner;
        const numberBg = gameButton?.active.bg;
        const lastDrawNumber = item.last.drawDetail.drawId.number;
        const lastDrawDate = new Date(
          item.last.drawDetail.drawDate
        ).toLocaleDateString();
        const lastDrawTime = new Date(
          item.last.drawDetail.drawDate
        ).toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        });
        const nextDrawNumber = item.next.drawDetail.drawId.number;
        const nextJackpot = item.last.drawDetail.attributes.find(
          (attr) => attr.name === "jackpot"
        )?.value;

        return (
          <div
            className="flex bg-white border-solid  my-2 p-3 shadow-lg rounded-sm"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                src={buttonImages[gameCode]}
                alt={gameCode}
                className="max-w-full max-h-full object-contain w-[150px] h-[90px] justify-center"
              />
            </div>
            <div className="w-[350px] ml-[40px]">
              <div>
                <div className="h-[30px] text-[#4f4f4f]">
                  <span className="text-[14px] font-medium">
                    Çekiliş no: {lastDrawNumber}
                  </span>
                  <span className="text-[14px] text-[#4f4f4f]">
                    {lastDrawDate} - {lastDrawTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 font-medium">
                {item.last.drawDetail.winningNumbers?.map((winning, i) =>
                  winning.numbers.map((num, j) => (
                    <span
                      key={`${i}-${j}`}
                      className={`flex items-center  bg-gradient-to-b ${numberBg} justify-center rounded-full text-white text-[19px] px-2 py-1 h-[35px] w-[35px] mt-2`}
                    >
                      {num}
                    </span>
                  ))
                )}
              </div>
              <div className="mt-3 text-[#169ad6] font-normal text-sm cursor-pointer">
                DETAYLAR
              </div>
            </div>
            <div
              className={`relative bg-gradient-to-b ${ticketBg} w-[228px] text-white ml-auto flex p-2 flex-col justify-between items-end`}
            >
              <div className="flex flex-col">
                <div className="text-white text-end text-[12px] mt-3 ">
                  SIRADAKİ ÇEKİLİŞ
                  <span className="font-bold ">{lastDrawDate}</span>
                </div>
                <div className="relative flex justify-end">
                  <span className="font-medium text-[30px]">505,3</span>
                  <span className="font-medium text-[30px]">Milyon</span>
                  <span className="font-medium text-[30px]">$</span>
                </div>
              </div>
              <div className="flex bg-white rounded-full text-[#ea0029] text-center justify-center items-center text-sm bottom-0 right-0 w-[137px] h-[32px] cursor-pointer ">
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
