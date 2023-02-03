const bcrypt = require("bcrypt");
const pool = require("../pool");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { isEmailValid, isPasswordValid } = require("../helper/helper");
const { verifyToken } = require("../middleware/auth");

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
    if (!!emailExist) {
      const isPasswordCorrect = await isPasswordValid(
        data.password,
        data.email
      );
      if (isPasswordCorrect == true) {
        const token = jwt.sign(emailExist.rows[0], process.env.TOKEN_KEY, {
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

router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const emailIsValid = await isEmailValid(data.email);
    if (!!emailIsValid) {
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

module.exports = router;
