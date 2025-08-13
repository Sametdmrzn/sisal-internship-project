import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import buttonImages from '../data/buttonImages';

function Tickets(){
  const [games,setGames] = useState ([]);
  const [error,setError] = useState(null);

  useEffect(() => {
  const apiUrl = process.env.REACT_APP_API_URL;
    axios.get(`${apiUrl}`)
      .then(res => setGames(res.data))
      .catch(() => setError("data could not be received"));

  }, []);

  return (
    <div className='bg-white p-4 max-w-[1024px] mx-auto'>
      {games.map((item, index) => {
        const gameCode = item.next.drawDetail.attributes.find(attr => attr.name === "static.game.acronym")?.value || "Bilinmiyor";
        const lastDrawNumber = item.last.drawDetail.drawId.number;
        const lastDrawDate = new Date(item.last.drawDetail.drawDate).toLocaleDateString();
        const lastDrawTime = new Date(item.last.drawDetail.drawDate).toLocaleTimeString();
        const nextDrawNumber = item.next.drawDetail.drawId.number;
        const nextJackpot = item.last.drawDetail.attributes.find(attr => attr.name === "jackpot")?.value;

        return (
          <div className="flex bg-white border-solid  my-2 p-3 shadow-lg rounded-sm" key={index}>
             <div className=" flex items-center justify-center">
              <img
                src={buttonImages[gameCode]}
                alt={gameCode}
                className="max-w-full max-h-full object-contain w-[150px] h-[90px] justify-center"
              />
            </div>

            <div className='w-[350px]'>
              <div className=''>
                <div>
                  Çekiliş No
                  <div>{lastDrawNumber}</div>
                </div>
                <span>{lastDrawDate}</span>
                <span> -- </span>
                <span>{lastDrawTime}</span>
              </div>

              <div>
                

                {item.last.drawDetail.winningNumbers?.map((winning,i) => 
                  winning.numbers.map((num,j) => (
                    <span
                      key={`${i}-${j}`}
                      className='bg-red-600 rounded-full text-white max-w- text-sm px-2 py-1'>
                        {num}
                    </span>
                  )))}

              </div>

              <div>DETAYLAR</div>
            </div>

            <div className='bg-gradient-to-b from-[#DF081A] to-[#FB636F] p-8 text-white ml-auto'>
              <div>
                SIRADAKİ ÇEKİLİŞ <span>{nextDrawNumber}</span>
              </div>
              <span>{nextJackpot}</span>
              <div>HEMEN OYNA</div>
            </div>
          </div>
        );

      })}
    </div>
  );
  
}


export default Tickets;