import { useState, useEffect } from "react";
// import Trade from "./trades";


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
      <ul>
        {trades.map((trade) => (
          <li key={trade.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={trade.img} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <br />
                <strong>Name:</strong>
                {trade.name}
                <br />
                <strong>Link:</strong>
                {trade.link} <br />
                <strong>Content:</strong>
                {trade.content}
                <br />
                <strong>Colleges:</strong>
                <br />
                <br />
              </div>
            </div>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Favorite;
