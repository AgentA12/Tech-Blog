const router = require("express").Router();
const session = require("express-session");
const Post = require("../models/post");
const User = require("../models/user");
const { getUsersPosts } = require("../utils/helpers");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    User.findAll({
      where: {
        id: req.session.user_id,
      },
      include: {
        model: Post,
        attributes: ["post_title", "post_body", "id"],
      },
      raw: true,
    }).then((dbUserData) => {
     
      res.render("dashboard", { loggedIn: req.session.loggedIn, dbUserData });
    });
  } else res.render("dashboard", { loggedIn: req.session.loggedIn });
});

router.post("/", (req, res) => {
  Post.create({
    post_title: req.body.postTitle,
    post_body: req.body.postBody,
    user_id: req.session.user_id,
  }).then((dbUserData) => {
    res.json(dbUserData);
  });
});

module.exports = router;
