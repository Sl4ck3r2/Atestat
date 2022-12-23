const pool = require("./pool");
const bcrypt = require("bcrypt");

async function isEmailValid(email) {
  try {
    const emails = await pool.query(
      "SELECT email FROM users WHERE email = $1",
      [email]
    );
    if (emails.rowCount == 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}

async function isPasswordValid(password, email) {
  try {
    const emailPassword = await pool.query(
      "SELECT password FROM users WHERE email = $1",
      [email]
    );
    return bcrypt.compareSync(password, emailPassword.rows[0].password);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { isEmailValid, isPasswordValid };
