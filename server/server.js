const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');
const bodyParser = require("body-parser")

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// create the get request
app.get('/api/contacts', cors(), async (req, res) => {
  try {
    const { rows: contacts } = await db.query('SELECT * FROM contacts');
    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//getting infromation specific to id 
app.get('/api/contacts/:contactId', cors(), async (req,res) => {
  try{
  //req.param what you're getting from your url 
    const contactId = req.params.contactId;
    const {rows: contact} = await db.query('SELECT * FROM contacts WHERE id=$1', [contactId]);
    console.log("contacts:", contact);
    res.send(contact);
  } catch (e) {
    return res.send(400).json({e});
  }
  
})

// create the POST request
app.post('/api/contacts', cors(), async (req, res) => {
  const newContact = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile, 
    email: req.body.email, 
    address: req.body.address,
    note: req.body.note
  };
  console.log([newContact.firstname, newContact.lastname]);
  const result = await db.query(
    'INSERT INTO contacts(firstname, lastname, mobile, email, address, note) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    [newContact.firstname, newContact.lastname, newContact.mobile, newContact.email, newContact.address, newContact.note],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.delete('/api/contacts/:id',  async (req, res) => {
  const contactId = req.params.id;
  console.log(contactId);
  try{
  await db.query('DELETE FROM contacts WHERE id=$1', [contactId]);
  res.send({ status: "success" });
  } catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
})

app.put('/api/contacts/:contactId', cors(), async (req, res) => {
  const contactId = req.params.contactId;
  const updatedContact = { id: req.body.id, firstName: req.body.firstname, lastName: req.body.lastname, mobile: req.body.mobile, email: req.body.email, address: req.body.address, note: req.body.note }
  const query = 'UPDATE contacts SET  firstname=$1, lastname=$2, mobile=$3 WHERE id=$4 RETURNING *';
  const values = [updatedContact.firstName, updatedContact.lastName, updatedContact.mobile, contactId];
  try{
    const updated = await db.query(query, values); 
    console.log('updated', updated);
    res.send(updated);
  } catch (e){
    console.log('error', e);
    return res.status(400).json({e});
  }
})
// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
