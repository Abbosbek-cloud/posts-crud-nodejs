const express = require("express");

const postRoutes = require("./post");
const userRoutes = require("./user");
const authRoutes = require("./auth");

const router = express.Router();

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
