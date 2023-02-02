const pool = require("../pool");
const router = require("express").Router();
<<<<<<< Updated upstream
const { verifyToken } = require("../middleware/auth");

=======
const { verifyToken, authRole } = require("../middleware/auth");
const { isEmailValid } = require("../helper/helper.js");
const { ROLE } = require("../helper/roles");
>>>>>>> Stashed changes
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

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
});

<<<<<<< Updated upstream
router.get("/users", async (req, res) => {
  const page = req.query.page;
  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;
=======
router.put("/user/current", verifyToken, async (req, res) => {
  const data = await req.body;
  const emailIsValid = await isEmailValid(data.email);
  const previousEmail = req.user.email;

  if (previousEmail.email !== data.email) {
    if (!!emailIsValid) {
      return res.status(409).send("Email alredy existing");
    }
  }
  req.user.email = data.email;
  const response = await pool.query(
    `UPDATE users SET first_name = '${data.firstName}' , last_name = '${data.lastName}' , email = '${data.email}', city = '${data.city}', state= '${data.state}',
       country='${data.country}', profile_picture_url = '${data.profilePictureUrl}' WHERE id= '${req.user.id}'`
  );
  return res.status(200).json("Data has been updated");
});

router.get(
  "/users",
  verifyToken,
  authRole(ROLE.SUPERADMIN),
  async (req, res) => {
    const page = req.query.page;
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
>>>>>>> Stashed changes

    try {
      const response =
        await pool.query(`SELECT  users.first_name, users.last_name, users.email, users.created_at, roles.id,
    roles.role ,users_roles.user_id
    FROM users
    INNER JOIN users_roles
    ON users.id = users_roles.user_id
    
    INNER JOIN roles
    ON users_roles.role_id = roles.id`);
      const usersResponse = response.rows.map((el) => {
        return {
          id: el.user_id,
          firstName: el.first_name,
          lastName: el.last_name,
          email: el.email,
          created_at: el.created_at,
          userRole: {
            id: el.id,
            name: el.role,
          },
        };
      });
      const data = usersResponse.slice(startIndex, endIndex);
      const dataResponse = {
        page: usersResponse.length,
        data: data,
      };

      return res.status(200).send(dataResponse);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
