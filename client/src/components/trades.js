import { useState, useEffect } from "react";
// import Form from "./form";
import { API_URL } from "../constants";

const Trades = () => {
  const [trades, SetTrades] = useState([]);
  const [favorites, SetFavorites] = useState([]);
  // const [name, setName] = useState("");
  // const [link, setLink] = useState("");
  // const [content, setContent] = useState("");
  // const [img, setImg] = useState("");
  // const [id, setId] = useState(-1); //by default you are not editing anything so id -1;

  const addTrade = (newTrade) => {
    SetTrades((trades) => [...trades, newTrade]);
  };
  const deleteTrade = async (deleteId) => {
    await fetch(`${API_URL}/api/trade/${deleteId}`, {
      method: "DELETE",
    });

    await getTrade();
    console.log(deleteId);
  };
  const favoriteTrade = async (postId) => {
    await fetch(`${API_URL}/api/favorite/${postId}`, {
      method: "POST",
    });

    await getTrade();
    console.log(postId);
  };

  // const editTrade = async () => {
  //   await fetch(`${API_URL}/api/blog/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, blurb, content, img }),
  //   });

  //   await getBlog();
  //   setId(-1); //that is the function you call when you click the edit button and are done editing
  // };

  const getTrade = async () => {
    const response = await fetch(`${API_URL}/api/trade`);
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
      <ul id="trade" className="row justify-content-md-center list-unstyled">
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
                  <button className="btn btn-danger">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => deleteTrade(trade.id)}
                    >
                      Delete
                    </span>
                  </button>
                  <br />
                  <button>
                
                    <span className="material-symbols-outlined" onClick={() => favoriteTrade(trade.id)}>favorite</span>
                  </button>
                  <br />
                </div>
              </div>
              
            </li>
           
          );
        })}
      </ul>
      {/* <div className={id === -1 ? "d-none" : "d-block"}>
        <label htmlFor="edit-blog-name">Name</label>
        <input
          id="edit-blog-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-blog-blurb">Blurb</label>
        <input
          id="edit-blog-blurb"
          type="text"
          value={blurb}
          onChange={(e) => {
            setBlurb(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-blog-content">Content</label>
        <input
          id="edit-blog-content"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-blog-image">Image</label>
        <input
          id="edit-blog-image"
          type="text"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button className="btn btn-primary" onClick={editBlog}>
          Update User
        </button>
      </div> */}
      {/* <Form addTrade={addTrade} /> */}
    </section>
  );
};

export default Trades;
