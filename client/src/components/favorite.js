import { useState, useEffect} from "react";
import { API_URL } from "../constants";


const Favorite = (props) => {
    const [trades, SetTrades] = useState([]);
    const [favorites, SetFavorites] = useState([]);

    const getFavorites = async () => {
        const response = await fetch(`${API_URL}/api/favorite?users_id=3`);
        const favorite = await response.json();
        SetFavorites(favorite)
      }

    // const loadTrade = (newTrade) => {
    //     fetch("/api/favorite/:id")
    //         .then((response) => response.json())
    //         .then(trade => {
    //             setTrade(trade);
    //             console.log("Trades list for the user", trade)
    //         })
    // }

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
            {favorites.join(":")}
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

            
        </div>
    )
}

export default Favorite