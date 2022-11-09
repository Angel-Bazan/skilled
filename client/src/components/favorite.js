import { useState, useEffect} from "react";
import { API_URL } from "../constants";


const Favorite = (props) => {
    const [trade, setTrade] = useState([]);

    // const loadTrade = (newTrade) => {
    //     fetch("/api/favorite/:id")
    //         .then((response) => response.json())
    //         .then(trade => {
    //             setTrade(trade);
    //             console.log("Trades list for the user", trade)
    //         })
    // }

    // useEffect(() => {
    //     loadTrade();
    // }, []);

    // const loadTrade = (newTrade) => {
    //     return fetch(`${API_URL}/api/favorite/:id`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(newBlog),
    //     })
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log("From the post ", data);
    //         props.addTrade(data);
    //       });
    //};

    return (
        <div className="trades">
            <div>
                <h2>Favorite Trades List</h2>

            </div>

            <ul>
                {trade.map(trades =>

                <li key={trades.id}>
                       <div className="card" style={{ width: "18rem" }}>
                <img src={trades.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <br />
                  <strong>Name:</strong>
                  {trades.name}
                  <br />
                  <strong>Link:</strong>
                  {trades.link} <br />
                  <strong>Content:</strong>
                  {trades.content}
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