import React from "react";

const Home = ({setView}) => {
  return (
    <div className="home">
      <div>
        <h2 className="topH2">Explore Trades</h2>
      </div>
      <div className="btnTrade">
        {" "}
       <button onClick={()=>setView('trades')}>Trades</button>
      </div>
    </div>
  );
};

export default Home;
