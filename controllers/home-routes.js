const router = require("express").Router();
const { compareSync } = require("bcrypt");
const { raw } = require("express");
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
        attributes: ["id", "comment_body", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
    raw: true,
    nest: true,
  }).then((dbPostData) => {
    if (!dbPostData.length) {
      res.render("nopost");
    } else {
      console.log(dbPostData);
      dbPostData.forEach((post) => {
        post.createdAt = format_date(post.createdAt);
        post.comments.created_at = format_date(post.comments.created_at);
      });
      res.render("home", { dbPostData, loggedIn: req.session.loggedIn });
    }
  });
});

module.exports = router;
