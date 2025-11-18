const User = require("../models/user");

const userController = {
  getUsers: (req, res) => {
    User.find()
      .select("id name email")
      .then((users) => {
        res.json({ users: users });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
  getSingleUser: (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: "User not found",
            user: null,
          });
        }
        return res.status(200).json({
          user: user,
        });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
  updateUser: (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    User.findByIdAndUpdate(userId, updatedData, { new: true })
      .then((user) => {
        res.json({
          message: "User updated successfully",
          user: user,
        });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
  deleteUser: (req, res) => {
    const userId = req.params.id;

    User.findByIdAndDelete(userId)
      .then((user) => {
        res.json({
          message: "User deleted successfully",
          user: user,
        });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
};

module.exports = userController;
