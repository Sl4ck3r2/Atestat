const pool = require("../pool");
const router = require("express").Router();
const { verifyToken, authRole } = require("../middleware/auth");
const { isEmailValid } = require("../helper/helper");
const { ROLE } = require("../helper/roles");
router.get("/user/current", verifyToken, async (req, res) => {
  try {
    const id = req.user.id;
    const information = await pool.query(`SELECT * 
      FROM users
      INNER JOIN users_roles
      ON users.id = users_roles.user_id
      INNER JOIN roles
      ON users_roles.role_id = roles.id
      WHERE users_roles.user_id = '${id}'`);

    const response = {
      firstName: information.rows[0].first_name,
      lastName: information.rows[0].last_name,
      email: information.rows[0].email,
      city: information.rows[0].city,
      state: information.rows[0].state,
      country: information.rows[0].country,
      profilePictureUrl: information.rows[0].profile_picture_url,
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

router.get(
  "/user",
  verifyToken,
  authRole([ROLE.SUPERADMIN, ROLE.ADMIN]),
  async (req, res) => {
    const { email } = req.query;
    const response = await pool.query(
      `SELECT  *
    FROM users
    INNER JOIN users_roles
    ON users.id = users_roles.user_id
    
    INNER JOIN roles
    ON users_roles.role_id = roles.id
    WHERE users.email='${email}'`
    );
    const user = {
      firstName: response?.rows[0]?.first_name,
      lastName: response?.rows[0]?.last_name,
      email: response?.rows[0]?.email,
      city: response?.rows[0]?.city,
      state: response?.rows[0]?.state,
      country: response?.rows[0]?.country,
      profilePictureUrl: response?.rows[0]?.profile_picture_url,
      userRole: {
        id: response?.rows[0]?.role_id,
        name: response?.rows[0]?.role,
      },
    };
    return res.status(200).send(user);
  }
);

router.put(
  "/role/update",
  verifyToken,
  authRole([ROLE.SUPERADMIN]),
  async (req, res) => {
    const { id, email } = req.query;
    await pool.query(`
    UPDATE users_roles AS ur
    SET role_id = ${id}
    FROM users AS u
    WHERE u.email = '${email}'
    AND ur.user_id = u.id;`);

    return res.status(200).json("Role has been updated");
  }
);

router.post("/add-friend", verifyToken, async (req, res) => {
  const { friendId } = req.query;
  const userId = req.user.id;
  try {
    await pool.query(
      `INSERT INTO friends (user_id, friend_id) VALUES (${userId}, ${friendId})`
    );
    return res.status(200).send("Friend request sent");
  } catch (error) {
    console.log(error);
    return res.status(409).send("Friend request allready submited");
  }
});

router.post("/accept-friend", verifyToken, async (req, res) => {
  const { friendId } = req.query;
  console.log(friendId);
  const userId = req.user.id;
  console.log(userId);
  try {
    await pool.query(
      `UPDATE friends SET status = 'accepted' WHERE user_id = ${friendId} AND friend_id = ${userId}`
    );
    return res.status(200).send("Friend request accepted");
  } catch (error) {
    console.log(error);
    return res.status(409).send("Friend request allready accepted");
  }
});

router.post("/reject-friend", verifyToken, async (req, res) => {
  const { friendId } = req.query;
  const userId = req.user.id;
  try {
    await pool.query(
      `DELETE FROM friends
       WHERE user_id = ${friendId} AND friend_id = ${userId}`
    );
    return res.status(200).send("Friend request rejected");
  } catch (error) {
    console.log(error);
  }
});

router.get("/friends-list", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const response = await pool.query(`
      SELECT * FROM users
      LEFT JOIN friends
      ON users.id = friends.user_id
      WHERE friends.friend_id = ${userId}
      UNION
      SELECT * FROM users
      LEFT JOIN friends
      ON users.id = friends.friend_id
      WHERE friends.user_id = ${userId} AND friends.status = 'accepted'
    `);

    const data = response.rows.map((el) => {
      return {
        id: el.user_id,
        firstName: el.first_name,
        lastName: el.last_name,
        email: el.email,
        profilePictureUrl: el.profile_picture_url,
        status: el.status,
      };
    });
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/add-friend-list", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const { rows } = await pool.query(
      `SELECT u.id, u.first_name, u.last_name, u.email, u.profile_picture_url, f.user_id AS friend_user_id, f.friend_id AS friend_friend_id
       FROM users u
       LEFT JOIN friends f ON (u.id = f.user_id OR u.id = f.friend_id) AND (f.user_id = $1 OR f.friend_id = $1)
       WHERE u.id != $1;`,
      [userId]
    );

    const filteredRows = rows.filter(
      (row) =>
        row.friend_user_id === null ||
        row.friend_friend_id === null ||
        (row.friend_user_id !== userId && row.friend_friend_id !== userId)
    );

    const response = filteredRows.map((row) => ({
      id: row.id,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      profilePictureUrl: row.profile_picture_url,
    }));

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
});

router.put("/user/current", verifyToken, async (req, res) => {
  const data = await req.body;
  const emailIsValid = await isEmailValid(data.email);
  const id = req.user.id;

  if (!!emailIsValid) {
    if (emailIsValid.rows[0].id !== id) {
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
  authRole([ROLE.SUPERADMIN, ROLE.ADMIN]),
  async (req, res) => {
    const page = req.query.page;
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;

    try {
      const response =
        await pool.query(`SELECT  users.first_name, users.last_name, users.profile_picture_url, users.email, users.created_at, roles.id,
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
          profilePictureUrl: el.profile_picture_url,
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
