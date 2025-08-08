import react, { useEffect, useState  } from 'react';
import axios from 'axios';



function Tickets(){

  const [games,setGames] = useState ([]);
  const [loading,setLoading] = useState (true)
  const [error,setError] = useState(null);

  useEffect(() => {
    debugger
    axios.get("https://my-json-server.typicode.com/Sametdmrzn/Figma-/draws")
      .then(res => {
        debugger
        setGames(res.data);
        setLoading(false);
        console.log(res.data); // 1️⃣ Veriyi görmek
      })
      .catch(() => {
        debugger
        setError("Veri Alınamadı")
        setLoading(false);
      });
  }, []);

if (loading) return <p>Yükleniyor...</p>;
if (error) return <p>{error}</p>;

return (
  <div>
    {games.map((game, index) => (
    <div key={index}>
        <h3>{game.name}</h3>
        <p>{game.description}</p>
    </div>
    ))}

  </div>
);
}

export default Tickets;