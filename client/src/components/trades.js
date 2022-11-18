import { useState, useEffect } from "react";
import Trade from "./trade";

const Trades = () => {
  const [trades, SetTrades] = useState([]);

  const getTrade = async () => {
    const response = await fetch(`/api/trade`);
    const trade = await response.json();
    SetTrades(trade);
  };

  useEffect(() => {
    getTrade();
    console.log(trades, "trades");
  }, []);

  return (
    <section className="trade container">
      <h2 className="list-of-trades">List of Trades</h2>

      <Trade trades={trades} isFavorite={true} onUpdate={getTrade} />
    </section>
  );
};

export default Trades;
