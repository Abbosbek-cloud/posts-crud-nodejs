const Post = require("../models/post");

const postController = {
  getPosts: (req, res) => {
    Post.find()
      .select("id title body")
      .then((posts) => {
        res.json({
          posts: posts,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  getSinglePost: (req, res) => {
    const postId = req.params.id;

    Post.findById(postId)
      .then((post) => {
        if (!post) {
          return res.status(404).json({
            message: "Post not found",
            post: null,
          });
        }
        return res.status(200).json({
          post: post,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  createPost: (req, res) => {
    const post = new Post(req.body);

    post.save().then((result) => {
      res.json({
        post: result,
      });
    });
  },
  deletePost: (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndDelete(postId)
      .then((post) => {
        res.json({
          message: "Post deleted successfully",
          post: post,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  updatePost: (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;
    Post.findByIdAndUpdate(postId, updatedData, { new: true })
      .then((post) => {
        res.json({
          message: "Post updated successfully",
          post: post,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
};

module.exports = postController;
