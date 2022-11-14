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
      <ul id="favorite" className="row justify-content-md-center list-unstyled">
        {trades.map((trade) => (
          <li key={trade.id} className="col col-sm-4 mb-3">
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
                <button>
                  <span
                    className="material-symbols-outlined"
                    // onClick={() => }
                  >
                    unfavorite
                  </span>
                </button>
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
