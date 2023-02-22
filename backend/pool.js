require("dotenv").config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query("SELECT version()", (err, res) => {
  if (err) {
    console.log("Nu s-a putut conecta la baza de date:", err);
  } else {
    console.log("Conectat la baza de date");
    console.log(res.rows[0]);
  }
});

module.exports = pool;
