import { useState, useEffect} from "react";
import { API_URL } from "../constants";


const Favorite = (props) => {
    const [trade, setTrade] = useState([]);

    const loadTrade = () => {
        fetch("/api/favorite/:id")
            .then((response) => response.json())
            .then(trade => {
                setTrade(trade);
                console.log("Trades list for the user", trade)
            })
    }

    useEffect(() => {
        loadTrade();
    }, []);

    const deleteTrade = async (deleteId) => {
        await fetch(`${API_URL}/api/trade/${deleteId}`, {
          method: "DELETE",
        }).then((response) => {
            if(response.ok) {
                loadTrade();
            }
        })
      };

    return (
        <div className="trades">
            <div>
                <h2>Favorite Trades List</h2>

            </div>
            <div>
                <h3>{props.firstname}</h3>
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
                  <button className="btn btn-danger">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => deleteTrade(trades.id)}
                    >
                      Delete
                    </span>
                  </button>
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