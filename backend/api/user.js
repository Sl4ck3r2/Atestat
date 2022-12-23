const bcrypt = require("bcrypt");
const pool = require("../pool");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { isEmailValid, isPasswordValid } = require("../helper.js");
const { verifyToken, authRole } = require("../middleware/auth");

router.get("/authorization", verifyToken, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const emailExist = await isEmailValid(data.email);
    if (!emailExist) {
      const isPasswordCorrect = await isPasswordValid(
        data.password,
        data.email
      );
      if (isPasswordCorrect == true) {
        const token = jwt.sign(data, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        return res
          .status(200)
          .json({ message: "You are logged", token: token });
      } else {
        return res.status(406).json("Wrong email or password");
      }
    } else {
      return res.status(406).json("Wrong email or password");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-data", async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  return res.status(200).send(response.rows);
});

router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const emailIsValid = await isEmailValid(data.email);
    if (!emailIsValid) {
      return res.status(409).json("Email is allredy used");
    }
    const token = jwt.sign(data, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });
    const saltRounds = bcrypt.genSaltSync(10);
    const cryptedPassword = bcrypt.hashSync(data.password, saltRounds);
    await pool.query(
      "INSERT INTO users (first_name , last_name, email , password) VALUES ($1, $2, $3 , $4)",
      [data.firstName, data.lastName, data.email, cryptedPassword]
    );
    const lastId = await pool.query(
      `SELECT id FROM users WHERE email = '${data.email}'`
    );
    await pool.query("INSERT INTO users_roles (user_id) VALUES ($1)", [
      lastId.rows[0].id,
    ]);
    return res.status(200).json("Succesfully");
  } catch (error) {
    console.log(error);
  }
});
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
    return res.status(200).send(information.rows);
  } catch (error) {
    console.log(error);
  }
});
router.get(
  "/super-admin",
  verifyToken,
  authRole("SUPERADMIN"),
  async (req, res) => {
    try {
      console.log(req.user);
    } catch (error) {
      console.log(error);
    }
  }
);
module.exports = router;
