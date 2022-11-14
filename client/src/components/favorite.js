import { useState, useEffect } from "react";
import Trade from "./trade";

const Favorite = () => {
  const [trades, SetTrades] = useState([]);

  const getFavorites = async () => {
    const response = await fetch(`/api/favorite?users_id=3`);
    const trades = await response.json();
    SetTrades(trades);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="trades">
      <div>
        <h2>Favorite Trades List</h2>
      </div>
      {/* {favorites.join(":")} */}
     
      <Trade trades={trades} isFavorite={false} onUpdate={getFavorites}/>
    </div>
  );
};

export default Favorite;
