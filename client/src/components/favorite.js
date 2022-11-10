import { useState, useEffect} from "react";
import Trades from "./trades";
import { API_URL } from "../constants";


const Favorite = () => {
    const [trades, SetTrades] = useState([]);
  

    const getFavorites = async () => {
        const response = await fetch(`${API_URL}/api/favorite`);
        const trades = await response.json();
        SetTrades(trades)
      }

    useEffect(() => {
        getFavorites();
    }, []);

    // const loadTrade = (newTrade) => {
    //     return fetch(`${API_URL}/api/favorite/:id`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(newTrade),
    //     })
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log("From the post ", data);
    //         props.addTrade(data);
    //       });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     postTade(trade);
    //   };

    return (
        <div className="trades">
            <div>
                <h2>Favorite Trades List</h2>

            </div>
            {/* {favorites.join(":")} */}
            <ul>
                {trades.map(trade =>

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
                  )}   
            </ul>
            <Trades getFavorites={getFavorites} />
        </div>
    )
}

export default Favorite