import React, { useState, useEffect } from "react";




const Home = ({setView}) => {
  const [quote, setQuote] = useState({});

  const getloadData = async () => {
    const response = await fetch("/api/quote");
    const data = await response.json();
    console.log(data.quote)
    setQuote(data.quote);
  };

  useEffect(() => {
    console.log('I am here')
    getloadData();

  }, []);

  return (
    <div className="home">
      <div>
        <h2 className="topH2">Explore Trades</h2>
      </div>
      <div>
        <h4 className="quote">{JSON.stringify(quote)}</h4>
      </div>
      <div className="btnTrade">
        {" "}
       <button onClick={()=>setView('trades')}>Trades</button>
      </div>
    </div>
  );
};

export default Home;
