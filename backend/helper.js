const pool = require("./pool");
const bcrypt = require("bcrypt");

async function isEmailValid(email) {
  try {
    const emailUniqueness = await pool.query(
      "SELECT email, id FROM users WHERE email = $1",
      [email]
    );
    if (emailUniqueness.rowCount == 0) {
      return undefined;
    }
    return emailUniqueness;
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
