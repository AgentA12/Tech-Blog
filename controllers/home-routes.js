const router = require("express").Router();
const { compareSync } = require("bcrypt");
const { Post, User, Comment } = require("../models/index");
const { format_date } = require("../utils/helpers");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["post_body", "post_title", "id", "createdAt"],
    include: [
      {
        model: User,
      },
      {
        model: Comment,
        include: { model: User },
      },
    ],

    nest: true,
  }).then((dbPostData) => {
    if (!dbPostData.length) {
      res.render("nopost", { loggedIn: req.session.loggedIn });
    } else {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      posts.forEach((post) => {
        post.createdAt = format_date(post.createdAt);
        post.comments.forEach(
          (comment) => (comment.createdAt = format_date(comment.createdAt))
        );
        post.comments.createdAt = format_date(post.comments.createdAt);
      });
      res.render("home", { posts, loggedIn: req.session.loggedIn });
    }
  });
});

module.exports = router;
