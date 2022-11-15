import { useState, useEffect } from "react";
import Trade from "./trade";

const Trades = () => {
  const [trades, SetTrades] = useState([]);
  

  const addTrade = (newTrade) => {
    SetTrades((trades) => [...trades, newTrade]);
  };
  const deleteTrade = async (deleteId) => {
    await fetch(`/api/trade/${deleteId}`, {
      method: "DELETE",
    });

    await getTrade();
    console.log(deleteId);
  };
  const favoriteTrade = async (postId) => {
    await fetch(`/api/favorite/${postId}`, {
      method: "POST",
    });

    await getTrade();
    console.log(postId);
  };

  const getTrade = async () => {
    const response = await fetch(`/api/trade`);
    const trade = await response.json();
    SetTrades(trade);
  };
  const getFavorite = async (postId) => {
    const response = await fetch(`${API_URL}/api/favorite/${postId}`);
    const favorite = await response.json();
    SetFavorites(favorite)
  }



  useEffect(() => {
    getTrade();
    console.log(trades,'trades')
  }, []);

  return (
    <section className="trade container">
      <h2 className="list-of-trades">List of Trades</h2>
      {/* <ul id="trade" className="row justify-content-md-center list-unstyled">
        {trades.map((trade, index) => {
          return (
            <li key={index} className="col col-sm-4 mb-3">
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
                  {/* <button
                    className="btn btn-primary"
                    onClick={() => {
                      setName(trade.name);
                      setLink(trade.link);
                      setContent(trade.content);
                      setImg(trade.img);
                      setId(trade.id); //This will update to a non negative id value
                    }}
                  >
                    Edit
                  </button> */}
                  {/* <button className="btn btn-danger">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => deleteTrade(trade.id)}
                    >
                      Delete
                    </span>
                  </button> */}
                  {/* <br />
                  <button>
                
                    <span className="material-symbols-outlined" onClick={() => favoriteTrade(trade.id)}>favorite</span>
                  </button>
                  <br />
                </div>
              </div>
              
            </li>
           
          );
        })}
      </ul> */} 
 
     <Trade trades={trades} isFavorite={true} onUpdate={getTrade} />
    </section>
  );
};

export default Trades;
