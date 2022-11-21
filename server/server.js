const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");
const bodyParser = require("body-parser");
const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");
const { fileURLToPath } = require('url');

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR))
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// create the get request
app.get("/api/trade", cors(), async (req, res) => {
  try {
    const { rows: trades } = await db.query("SELECT * FROM trades");
    res.send(trades);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
app.get("/api/user", cors(), async (req, res) => {
  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/api/favorite", cors(), async (req, res) => {
  const userID = req.query.users_id;
  console.log(userID)
  try {
    const { rows: trade_ids } = await db.query(
      "SELECT trades.id, trades.img, trades.name, trades.link, trades.colleges FROM trades INNER JOIN users_trades ON trades.id=users_trades.trade_id WHERE users_trades.users_id = $1",
      [userID]
    );
    res.send(trade_ids);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.get("/api/quote", (req, res) => {
  const url = `https://motivational-quote-api.herokuapp.com/quotes/random`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});
// create the POST request
app.post("/api/blog", cors(), async (req, res) => {
  const newBlog = {
    title: req.body.title,
    blurb: req.body.blurb,
    content: req.body.content,
    img: req.body.img,
  };
  console.log([newBlog.title, newBlog.blurb]);
  const result = await db.query(
    "INSERT INTO blog(title, blurb, content, img) VALUES($1, $2, $3, $4) RETURNING *",
    [newBlog.title, newBlog.blurb, newBlog.content, newBlog.img]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.post("/api/favorite/:id", cors(), async (req, res) => {
  const tradeId = req.params.id;
  const newFavorite = {
   
    userId: 3,
  };
  const existing = await db.query(
    "SELECT id FROM users_trades WHERE users_id = $1 and trade_id = $2",
    [newFavorite.userId, tradeId]
  );
  console.log(existing.rows);
  console.log([newFavorite.userId, newFavorite.tradeId]);
 
  if (existing.rows.length >= 1) {
    const nonExisting = await db.query(
      "DELETE FROM users_trades WHERE id = $1",
      [existing.rows[0].id]
    );
  } else {
    const result = await db.query(
      "INSERT INTO users_trades(users_id, trade_id) VALUES($1, $2) RETURNING *",
      [newFavorite.userId, tradeId]
    );
    console.log(result.rows[0]);
  }
  res.json({ key: "success" });
});

app.delete("/api/trades/:id", async (req, res) => {
  const tradeId = req.params.id; //It has to match
  console.log(tradeId);
  try {
    await db.query("DELETE FROM trades WHERE id=$1", [tradeId]);
    res.send({ status: "success" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.post("/api/me", cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub,
  };
  //console.log(newUser);

  const queryEmail = "SELECT * FROM users WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.rows[0]) {
    console.log(`Thank you ${resultsEmail.rows[0].firstname} for coming back`);
  } else {
    const query =
      "INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [
      newUser.lastname,
      newUser.firstname,
      newUser.email,
      newUser.sub,
    ];
    const result = await db.query(query, values);
    console.log(result.rows[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
