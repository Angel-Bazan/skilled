const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");
const bodyParser = require("body-parser");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

const PORT = 5000;
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

app.get("/api/join", cors(), async (req, res) => {
  try {
    const { rows: trades } = await db.query(
      "SELECT trades.name, trades.content, trades.link, users.username, users.id AS users_id FROM trades LEFT JOIN users ON trades.users_id = users.id"
    );
    res.send(trades);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//getting infromation specific to id
// app.get("/api/blog/:blogId", cors(), async (req, res) => {
//   try {
//     //req.param what you're getting from your url
//     const tradesId = req.params.tradesId;
//     const getId = await db.query(`SELECT * FROM trades WHERE id=${tradesId}`);
//     console.log("tradesId", tradesId.rows);
//     res.send(getId.rows);
//   } catch (e) {
//     return res.send(400).json({ e });
//   }
// });

app.get('/api/quote', (req,res) => {
  const url=`https://motivational-quote-api.herokuapp.com/quotes/random`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    res.send(data)
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

// app.post("/api/favorite/:id", cors(), async (req, res) => {
//   const blogId = req.params.id;
//   const newFavorite = {
//     // userId: req.body.users_id,
//     userId: 1,
//   };
//   const existing = await db.query(
//     "SELECT id FROM favorite_blogs WHERE blog_id = $1 and users_id = $2",
//     [blogId, newFavorite.userId]
//   );
//   console.log(existing.rows);
//   console.log([newFavorite.userId, newFavorite.blog]);
//   // const result = await db.query(
//   //   'INSERT INTO favorite_blogs(users_id, blog_id) VALUES($1, $2) RETURNING *',
//   //   [newFavorite.userId, newFavorite.blog],
//   // );
//   // console.log(result.rows[0]);
//   // res.json(result.rows[0]);
//   if (existing.rows.length >= 1) {
//     const nonExisting = await db.query(
//       "DELETE FROM favorite_blogs WHERE id = $1",
//       [existing.rows[0].id]
//     );
//   } else {
//     const result = await db.query(
//       "INSERT INTO favorite_blogs(users_id, blog_id) VALUES($1, $2) RETURNING *",
//       [newFavorite.userId, blogId]
//     );
//     console.log(result.rows[0]);
   
//   }
//   res.json({key:'success'});
// });

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

// app.put("/api/blog/:blogId", cors(), async (req, res) => {
//   const blogId = req.params.blogId;
//   const updatedBlog = {
//     id: req.body.id,
//     title: req.body.title,
//     blurb: req.body.blurb,
//     content: req.body.content,
//     img: req.body.img,
//   };
//   const query =
//     "UPDATE blog SET  title=$1, blurb=$2, content=$3, img=$4 WHERE id=$5 RETURNING *";
//   const values = [
//     updatedBlog.title,
//     updatedBlog.blurb,
//     updatedBlog.content,
//     updatedBlog.img,
//     blogId,
//   ];
//   try {
//     const updated = await db.query(query, values);
//     console.log("updated", updated);
//     res.send(updated);
//   } catch (e) {
//     console.log("error", e);
//     return res.status(400).json({ e });
//   }
// });
// // console.log that your server is up and running
 app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
 });
