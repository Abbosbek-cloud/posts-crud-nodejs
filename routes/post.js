const express = require("express");
const postController = require("../controller/post");
const validator = require("../helper/validators/post");
const authMiddleware = require("../helper/middleware/authMiddleware");

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getSinglePost);
router.post(
  "/create",
  [validator.postValidator, authMiddleware],
  postController.createPost
);
router.put(
  "/update/:id",
  [validator.postValidator, authMiddleware],
  postController.updatePost
);
router.delete("/delete/:id", postController.deletePost);

module.exports = router;
