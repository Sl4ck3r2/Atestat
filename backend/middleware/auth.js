const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role === "SUPERADMIN") {
      return next();
    }
    if (req.user.role == role) {
      return next();
    }
    if (req.user.role !== role) {
      return res.status(403).send("Not allowed");
    }
  };
}

module.exports = { verifyToken, authRole };
