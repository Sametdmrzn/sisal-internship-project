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
  
}


export default Tickets;