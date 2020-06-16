const authConfig = require("../config/auth");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token invalid" });
  }

  const [, token] = authHeader.split(" ");

  try {
    if (token != authConfig.secret) {
      throw new Error("Token invalid");
    }
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
