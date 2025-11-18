const userController = {
  getUsers: (req, res) => {
    res.send({
      message: "Get all users",
    });
  },
  getSingleUser: (req, res) => {
    res.send({
      message: `Get user with ID: ${req.params.id}`,
    });
  },
  updateUser: (req, res) => {
    res.send({
      message: `Update user with ID: ${req.params.id}`,
    });
  },
  deleteUser: (req, res) => {
    res.send({
      message: `Delete user with ID: ${req.params.id}`,
    });
  },
};

module.exports = userController;
