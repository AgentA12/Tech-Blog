const router = require("express").Router();
const { Post, User } = require("../models/index");

router.get("/", (req, res) => {
  User.findAll({
    include: {
      model: Post,
      attributes: ["post_body", "post_title"],
    },
  }).then((dbPostData) => {
    const postsArray = dbPostData.map((post) => post.get({ plain: true }));
    res.render("home", postsArray);
  });
});

module.exports = router;
