const jwt = require("jsonwebtoken");
const generateAuthToken = (payload, secretKey, options) => {
  return jwt.sign(payload, secretKey, options);
};

const verifyAuthToken = (token, secretKey) => {
  return jwt.verify(token, secretKey, {
    maxAge: "1d",
  });
};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
