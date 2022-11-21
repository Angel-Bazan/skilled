import React from "react";

const Trade = ({ trades, isFavorite, onUpdate }) => {
  const favoriteTrade = async (postId) => {
    await fetch(`/api/favorite/${postId}`, {
      method: "POST",
    });

    onUpdate();
    console.log(postId);
  };

  return (
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
              <a target="_blank" href={trade.link}>Trade Video</a> <br />
            
              <strong>Colleges:</strong>
              {trade.colleges}
              <br />
              <button className="btn btn-primary">
                <span className=" " onClick={() => favoriteTrade(trade.id)}>
                  {isFavorite ? "favorite" : "unfavorite"}
                </span>
              </button>
              <br />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Trade;
