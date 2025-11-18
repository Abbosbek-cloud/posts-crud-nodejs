const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateAuthToken } = require("../helper/jsonwebtoken");

const authController = {
  register: (req, res) => {
    const body = req.body;

    User.findOne({ email: body.email }).then((user) => {
      if (user) {
        return res.status(400).send({
          error: "User with this email already exists",
        });
      }

      const userObj = {
        name: body.name,
        email: body.email,
      };

      bcrypt.hash(body.password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).send({
            error: "Error hashing password",
          });
        }
        userObj.password = hashedPassword;
        const token = generateAuthToken(userObj, process.env.JWT_SECRET_KEY);

        const newUser = new User(userObj);
        newUser.save().then(() => {
          return res.send({
            message: "User registered successfully",
            token: token,
            user: {
              id: newUser._id,
              name: newUser.name,
              email: newUser.email,
            },
          });
        });
      });
    });
  },
  login: (req, res) => {
    const body = req.body;

    User.findOne({ email: body.email }).then((user) => {
      if (!user) {
        return res.status(400).send({
          error: "Invalid email or password",
        });
      }

      bcrypt.compare(body.password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(400).send({
            error: "Invalid email or password",
          });
        }

        const token = generateAuthToken(userObj, process.env.JWT_SECRET_KEY);

        return res.send({
          message: "User logged in successfully",
          token: token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      });
    });
  },
};

module.exports = authController;
