const express = require("express");
const authController = require("../controller/auth");
const authValidators = require("../helper/validators/auth");

const router = express.Router();

router.post(
  "/register",
  authValidators.registerValidator,
  authController.register
);

router.post("/login", authValidators.loginValidator, authController.login);

module.exports = router;
