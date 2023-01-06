const pool = require("../pool");
const router = require("express").Router();
const { verifyToken } = require("../middleware/auth");

router.get("/user/current", verifyToken, async (req, res) => {
  try {
    const queryEmail = req.user.email;
    const information = await pool.query(`SELECT * 
      FROM users
      INNER JOIN users_roles
      ON users.id = users_roles.user_id
      
      INNER JOIN roles
      ON users_roles.role_id = roles.id
      WHERE users.email = '${queryEmail}'`);

    const response = {
      id: information.rows[0].id,
      firstName: information.rows[0].first_name,
      lastName: information.rows[0].last_name,
      email: information.rows[0].email,
      userRole: {
        id: information.rows[0].role_id,
        name: information.rows[0].role,
      },
    };
    console.log(response);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const response =
      await pool.query(`SELECT users.id, users.first_name, users.last_name, users.email, users.created_at, roles.id, roles.role 
    FROM users
    INNER JOIN users_roles
    ON users.id = users_roles.user_id
    
    INNER JOIN roles
    ON users_roles.role_id = roles.id`);

    const data = response.rows.map((el) => {
      return {
        id: el.id,
        firstName: el.first_name,
        lastName: el.last_name,
        email: el.email,
        created_at: el.created_at,
        userRole: {
          id: el.role_id,
          name: el.role,
        },
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
