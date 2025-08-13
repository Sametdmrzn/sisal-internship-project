import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function Tickets(){
  const [games,setGames] = useState ([]);
  const [error,setError] = useState(null);

  useEffect(() => {
  const apiUrl = process.env.REACT_APP_API_URL;
    axios.get(`${apiUrl}`)
      .then(res => {
        setGames(res.data);
        console.log(res.data);
      })
      .catch(() => {    
        setError("data could not be received");
      });
  }, []);

  return (
    <div>
      {games.map((item, index) => {
        const gameCode = item.next.drawDetail.attributes.find(attr => attr.name === "static.game.acronym")?.value || "Bilinmiyor";
        const lastDrawNumber = item.last.drawDetail.drawId.number;
        const lastDrawDate = new Date(item.last.drawDetail.drawDate).toLocaleDateString();
        const lastDrawTime = new Date(item.last.drawDetail.drawDate).toLocaleTimeString();
        const nextDrawNumber = item.next.drawDetail.drawId.number;
        const nextJackpot = item.last.drawDetail.attributes.find(attr => attr.name === "jackpot")?.value;


        return (
          <div className="flex bg-white mx-auto w-[1024px] border-solid border-2 my-2 p-3 shadow-lg rounded-sm" key={index}>
            <div className=''>
              <span>{gameCode}</span>
            </div>

            <div>
              <div>
                <div>
                  Çekiliş No
                  <div>{lastDrawNumber}</div>
                </div>
                <span>{lastDrawDate}</span>
                <span> -- </span>
                <span>{lastDrawTime}</span>
              </div>

              <div>
                
                {item.last.drawDetail.winningNumbers?.map(w => w.numbers?.map(item => <span className='bg-black rounded-full text-white'>{item}</span>))}

              </div>

              <div>DETAYLAR</div>
            </div>

            <div>
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