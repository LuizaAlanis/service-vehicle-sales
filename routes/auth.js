const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Client } = require("pg");

const router = express.Router();

const connectionString = "postgresql://postgres:123456@localhost:5432/vehicle_sales";

const secret = 'supersecret';

const client = new Client({
  connectionString: connectionString
});
client.connect();

async function getUser(personId) {
  return new Promise(res => {
    setTimeout(() => {
      const text =  'SELECT * FROM users WHERE username = $1';
      const values = [personId];
      res(client.query(text, values));
    }, 2000);
  })
}

function isTokenValid(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return true;
  } catch (ex) {
    return false;
  }
}

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await getUser(username);

  if( !(typeof user !== 'undefined' && user !== null) ) return res.status(400).send('Username or password is incorrect');

  const isPasswordValid = bcrypt.compareSync(password, user.rows[0]['password']);
  if (!isPasswordValid) return res.status(400).send('Username or password is incorrect');

  const token = jwt.sign({ id: user.id }, secret, { expiresIn: '7d' });

  return res.json({ token });
});

router.get("/vehicles", (req, res) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  const isValid = isTokenValid(token);

  if(isValid){
    client.query("SELECT * FROM vehicles", (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    });
  }
  else
    res.status(400).send('Invalid token');

  
});

router.get('/protected', (req, res) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  const isValid = isTokenValid(token);

  if(isValid)
    res.send('Access granted');
  else
    res.status(400).send('Invalid token');

});

module.exports = router;