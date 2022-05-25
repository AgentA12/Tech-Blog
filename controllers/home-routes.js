const router = require("express").Router();
const { Post, User } = require("../models/index");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["post_body", "post_title"],
    include: {
      model: User,
      attributes: ["username", "created_at", 'password'],
    },
    raw: true,
  }).then((dbPostData) => {
    console.log(dbPostData);
    if (!dbPostData.length) {
      res.render("nopost");
    } else res.render("home", { dbPostData, loggedIn: req.session.loggedIn });
  });
});

module.exports = router;
