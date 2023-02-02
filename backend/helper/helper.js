const pool = require("../pool");
const bcrypt = require("bcrypt");

async function isEmailValid(email) {
  try {
<<<<<<< Updated upstream:backend/helper.js
    const emails = await pool.query(
      "SELECT email FROM users WHERE email = $1",
      [email]
=======
    const emailUniqueness = await pool.query(
      `SELECT users.id, users.email, roles.role 
      FROM users
      INNER JOIN users_roles
      ON users.id = users_roles.user_id 
      INNER JOIN roles
      ON users_roles.role_id = roles.id
      WHERE users.email = '${email}'`
>>>>>>> Stashed changes:backend/helper/helper.js
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
