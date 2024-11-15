const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;


const db = mysql.createConnection({
  host: 'mysql',       
  user: 'user',       
  password: 'password', 
  database: 'mydatabase' 
});


db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL');
});


app.get('/', (req, res) => {
  res.send('Hello, Worldddd!');
});


app.get('/db', (req, res) => {
  db.query('SELECT NOW()', (err, results) => {
    if (err) {
      res.status(500).send('Błąd połączenia z bazą danych');
      return;
    }
    res.send(`Data z bazy danych: ${results[0]['NOW()']}`);
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
