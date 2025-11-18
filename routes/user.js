const express = require("express");
const userController = require("../controller/user");
const userValidators = require("../helper/validators/user");
const authMiddleware = require("../helper/middleware/authMiddleware");

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getSingleUser);
router.put(
  "/:id",
  [userValidators.updateUser, authMiddleware],
  userController.updateUser
);
router.delete(
  "/:id",
  [userValidators.updateUser, authMiddleware],
  userController.deleteUser
);

module.exports = router;
