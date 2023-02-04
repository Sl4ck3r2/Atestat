const pool = require("../pool");
const bcrypt = require("bcrypt");

async function isEmailValid(email) {
  try {
    const emailUniqueness = await pool.query(
      `SELECT  users.id, users.email, roles.role
      FROM users
      INNER JOIN users_roles
      ON users.id = users_roles.user_id
      
      INNER JOIN roles
      ON users_roles.role_id = roles.id
      WHERE users.email='${email}'`
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
