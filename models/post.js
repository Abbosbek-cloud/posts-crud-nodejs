// models/post.js
const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - owner
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *           example: 507f1f77bcf86cd799439011
 *         title:
 *           type: string
 *           minLength: 4
 *           maxLength: 150
 *           description: Post title
 *           example: My First Blog Post
 *         body:
 *           type: string
 *           minLength: 4
 *           maxLength: 1500
 *           description: Post content
 *           example: This is the body content of my first blog post...
 *         owner:
 *           type: string
 *           description: User ID who created the post
 *           example: 507f1f77bcf86cd799439011
 *       example:
 *         id: 507f1f77bcf86cd799439012
 *         title: My First Blog Post
 *         body: This is the body content of my first blog post...
 *         owner: 507f1f77bcf86cd799439011
 */

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", postSchema);